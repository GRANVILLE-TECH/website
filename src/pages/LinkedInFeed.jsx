import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    date: "April 2024",
    content: "AI readiness belongs in our communities, not just our companies. What stands out is the emphasis on public participation and community literacy.",
    link: "https://www.linkedin.com/posts/activity-7449728450271301632-h09J",
    tags: ["#AIPathways", "#CommunityTech", "#AILiteracy"]
  },
  {
    id: 2,
    date: "April 2024",
    content: "Learning doesn't have to stop when the internet does. At ALETU, we are transforming static syllabi into dynamic learning journeys that remain accessible offline.",
    link: "https://www.linkedin.com/posts/granvilletek_edtech-africa2030-adaptivelearning-activity-7449059613813166081-hCqn",
    tags: ["#EdTech", "#Africa2030", "#InclusiveEducation"]
  },
  {
    id: 3,
    date: "March 2024",
    content: "ALETU is engineered with a transparent, built-in M&E framework, ensuring every interaction leads to measurable human capital development.",
    link: "https://www.linkedin.com/posts/granvilletek_africanstartups-edutech-entrepreneurship-activity-7447914134408450048-nU5A",
    tags: ["#AfricanStartups", "#DigitalInnovation", "#FutureOfWork"]
  }
];

const PostCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#1e1e1e]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group"
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <div className="bg-[#0077b5]/10 p-2 rounded-lg">
          <Linkedin className="text-[#0077b5] w-5 h-5" />
        </div>
        <div className="flex items-center text-silver text-xs space-x-1 opacity-60">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>
      </div>
      <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-4">
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
      Read full post
      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  </motion.div>
);

export default function LinkedInFeed() {
  return (
    <section className="bg-gradient-to-b from-black to-[#111111] w-full py-32 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0077b5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-silver mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#0077b5] animate-pulse" />
            <span>OUR PROFESSIONAL PULSE</span>
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            Join the Conversation
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-silver max-w-2xl mx-auto opacity-80"
          >
            Stay updated with our latest AI breakthroughs, mission updates, and industry insights directly from our LinkedIn feed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/company/granvilletek/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-silver transition-all hover:scale-105"
          >
            Follow us on LinkedIn
            <Linkedin className="ml-2 w-5 h-5 fill-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
