import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

function LogoColumn({ logos, columnIndex, currentTime }) {
    const CYCLE_DURATION = 2000;
    const columnDelay = columnIndex * 200;
    const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
    const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
    const currentLogo = logos[currentIndex];

    if (!currentLogo) return null;

    return (
        <motion.div
            className="relative h-96 w-[48rem] overflow-hidden md:h-[32rem] md:w-[64rem]" // Quadrupled size
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: columnIndex * 0.1,
                duration: 0.5,
                ease: "easeOut",
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${currentLogo.id}-${currentIndex}`}
                    className="absolute inset-0 flex items-center justify-center p-4"
                    initial={{ y: "10%", opacity: 0 }}
                    animate={{
                        y: "0%",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        },
                    }}
                    exit={{
                        y: "-20%",
                        opacity: 0,
                        transition: { duration: 0.3 },
                    }}
                >
                    <a
                        href={currentLogo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                    >
                        <img
                            src={currentLogo.src}
                            alt={currentLogo.name}
                            className="max-h-full max-w-full object-contain transition-all duration-300"
                        />
                    </a>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

export function LogoCarousel({ columns = 2, logos }) {
    const [logoColumns, setLogoColumns] = useState([]);
    const [time, setTime] = useState(0);

    const distributeLogos = useCallback(
        (logos) => {
            const shuffled = [...logos].sort(() => Math.random() - 0.5);
            const result = Array.from({ length: columns }, () => []);

            shuffled.forEach((logo, index) => {
                result[index % columns].push(logo);
            });

            const maxLength = Math.max(...result.map((col) => col.length));
            result.forEach((col) => {
                while (col.length < maxLength) {
                    col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
                }
            });

            return result;
        },
        [columns]
    );

    useEffect(() => {
        if (logos.length > 0) {
            setLogoColumns(distributeLogos(logos));
        }
    }, [logos, distributeLogos]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center gap-12 py-8">
            {logoColumns.map((columnLogos, index) => (
                <LogoColumn
                    key={index}
                    logos={columnLogos}
                    columnIndex={index}
                    currentTime={time}
                />
            ))}
        </div>
    );
}

LogoColumn.propTypes = {
    logos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            url: PropTypes.string,
        })
    ).isRequired,
    columnIndex: PropTypes.number.isRequired,
    currentTime: PropTypes.number.isRequired,
};

LogoCarousel.propTypes = {
    columns: PropTypes.number,
    logos: PropTypes.array.isRequired,
};
