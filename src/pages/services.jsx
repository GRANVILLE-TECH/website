import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ChevronRight,
  TrendingUp,
  Target,
  Users,
  GitBranch,
  Network,
  Rocket,
} from "lucide-react";

const ServiceCard = React.memo(
  ({ icon: Icon, title, description, benefits = [], index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Side-in from the left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to position
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: index * 0.1, // Staggered delay for sequential animation
        }}
        className="bg-[#1e1e1e]/75 border border-gray-300/45 rounded-2xl p-6 space-y-5 
        transition-all duration-300 
        hover:border-gray-300/75 
        hover:bg-[#1e1e1e]/25
        backdrop-blur-lg
        group"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-xl">
            <Icon className="text-gray-300 w-8 h-8 stroke-[1.5] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>
        <p className="text-silver text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        <div className="border-t border-gray-800/30 pt-4">
          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-center text-gray-300 text-xs tracking-wide"
              >
                <ChevronRight className="mr-2 w-4 h-4 text-white stroke-[2]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }
);

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = React.useMemo(
    () => [
      {
        icon: TrendingUp,
        title: t("services.financialTitle"),
        description: t("services.financialDesc"),
        benefits: t("services.financialBenefits", { returnObjects: true }) || [],
      },
      {
        icon: Target,
        title: t("services.pricingTitle"),
        description: t("services.pricingDesc"),
        benefits: t("services.pricingBenefits", { returnObjects: true }) || [],
      },
      {
        icon: Users,
        title: t("services.stressTestTitle"),
        description: t("services.stressTestDesc"),
        benefits: t("services.stressTestBenefits", { returnObjects: true }) || [],
      },
      {
        icon: GitBranch,
        title: t("services.strategicTitle"),
        description: t("services.strategicDesc"),
        benefits: t("services.strategicBenefits", { returnObjects: true }) || [],
      },
      {
        icon: Network,
        title: t("services.alignmentTitle"),
        description: t("services.alignmentDesc"),
        benefits: t("services.alignmentBenefits", { returnObjects: true }) || [],
      },
      {
        icon: Rocket,
        title: t("services.growthTitle"),
        description: t("services.growthDesc"),
        benefits: t("services.growthBenefits", { returnObjects: true }) || [],
      },
    ],
    [t]
  );

  return (
    <div className="min-h-screen w-[100%] bg-black py-32 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white tracking-tighter"
        >
          {t("services.title")}
        </motion.h2>
        <p className="text-lg text-center mb-16 text-silver">
          {t("services.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={Array.isArray(service.benefits) ? service.benefits : []}
              index={index} // Pass the index for staggered animation
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ServiceCard.displayName = "ServiceCard";

export default React.memo(ServicesPage);
