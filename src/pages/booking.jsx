import React, { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="booking"
      className="bg-gradient-to-b w-full from-black to-[#111111] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">Schedule a Consultation</h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/nayebaredominique7/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
};

export default Booking;
