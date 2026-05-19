import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function InnovationSupportCTA({ innovationName }) {
  const { t } = useTranslation();

  return (
    <div className="w-full flex-shrink-0 p-4 space-y-8">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6"
        >
          <Heart className="text-red-500 w-10 h-10 fill-red-500" />
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-4">
          {t("supportCTA.title", "Support the Development")}
        </h3>
        <p className="text-silver max-w-2xl mx-auto text-lg">
          {t("supportCTA.description", {
            defaultValue: "Your contribution directly fuels the evolution of {{name}}. Help us drive meaningful change through innovative AI solutions.",
            name: innovationName
          })}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="p-1 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20">
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/granvilletech/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{
              border: "none",
              width: "100%",
              padding: "4px",
              background: "transparent",
              height: "650px",
            }}
            title="granvilletech"
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-12 pb-8">
        <p className="text-gray-500 text-sm italic">
          {t("supportCTA.securePayment", "Secure payments powered by Ko-fi")}
        </p>
      </div>
    </div>
  );
}
