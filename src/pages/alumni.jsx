import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, GraduationCap } from 'lucide-react';
import Nav from '../components/navbar';
import useSEO from '../hooks/useSEO';
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
import vijayImg from '../assets/team/Vijay venkat.jpg';
import dharrenImg from '../assets/team/dharren pius makoha.jpg';

// Alumni Data with extracted bios
const alumniData = [
  {
    name: "Sujal Saraswat",
    bio: "AI Intern @Techolution | Ex - AI Research Associate @WorkingFox | Internal Smart India Hackathon Winner | GDSC WinterHacks 2022 Winner | Computer science undergrad with expertise in AI/ML | IIIT Kottayam’26.",
    image: sujalImg,
    linkedin: "https://www.linkedin.com/in/sujal-saraswat-7575a5144/",
    university: "IIIT Kottayam",
    isDark: true
  },
  {
    name: "Dharren Pius Makoha",
    bio: "Founder & CTSO, ACL | Rogue-Proof AI & Autonomous Systems | Defense, Healthcare & Environmental Tech.",
    image: dharrenImg,
    linkedin: "https://www.linkedin.com/in/iamdevdharrenzug/",
    university: "ACL Labs",
    isDark: false
  },
  {
    name: "Vijay Venkat",
    bio: "Backend developer | Golang | DevOps, currently studying at IIIT Kottayam.",
    image: vijayImg,
    linkedin: "https://www.linkedin.com/in/vijayvenkatj/",
    university: "IIIT Kottayam",
    isDark: true
  },
  {
    name: "Radhika Nambiar",
    bio: "Intern @ IBM ISL | AI/ML Research Intern @TCS Research | Ex-MLE Intern @ Granville Tech | Student at Indian Institute of Information technology kottayam.",
    image: radhikaImg,
    linkedin: "https://www.linkedin.com/in/radhika-nambiar-a11336270/",
    university: "IIIT Kottayam",
    isDark: false
  },
  {
    name: "Suraj Rathor",
    bio: "Backend Developer @Sovansh Technology |Software Development Intern @Granville-Tech | GDSC WinterHacks 2022 | Internal Smart India Hackathon Winner | Computer Science undergrad @IIIT Kottayam’26.",
    image: surajImg,
    linkedin: "https://www.linkedin.com/in/suraj-rathor-1116472b0/",
    university: "IIIT Kottayam",
    isDark: true
  },
  {
    name: "Rishi Jain",
    bio: "AI Research Intern @SHL ||Ex-AI/ML Intern @Dassault Systèmes ||Ex-Data Science Intern @SymphonyAI ||Ex-AI/ML Intern @Rapid Innovation || Ex-ML Intern @GRANVILLE TECH || Indian Institute of Information Technology Kottayam",
    image: rishiImg,
    linkedin: "https://www.linkedin.com/in/rishi-jain-a3baa3323/",
    university: "IIIT Kottayam",
    isDark: false
  },
  {
    name: "Glen Enosh",
    bio: "MLE Intern @ TIFIN || Generative AI Researcher @ Mozilla || Ex-Mentor of AI/ML Club Enigma-IIITK || Ex-Generative AI Intern @ Granville Tech ||  Ex-Deep Learning Research Intern @ NCCR || IIIT Kottayam ’27.",
    image: glenImg,
    linkedin: "https://www.linkedin.com/in/jglenenosh/",
    university: "IIIT Kottayam",
    isDark: true
  },
  {
    name: "Mohd Mursaleen",
    bio: "AI/ML Engineer | Data Science Enthusiast l AIML intern @ granville-tech.",
    image: mohamedImg,
    linkedin: "https://www.linkedin.com/in/shinsei-mori-b2870b281/",
    university: "IIIT Kottayam",
    isDark: false
  },
  {
    name: "Praveen Kumar",
    bio: "IIITK’27 | AI Intern @ Backspace Tech | Generative AI Intern @ Granville Tech | AI Intern @ Infosys Springboard | Research Intern @ NIT Trichy | AI & ML Enthusiast | AI & DS  SubLead @ Betalabs IIIT Kottayam.",
    image: praveenImg,
    linkedin: "https://www.linkedin.com/in/spraveenkumar2205/",
    university: "IIIT Kottayam",
    isDark: true
  },
  {
    name: "Alok Prakash",
    bio: "Research Intern @IIT Hyd | Ex Developer Intern @IBL | Ex-Design Intern @Granville Tech | Ex-Lead @Tech-Club IIITK.",
    image: alokImg,
    linkedin: "https://www.linkedin.com/in/alokprakash1587/",
    university: "IIIT Kottayam",
    isDark: false
  },
  {
    name: "Kishore Shankar S",
    bio: "IIIT Kottayam ’27 | Ex - Research Intern @ NIT Trichy | Ex - Generative AI intern @ Granville Tech.",
    image: kishoreImg,
    linkedin: "https://www.linkedin.com/in/kishore-shankar-s-93a37228a/",
    university: "IIIT Kottayam",
    isDark: true
  },
  {
    name: "Aaditya Yadav",
    bio: "MNNIT '25 Bachelor of Technology - BTech, Mechanical Engineering Contributed to  ALETU, an AI-powered adaptive learning platform .",
    image: aadityaImg,
    linkedin: "https://www.linkedin.com/in/aaditya-yadav-91ab7a280/",
    university: "IIIT Kottayam",
    isDark: false
  }
];

export default function Alumni() {
  useSEO(
    "Alumni Network",
    "Connect with our community of innovators and professionals who have been part of the Granville-Tech journey."
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#faf9f6] min-h-screen font-sans">
      <Nav />

      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#2d4a3e] font-bold tracking-widest uppercase mb-4"
            >
              <GraduationCap size={20} />
              Alumni Network
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-[#1a3a2a] mb-6"
            >
              Granville-Tech Legacy <span className="text-[#4a7c59]">Innovators</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg max-w-2xl"
            >
              Meet the brilliant minds who have shaped Granville-Tech and continue to lead the AI revolution worldwide.
            </motion.p>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniData.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative p-8 rounded-[2rem] flex flex-col h-full transition-all duration-500 hover:scale-[1.02] ${person.isDark
                  ? 'bg-[#1a3a2a] text-[#aef359]'
                  : 'bg-white text-[#1a3a2a] border border-[#e5e7eb]'
                  }`}
              >
                {/* Header: Photo and LinkedIn */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-200">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff&size=400`;
                      }}
                    />
                  </div>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-opacity hover:opacity-70 ${person.isDark ? 'text-[#aef359]' : 'text-[#1a3a2a]'
                      }`}
                  >
                    <Linkedin size={24} fill="currentColor" />
                  </a>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">
                    {person.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 ${person.isDark ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                    {person.bio}
                  </p>
                </div>

                {/* Footer: University */}
                <div className="mt-auto">
                  <p className={`text-sm font-bold italic tracking-wide ${person.isDark ? 'text-[#aef359]' : 'text-[#1a3a2a]'
                    }`}>
                    {person.university}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
