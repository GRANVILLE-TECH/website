import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Reusing EmailJS - you can set a specific TEMPLATE_ID for newsletters in your .env later
      const templateParams = {
        email: email,
        type: "Newsletter Signup",
        date: new Date().toLocaleDateString(),
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams
      );

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Newsletter Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EDEADE]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EDEADE]/3 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl text-center"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-[#EDEADE] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Stay Ahead of the Curve
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Subscribe to our newsletter for the latest insights in AI solutions and innovation.
          </motion.p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="py-4"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDEADE]/10 rounded-full text-[#EDEADE] border border-[#EDEADE]/20">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Welcome to the community!</span>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubscribe}
                className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-4 bg-black/40 border border-[#EDEADE]/10 rounded-xl text-[#EDEADE] placeholder-gray-500 focus:ring-2 focus:ring-[#EDEADE]/30 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 bg-[#EDEADE] text-black font-bold rounded-xl hover:bg-[#DED9C8] transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center min-w-[140px]"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {status === "error" && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-red-400 text-sm mt-4"
            >
              Something went wrong. Please try again or contact us directly.
            </motion.p>
          )}

          <p className="mt-6 text-xs text-gray-500">
            No spam. Just innovation. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
