import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, Calendar } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const socialPosts = [
  {
    id: 1,
    platform: "linkedin",
    date: "April 2024",
    content: "AI readiness belongs in our communities, not just our companies. What stands out is the emphasis on public participation and community literacy.",
    link: "https://www.linkedin.com/posts/activity-7449728450271301632-h09J",
    tags: ["#AIPathways", "#CommunityTech"]
  },
  {
    id: 2,
    platform: "x",
    date: "Recent",
    content: "Reimagining the future with every innovation. Our mission is to empower Africa through groundbreaking technological advancements and excellence.",
    link: "https://x.com/Niquestetia",
    tags: ["#TechAfrica", "#Innovation"]
  },
  {
    id: 3,
    platform: "linkedin",
    date: "April 2024",
    content: "Learning doesn't have to stop when the internet does. At ALETU, we are transforming static syllabi into dynamic learning journeys accessible offline.",
    link: "https://www.linkedin.com/posts/granvilletek_edtech-africa2030-adaptivelearning-activity-7449059613813166081-hCqn",
    tags: ["#EdTech", "#Africa2030"]
  },
  {
    id: 4,
    platform: "x",
    date: "Recent",
    content: "Innovation redefines what is possible. We envision a future where technology solutions inspire generations to think beyond limits.",
    link: "https://x.com/Niquestetia",
    tags: ["#FutureThinking", "#GranvilleTech"]
  }
];

const SocialCard = ({ post, index }) => {
  const isLinkedIn = post.platform === "linkedin";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1e1e1e]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className={`${isLinkedIn ? "bg-[#0077b5]/10" : "bg-white/5"} p-2 rounded-lg`}>
            {isLinkedIn ? (
              <Linkedin className="text-[#0077b5] w-5 h-5" />
            ) : (
              <XIcon className="text-white w-5 h-5" />
            )}
          </div>
          <div className="flex items-center text-silver text-xs space-x-1 opacity-60">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
        </div>
        <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-4 font-medium">
          {post.content}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-medium text-silver/60 bg-white/5 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs font-semibold text-white group-hover:text-silver transition-colors"
      >
        View on {isLinkedIn ? "LinkedIn" : "X"}
        <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
};

export default function SocialHub() {
  return (
    <section className="bg-gradient-to-b from-black to-[#111111] w-full py-32 px-6 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077b5]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-silver mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#0077b5] animate-pulse" />
            <span>LIVE FEED</span>
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            Social Hub
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-silver max-w-2xl mx-auto opacity-80"
          >
            Catch our latest updates, industry insights, and innovation stories across LinkedIn and X.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <SocialCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/company/granvilletek/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all"
          >
            LinkedIn Page
            <Linkedin className="ml-2 w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://x.com/Niquestetia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all"
          >
            X Profile
            <XIcon className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
