import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Contact_hero from "../assets/rb_74.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    _honeypot: "", // Spam protection
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: value,
      };
      // Validate with the new data
      validateForm(newData);
      return newData;
    });
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Form validation function
  const validateForm = (data = formData) => {
    const newErrors = {};

    if (!data.firstName) newErrors.firstName = "First name is required.";
    if (!data.lastName) newErrors.lastName = "Last name is required.";
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email address is invalid. Please enter a valid email.";
    }
    if (data.phone && !/^\d{10,15}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be between 10-15 digits.";
    }
    if (!data.service) newErrors.service = "Please select a service.";
    if (!data.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam check
    if (formData._honeypot) {
      console.warn("Spam detected.");
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // We use .send() instead of .sendForm() for better reliability and control
        const templateParams = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service,
          message: formData.message,
        };

        await emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams
        );

        setSuccessMessage("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          _honeypot: "",
        });
        setErrors({});
      } catch (error) {
        console.error("EmailJS Error:", error);
        setSuccessMessage("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Handle dropdown selection
const handleServiceSelect = (service) => {
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        service,
      };
      validateForm(newData);
      return newData;
    });
    setIsOpen(false);
  };

  const scheduleConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/nayebaredominique7/30min",
      });
      return;
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-100% bg-black text-white pt-20  overflow-hidden pb-20">
      <motion.div
        className=" mx-auto mb-4  transform -translate-x-1/2 z-10 flex flex-col items-center justify-center text-center px-8 sm:px-8 md:px-12 lg:px-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.3,
        }}
        style={{ textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Get in Touch with Granville-Tech
        </motion.h1>
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-white max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          We’re here to answer any questions you have about our AI solutions
        </motion.p>
      </motion.div>
      {/* Hero Section */}
      <div className="relative flex justify-center">
        <img
          src={Contact_hero}
          alt="Contact Us 3d Image"
          className="w-auto h-[350px] sm:h-[500px] md:h-[600px] text-center opacity-90 "
        />
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto py-8 px-8">
        <motion.h2
          className="text-4xl font-semibold text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="mt-2 text-center text-silver"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fill out the form below, and we'll get back to you within 24 hours.
        </motion.p>

        <div className="flex flex-col items-center mt-6 space-y-4">
          <motion.button
            onClick={scheduleConsultation}
            className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-white transition-all duration-300"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
          >
            Schedule a Consultation
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-silver"
          >
            <span className="text-gray-500">Or email us directly at:</span>
            <a 
              href="mailto:info@granvilletech.co?subject=Inquiry from Granville-Tech Website" 
              className="text-white hover:text-yellow-500 font-semibold transition-colors underline decoration-yellow-500/30 underline-offset-4"
            >
              info@granvilletech.co
            </a>
          </motion.div>
        </div>

        <motion.form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          ref={formRef}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Honeypot Field (Hidden from users) */}
          <input
            type="text"
            name="_honeypot"
            style={{ display: "none" }}
            value={formData._honeypot}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["firstName", "lastName"].map((field, idx) => (
              <div key={idx}>
                <motion.input
                  type="text"
                  name={field}
                  placeholder={
                    field === "firstName" ? "First Name" : "Last Name"
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-silver transition-all duration-300"
                  whileInView={{ opacity: [0, 1], y: [30, 0] }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Email and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-black border rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-silver transition-all duration-300"
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <motion.input
                type="text"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 bg-black border rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-silver transition-all duration-300"
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <motion.div
              className="relative w-full"
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 1,
              }}
            >
              <button
                onClick={toggleDropdown}
                className="w-full p-4 pl-2 bg-black border text-left rounded-lg text-gray-300 focus:ring-2 focus:ring-silver"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
              >
                {formData.service || "Select a Service"}
              </button>
              {isOpen && (
                <motion.ul
                  ref={dropdownRef}
                  className="absolute w-full mt-2 bg-black p-1 border transition-all duration-300 rounded-lg text-gray-300"
                  whileInView={{ opacity: [0, 1], y: [30, 0] }}
                  transition={{ duration: 0.4 }}
                  role="listbox"
                  aria-label="Service Options"
                >
                  {[
                    "Recommendation Systems",
                    "AI Strategy Consulting",
                    "Custom AI Solutions",
                    "Intelligent Assistants",
                    "Enterprise Intelligence",
                  ].map((service, index) => (
                    <li
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                      className="px-4 py-2 hover:bg-gray-300 hover:text-black cursor-pointer transition-all duration-200 rounded-lg"
                      role="option"
                      aria-selected={formData.service === service}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleServiceSelect(service);
                        }
                      }}
                    >
                      {service}
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
            <input type="hidden" name="service" value={formData.service} />
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <motion.textarea
              name="message"
              placeholder="Enter Your Query "
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-black border rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-silver transition-all duration-300"
              rows="4"
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 1.2,
              }}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            {isSubmitting ? (
              <button
                type="button"
                className="w-full p-4 bg-gray-500 text-white rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                disabled
              >
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </button>
            ) : (
              <motion.button
                type="submit"
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 1.4,
                }}
                className="w-full p-4 bg-gray-300 text-black rounded-lg hover:bg-white transition-all duration-300"
              >
                Submit
              </motion.button>
            )}
          </div>
        </motion.form>

        {/* Success/Error Message */}
        <AnimatePresence mode="wait">
          {successMessage === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="mt-8 p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
                <button 
                  onClick={() => setSuccessMessage("")}
                  className="mt-2 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          )}

          {successMessage === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="mt-8 p-6 bg-red-500/10 border border-red-500/20 backdrop-blur-xl rounded-2xl text-center"
            >
              <h3 className="text-xl font-bold text-red-500 mb-2">Oops! Something went wrong</h3>
              <p className="text-gray-400">We couldn't send your message. Please try again later or email us directly.</p>
              <button 
                onClick={() => setSuccessMessage("")}
                className="mt-4 px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactPage;
