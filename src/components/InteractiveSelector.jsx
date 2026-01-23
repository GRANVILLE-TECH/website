import React, { useState, useEffect } from 'react';
import { FaHandshake, FaLightbulb, FaHistory, FaPaintBrush, FaMedal } from 'react-icons/fa';
import oneness from '../assets/values/Network.webp';
import excellence from '../assets/values/excellence.webp';
import innovation from '../assets/values/innovation.webp';
import legacy from '../assets/values/legacy.webp';
import creativity from '../assets/values/creativity.webp';
import './InteractiveSelector.css';

const InteractiveSelector = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedOptions, setAnimatedOptions] = useState([]);

    const options = [
        {
            title: "Network",
            description: "Collaboration is key to success. We believe in unity.",
            image: oneness,
            icon: <FaHandshake size={24} className="text-white" />
        },
        {
            title: "Innovation",
            description: "Pushing boundaries with solutions that shape the future.",
            image: innovation,
            icon: <FaLightbulb size={24} className="text-white" />
        },
        {
            title: "Legacy",
            description: "Creating a lasting impact for generations to come.",
            image: legacy,
            icon: <FaHistory size={24} className="text-white" />
        },
        {
            title: "Creativity",
            description: "Embracing curiosity to discover new horizons.",
            image: creativity,
            icon: <FaPaintBrush size={24} className="text-white" />
        },
        {
            title: "Excellence",
            description: "Continually striving for the highest standards.",
            image: excellence,
            icon: <FaMedal size={24} className="text-white" />
        }
    ];

    const handleOptionClick = (index) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const timers = [];

        options.forEach((_, i) => {
            const timer = setTimeout(() => {
                setAnimatedOptions(prev => [...prev, i]);
            }, 180 * i);
            timers.push(timer);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center py-10 w-full text-white">
            {/* Options Container */}
            <div className="options flex w-full max-w-[1200px] min-h-[400px] h-auto md:h-[500px] mx-auto items-stretch overflow-hidden relative flex-col md:flex-row gap-2 md:gap-0">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
              min-h-[200px] md:min-h-0
            `}
                        style={{
                            backgroundImage: `url('${option.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backfaceVisibility: 'hidden',
                            opacity: animatedOptions.includes(index) ? 1 : 0,
                            transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                            margin: 0,
                            cursor: 'pointer',
                            backgroundColor: '#18181b', // fallback
                            boxShadow: activeIndex === index
                                ? '0 20px 60px rgba(0,0,0,0.50)'
                                : '0 10px 30px rgba(0,0,0,0.30)',
                            // Flex grow logic handled by Tailwind/style for responsiveness
                        }}
                        // Inline styles for dynamic values that Tailwind can't easily handle with arbitrary values if they change often, 
                        // but we can mix them. We'll use a mix for the flexible width animation.
                        onClick={() => handleOptionClick(index)}
                    >
                        {/* Dynamic style block for flex-grow to avoid complex tailwind classes */}
                        <style>{`
               .option:nth-child(${index + 1}) {
                 flex: ${activeIndex === index ? '5 1 0%' : '1 1 0%'};
               }
               @media (max-width: 768px) {
                 .option:nth-child(${index + 1}) {
                   flex: none;
                   width: 100%;
                   height: ${activeIndex === index ? '400px' : '100px'};
                 }
               }
             `}</style>

                        {/* Overlay for inactive items to make text readable or darken them */}
                        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${activeIndex === index ? 'opacity-20' : 'opacity-60'}`}></div>

                        {/* Shadow effect */}
                        <div
                            className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out z-10"
                            style={{
                                bottom: activeIndex === index ? '0' : '-40px',
                                height: '100%',
                                background: activeIndex === index
                                    ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 50%)'
                                    : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)'
                            }}
                        ></div>

                        {/* Label with icon and info */}
                        <div className={`absolute left-0 right-0 bottom-5 flex items-center justify-start h-16 z-20 pointer-events-none px-4 gap-3 w-full transition-all duration-500`}>
                            <div className={`icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200 ${activeIndex === index ? 'scale-110 border-white' : ''}`}>
                                {option.icon}
                            </div>
                            <div className="info text-white relative overflow-hidden flex-1">
                                <div
                                    className="main font-bold text-lg transition-all duration-700 ease-in-out whitespace-nowrap"
                                    style={{
                                        opacity: activeIndex === index ? 1 : 0.8,
                                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(0)',
                                    }}
                                >
                                    {option.title}
                                </div>
                                <div
                                    className="sub text-sm text-gray-300 transition-all duration-700 ease-in-out leading-tight"
                                    style={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)',
                                        maxHeight: activeIndex === index ? '100px' : '0',
                                    }}
                                >
                                    {option.description}
                                </div>
                            </div>
                        </div>

                        {/* Border highlight */}
                        <div className={`absolute inset-0 border-2 pointer-events-none transition-all duration-500 ${activeIndex === index ? 'border-white/50' : 'border-transparent'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveSelector;
