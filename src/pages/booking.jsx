import React from "react";
import { useTranslation } from "react-i18next";
import CalendlyWidget from "../components/CalendlyWidget";

const Booking = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-gradient-to-b w-full from-black to-[#111111] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
          {t("booking.title", "Schedule a Consultation")}
        </h2>
        <CalendlyWidget
          url="https://calendly.com/nayebaredominique7/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
};

export default Booking;
