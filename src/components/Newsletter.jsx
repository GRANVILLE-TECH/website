import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Rate Limit Check (from Loops.so logic)
    const timestamp = new Date().valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
      setStatus("error");
      // Optionally set a specific message for rate limiting
      return;
    }
    
    localStorage.setItem("loops-form-timestamp", timestamp);
    setStatus("loading");

    try {
      // Loops.so requires x-www-form-urlencoded format
      const formBody = new URLSearchParams({
        userGroup: "",
        mailingLists: "",
        email: email,
      });

      const response = await fetch("https://app.loops.so/api/newsletter-form/cmoinvtnw00bf0i47iedqnppu", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await response.json();
        console.error("Loops Error:", data.message || response.statusText);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
      localStorage.setItem("loops-form-timestamp", ""); // Reset on network failure
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
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDEADE]/10 rounded-full text-[#EDEADE] border border-[#EDEADE]/20">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thanks! We'll be in touch!</span>
                  </div>
                  <button 
                    onClick={() => setStatus("")}
                    className="text-sm text-gray-500 hover:text-[#EDEADE] transition-colors underline underline-offset-4"
                  >
                    &larr; Back
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    placeholder="you@example.com"
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
                      "Join Waitlist"
                    )}
                  </button>
                </form>

                {status === "error" && (
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <p className="text-red-400 text-sm">
                      {localStorage.getItem("loops-form-timestamp") && Number(localStorage.getItem("loops-form-timestamp")) + 60000 > new Date().valueOf()
                        ? "Too many signups, please try again in a little while."
                        : "Oops! Something went wrong, please try again."}
                    </p>
                    <button 
                      onClick={() => setStatus("")}
                      className="text-xs text-gray-500 hover:text-[#EDEADE] transition-colors"
                    >
                      &larr; Back
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 text-xs text-gray-500">
            No spam. Just innovation. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
