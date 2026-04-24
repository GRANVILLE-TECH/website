import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, GraduationCap } from 'lucide-react';
import Nav from '../components/navbar';
import logo from "../assets/Logo.svg";
import { AiFillLinkedin, AiFillYoutube, AiFillMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

// Import Alumni Images
import sujalImg from '../assets/team/sujal_img.png';
import surajImg from '../assets/team/suraj_img.jpg';
import radhikaImg from '../assets/team/radhika_img.jpg';
import rishiImg from '../assets/team/rishi_img.jpg';
import glenImg from '../assets/team/glen_img.jpg';
import mohamedImg from '../assets/team/mohamed_img.jpg';
import praveenImg from '../assets/team/praveen kumar.jpg';
import alokImg from '../assets/team/alok prakash.jpg';
import kishoreImg from '../assets/team/Kishore shankar a.jpg';
import aadityaImg from '../assets/team/Aaditya yadav.jpg';

// Alumni Data from Book1.csv
const alumniData = [
  {
    name: "Sujal Saraswat",
    role: "Former AI Developer",
    image: sujalImg,
    linkedin: "https://www.linkedin.com/in/sujal-saraswat-7575a5144/",
    year: "Legacy Member"
  },
  {
    name: "Suraj Rathor",
    role: "Former Full Stack Developer",
    image: surajImg,
    linkedin: "https://www.linkedin.com/in/suraj-rathor-1116472b0/",
    year: "Legacy Member"
  },
  {
    name: "Radhika Nambiar",
    role: "Former UI/UX Designer",
    image: radhikaImg,
    linkedin: "https://www.linkedin.com/in/radhika-nambiar-a11336270/",
    year: "Legacy Member"
  },
  {
    name: "Rishi Jain",
    role: "Former Backend Engineer",
    image: rishiImg,
    linkedin: "https://www.linkedin.com/in/rishi-jain-a3baa3323/",
    year: "Legacy Member"
  },
  {
    name: "Glen Enosh",
    role: "Former Research Analyst",
    image: glenImg,
    linkedin: "https://www.linkedin.com/in/jglenenosh/",
    year: "Legacy Member"
  },
  {
    name: "Mohd Mursaleen",
    role: "Former Data Engineer",
    image: mohamedImg,
    linkedin: "https://www.linkedin.com/in/shinsei-mori-b2870b281/",
    year: "Legacy Member"
  },
  {
    name: "Praveen Kumar",
    role: "Former Technical Consultant",
    image: praveenImg,
    linkedin: "https://www.linkedin.com/in/spraveenkumar2205/",
    year: "Legacy Member"
  },
  {
    name: "Alok Prakash",
    role: "Former Software Engineer",
    image: alokImg,
    linkedin: "https://www.linkedin.com/in/alokprakash1587/",
    year: "Legacy Member"
  },
  {
    name: "Kishore Shankar S",
    role: "Former Solutions Architect",
    image: kishoreImg,
    linkedin: "https://www.linkedin.com/in/kishore-shankar-s-93a37228a/",
    year: "Legacy Member"
  },
  {
    name: "Aaditya Yadav",
    role: "Former AI Intern",
    image: aadityaImg,
    linkedin: "https://www.linkedin.com/in/aaditya-yadav-91ab7a280/",
    year: "Legacy Member"
  },
  {
    name: "Nikhil Wakode",
    role: "Former Systems Analyst",
    image: "https://ui-avatars.com/api/?name=Nikhil+Wakode&background=random&color=fff&size=400",
    linkedin: "https://www.linkedin.com/in/wakode-nikhil/",
    year: "Legacy Member"
  }
];

export default function Alumni() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Alumni - Granville-Tech';
  }, []);

  return (
    <div className="overflow-x-hidden bg-black min-h-screen">
      <Nav />
      
      <main className="pt-20">
        <section id="alumni" className="bg-[#050505] text-white py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6"
              >
                <GraduationCap size={18} />
                Our Legacy
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
              >
                Granville-Tech <span className="text-yellow-500">Alumni</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-silver text-lg max-w-3xl mx-auto"
              >
                Celebrating the innovators and pioneers who have helped shape the future of AI at Granville-Tech. 
              </motion.p>
            </div>

            {/* Alumni Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {alumniData.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 transition-all duration-500 group-hover:border-yellow-500/30">
                    <div className="aspect-square overflow-hidden bg-[#1a1a1a]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff&size=400`;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                      <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2 block">
                        {person.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-6 group-hover:text-yellow-400 transition-colors">
                        {person.name}
                      </h3>
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-[#0077b5]/20"
                          title="LinkedIn Profile"
                        >
                          <Linkedin size={22} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-24 text-center p-12 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-4">Are you a Granville-Tech Alum?</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                We'd love to stay connected and feature your journey.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all hover:scale-105"
              >
                Connect with Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111111] text-silver py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-left">
          <div className="mb-8">
            <h3 className="text-3xl font-bold flex text-white gap-4 items-center mb-4">
              <img src={logo} className="h-14 w-auto" alt="logo" />
              Granville-Tech
            </h3>
            <p className="text-lg font-light text-white opacity-85">
              Driving Innovation with AI Solutions
            </p>
          </div>
          <div className="mb-12">
            <p className="text-white opacity-85 mb-4">Connect with us:</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/granvilletek/" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-all"><AiFillLinkedin size={28} /></a>
              <a href="https://x.com/Niquestetia" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-all"><FaXTwitter size={24} /></a>
              <a href="http://www.youtube.com/@granvilletech" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-white transition-all"><AiFillYoutube size={28} /></a>
              <a href="mailto:info@granvilletech.co?subject=Inquiry from Granville-Tech Website" className="text-silver hover:text-white transition-all"><AiFillMail size={28} /></a>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-6">
            <p>&copy; {new Date().getFullYear()} Granville-Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
