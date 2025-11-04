import React, { useState, useEffect } from "react";
import Nav from "./components/navbar";
import Hero from "./pages/hero";
import About from "./pages/about";
import Innovations from "./pages/innovations";
import Services from "./pages/services";
import Partners from "./pages/partners";
import Booking from "./pages/booking";
import ContactUs from "./pages/contact";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import Loader from "./components/Loader";
import logo from "../src/assets/Logo.svg";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
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

      {/* Main Content: All Sections in One Page */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="innovations">
          <Innovations />
          <Link
            to="/innovations"
            className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded shadow"
          >
            Explore Innovations
          </Link>
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="articles" className="p-8">
          <h2 className="text-2xl font-bold mb-2">From Our Blog</h2>
          <p className="text-gray-600 mb-4">Latest insights, articles, and thought leadership.</p>
          <Link
            to="/articles"
            className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded shadow"
          >
            Read Articles
          </Link>
        </section>
        <section id="booking">
          <Booking />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
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
                  href="#contact"
                  className="text-silver hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* LinkedIn Social Link */}
          <div className="mb-6 sm:mb-12">
            <p className="text-sm sm:text-base text-white opacity-85 mb-4">
              Connect with us:
            </p>
            <a
              href="https://www.linkedin.com/company/granvilletek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start space-x-2 text-silver hover:text-white transition-all duration-300"
            >
              <AiFillLinkedin
                size={28}
                className="text-silver hover:text-white"
              />
              <span className="text-lg sm:text-xl">LinkedIn</span>
            </a>
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
    </div>
  );
}
