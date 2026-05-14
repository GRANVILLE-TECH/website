import React, { useState, useEffect, useRef } from "react";
import Nav from "./components/navbar";
import Hero from "./pages/hero";
import About from "./pages/about";
import Innovations from "./pages/innovations";
import VideoShowcase from "./pages/VideoShowcase";
import Services from "./pages/services";
import Partners from "./pages/partners";
import SocialHub from "./pages/SocialHub";
import Booking from "./pages/booking";
import ResourceLibrary from "./pages/ResourceLibrary";
import ContactUs from "./pages/contact";
import Newsletter from "./components/Newsletter";
import { Link } from "react-router-dom";
import AletuShowcase from "./components/AletuShowcase";
import { AiFillLinkedin, AiFillYoutube, AiFillMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRightIcon } from "lucide-react";
import Loader from "./components/Loader";
import logo from "../src/assets/Logo.svg";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "./components/CookieConsent";
import useSEO from "./hooks/useSEO";

// Helper component for lazy rendering sections only when they are near the viewport
const DeferredSection = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters the viewport
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="h-96" />}
    </div>
  );
};

export default function App() {
  useSEO(
    "Driving Innovation with AI Solutions",
    "Granville-Tech provides cutting-edge AI solutions for businesses, driving innovation and enhancing productivity across Africa and beyond."
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader immediately once initial JS is ready
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <header>
        <Nav />
      </header>

      {/* Main Content Area */}
      <main>
        {/* Critical path: Hero is rendered immediately */}
        <section id="home">
          <Hero />
        </section>

        {/* Deferred sections to improve performance */}
        <DeferredSection id="about">
          <About />
        </DeferredSection>

        <DeferredSection id="video-showcase">
          <VideoShowcase />
        </DeferredSection>

        <DeferredSection id="innovations">
          <Innovations />
        </DeferredSection>

        <DeferredSection id="aletu">
          <AletuShowcase />
        </DeferredSection>

        <DeferredSection id="services">
          <Services />
        </DeferredSection>

        <DeferredSection id="resources">
          <ResourceLibrary />
        </DeferredSection>

        <DeferredSection id="partners">
          <Partners />
        </DeferredSection>

        <DeferredSection id="social-hub">
          <SocialHub />
        </DeferredSection>

        <DeferredSection id="articles">
          <section className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-sky-500/5" />
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Insight Collective</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Deep dives into AI ethics, neural architectures, and the future of educational technology in emerging markets.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-300"
              >
                Explore Articles <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
        </DeferredSection>

        <DeferredSection id="booking">
          <Booking />
        </DeferredSection>

        <DeferredSection id="contact">
          <ContactUs />
        </DeferredSection>

        <DeferredSection id="newsletter">
          <Newsletter />
        </DeferredSection>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#111111] text-silver py-4 px-6 sm:py-8 sm:px-10 lg:py-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-left">
          {/* Branding Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold flex text-white gap-4 items-center mb-4">
              <img src={logo} className="h-14 w-auto" alt="logo" />
              Granville-Tech
            </h3>
            <p className="text-lg sm:text-xl font-light text-white opacity-85">
              Driving Innovation with AI Solutions
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mb-6 sm:mb-8">
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#innovations"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Our Innovations
                </a>
              </li>
              <li>
                <a
                  href="#aletu"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  ALETU LMS
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#alumni"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Alumni
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mb-6 sm:mb-12">
            <p className="text-sm sm:text-base text-white opacity-85 mb-4">
              Connect with us:
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-10">
              <a
                href="https://www.linkedin.com/company/granvilletek/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-silver hover:text-white transition-all duration-300"
              >
                <AiFillLinkedin size={28} />
                <span className="text-lg">LinkedIn</span>
              </a>
              <a
                href="https://x.com/Niquestetia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-silver hover:text-white transition-all duration-300"
              >
                <FaXTwitter size={24} />
                <span className="text-lg">X</span>
              </a>
              <a
                href="http://www.youtube.com/@granvilletech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-silver hover:text-white transition-all duration-300"
              >
                <AiFillYoutube size={28} />
                <span className="text-lg">YouTube</span>
              </a>
              <a
                href="mailto:info@granvilletech.co?subject=Inquiry from Granville-Tech Website"
                className="inline-flex items-center space-x-2 text-silver hover:text-white transition-all duration-300"
              >
                <AiFillMail size={28} />
                <span className="text-lg font-medium">info@granvilletech.co</span>
              </a>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="mt-8 sm:mt-10 border-t border-gray-300 pt-6">
            <p className="text-sm sm:text-base text-silver opacity-80">
              &copy; {new Date().getFullYear()} Granville-Tech. All rights
              reserved.
            </p>
            <p className="text-sm sm:text-base text-silver opacity-80 mt-2">
              Designed and developed with precision to drive AI solutions
              forward.
            </p>
          </div>
        </div>
      </footer>
      <Analytics />
      <CookieConsent />
    </div>
  );
}
