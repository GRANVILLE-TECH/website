import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, ZapIcon, ArrowRightIcon, UsersIcon, TrophyIcon, FlameIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AletuShowcase = () => {
  const { t } = useTranslation();

  return (
    <section id="aletu-demo" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6"
              >
                <ZapIcon className="h-3 w-3" />
                {t("aletuShowcase.badge", "LATEST INNOVATION")}
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t("aletuShowcase.titlePart1", "Empowering the Future of")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">
                  {t("aletuShowcase.titlePart2", "Digital Education")}
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                {t("aletuShowcase.description", "ALETU is our flagship E-learning platform designed specifically for the Ugandan curriculum. Experience a gamified, social, and mastery-based learning environment that students actually love.")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: TrophyIcon, title: t("aletuShowcase.features.gamified.title", "Gamified Learning"), desc: t("aletuShowcase.features.gamified.desc", "XP, streaks, and leaderboards to keep students engaged.") },
                { icon: UsersIcon, title: t("aletuShowcase.features.social.title", "Social Interaction"), desc: t("aletuShowcase.features.social.desc", "Collaborative Q&A forums and peer-to-peer support.") },
                { icon: FlameIcon, title: t("aletuShowcase.features.mastery.title", "Mastery Focus"), desc: t("aletuShowcase.features.mastery.desc", "AI-driven modules that ensure deep concept understanding.") },
                { icon: BookOpenIcon, title: t("aletuShowcase.features.curriculum.title", "Curriculum Aligned"), desc: t("aletuShowcase.features.curriculum.desc", "Specifically tailored for S1-S6 Uganda National Curriculum.") }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                to="/aletu"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
              >
                {t("aletuShowcase.tryDemo", "Try the Live Demo")}
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-4 text-xs text-gray-500 italic">
                {t("aletuShowcase.footnote", "* Experience the Student Portal in its full functional glory.")}
              </p>
            </div>
          </motion.div>

          {/* Visual Right (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-2 shadow-2xl">
              <div className="bg-[#0a0a0a] rounded-[1.8rem] overflow-hidden border border-white/5 aspect-[4/3] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="ALETU Platform Preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 animate-bounce">
                    <BookOpenIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t("aletuShowcase.cardTitle", "ALETU Student Portal")}</h3>
                  <p className="text-indigo-200/70 text-sm max-w-xs mx-auto">
                    {t("aletuShowcase.cardDesc", "A first-of-its-kind educational experience for Ugandan youth.")}
                  </p>
                </div>

                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <FlameIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{t("aletuShowcase.streakLabel", "Streak")}</p>
                      <p className="text-sm font-bold text-white">{t("aletuShowcase.streakValue", "12 Days")}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <TrophyIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{t("aletuShowcase.masteryLabel", "Mastery")}</p>
                      <p className="text-sm font-bold text-white">{t("aletuShowcase.masteryValue", "92% Calculus")}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AletuShowcase;
