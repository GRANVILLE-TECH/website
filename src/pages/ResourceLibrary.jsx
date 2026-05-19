import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Library } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import ALETU Presentations
import blueprintPdf from "../assets/ALETU slides/ALETU_Africa_s_Adaptive_Education_Blueprint.pdf";
import curriculumPdf from "../assets/ALETU slides/ALETU_Neural_Curriculum.pdf";
import masteryPdf from "../assets/ALETU slides/ALETU_Scaling_Mastery_in_Africa.pdf";

const resources = [
  {
    key: "blueprint",
    title: "Adaptive Education Blueprint",
    category: "ALETU / Strategic",
    description: "A comprehensive guide to transforming Uganda's educational landscape through adaptive AI.",
    file: blueprintPdf
  },
  {
    key: "curriculum",
    title: "Neural Curriculum",
    category: "ALETU / Technical",
    description: "Deep dive into the AI-driven curriculum design and mastery-based learning paths.",
    file: curriculumPdf
  },
  {
    key: "mastery",
    title: "Scaling Mastery in Africa",
    category: "ALETU / Strategic",
    description: "Strategic framework for scaling high-impact educational solutions across the continent.",
    file: masteryPdf
  }
];

export default function ResourceLibrary() {
  const { t } = useTranslation();

  return (
    <section id="resources" className="bg-[#0a0a0a] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-yellow-500 font-bold tracking-widest text-sm mb-4 uppercase"
            >
              <Library size={18} />
              {t("resources.knowledgeHub", "Knowledge Hub")}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              {t("resources.title", "Resource Library")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-silver text-lg"
            >
              {t("resources.subtitle", "Access our technical blueprints, strategic frameworks, and educational curricula. These documents outline our commitment to driving innovation across Africa.")}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-yellow-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-yellow-500/10 rounded-2xl group-hover:bg-yellow-500/20 transition-colors">
                  <FileText className="text-yellow-500 w-8 h-8" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-white/5 rounded-full text-gray-400">
                  {t("resources.items." + resource.key + ".category", resource.category)}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                {t("resources.items." + resource.key + ".title", resource.title)}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {t("resources.items." + resource.key + ".description", resource.description)}
              </p>

              <div className="flex gap-4">
                <a
                  href={resource.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 border border-white/5 transition-all"
                >
                  <ExternalLink size={16} /> {t("resources.viewBtn", "View")}
                </a>
                <a
                  href={resource.file}
                  download
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/30 transition-all"
                >
                  <Download size={16} /> {t("resources.downloadBtn", "Download")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 bg-gradient-to-r from-yellow-400/10 to-amber-500/5 border border-yellow-500/20 rounded-[40px] text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            {t("resources.partnerships.title", "Strategic Partnerships")}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            {t("resources.partnerships.desc", "Interested in the technical implementation or looking to partner on these initiatives? Let's collaborate to build the future of adaptive learning together.")}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-400 transition-all"
          >
            {t("resources.partnerships.cta", "Get in Touch")} <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
