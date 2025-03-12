import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Brain,
  Settings,
  Code,
  Globe,
  Database,
} from "lucide-react";

const ServiceCard = React.memo(
  ({ icon: Icon, title, description, benefits, index }) => {
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
  const services = React.useMemo(
    () => [
      {
        icon: Globe,
        title: "Recommendation Systems",
        description:
          "AI-powered algorithms delivering personalized insights through advanced behavioral analysis and contextual understanding",
        benefits: [
          "Intelligent recommendation engine",
          "Real-time user profiling",
          "Adaptive learning mechanisms",
        ],
      },
      {
        icon: Brain,
        title: "AI Strategy Consulting",
        description:
          "Comprehensive digital transformation strategy leveraging AI to unlock operational efficiency and competitive advantages",
        benefits: [
          "Strategic AI integration",
          "Innovation frameworks",
          "Enterprise AI assessment",
        ],
      },
      {
        icon: Code,
        title: "Custom AI Solutions",
        description:
          "Bespoke intelligent systems engineered to solve complex business challenges with scalable, modular architectures",
        benefits: [
          "Tailored AI architecture",
          "Scalable solution design",
          "Innovation pipeline",
        ],
      },
      {
        icon: Database,
        title: "Enterprise Intelligence",
        description:
          "Proprietary AI models trained on organizational data, generating actionable insights for intelligent decision-making",
        benefits: [
          "Domain-specific modeling",
          "Predictive analytics",
          "Knowledge amplification",
        ],
      },
      {
        icon: Settings,
        title: "Intelligent Assistants",
        description:
          "Advanced multi-channel engagement platforms using natural language processing for sophisticated customer interactions",
        benefits: [
          "Omni-channel support",
          "Contextual communication",
          "Enhanced engagement",
        ],
      },
    ],
    []
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
          Our Services
        </motion.h2>
        <p className="text-lg text-center mb-16 text-silver">
          Transforming Business through Intelligent Technology
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
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
