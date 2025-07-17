import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import dominicsir_img from "../assets/team/dominicsir_img.jpeg";
import mohamed_img from "../assets/team/mohamed_img.jpg";
import glen_img from "../assets/team/glen_img.jpg";
import { g, u } from "framer-motion/client";
import utk from "../assets/team/utkarshpal_img.jpeg";
import ashish from "../assets/team/ashish_img.jpeg";
import Ramkishore from "../assets/team/Ramkishor_img.jpg";

const teamMembers = [
  {
    name: "Dominique Nayebare",
    role: "CEO & CTO",
    bio: " Oversee the overall strategy, vision, leadership, and technical direction of the company",
    image: dominicsir_img,
    linkedin: "https://www.linkedin.com/in/dominique-n-792b922a5/",
  },
  {
    name: "Utkarsh Pal",
    role: "AI Engineer",
    bio: "Builds, optimizes, and deploys intelligent systems, unlocking data-driven solutions and innovation.",
    image: utk,
    linkedin: "https://www.linkedin.com/in/utkarsh26pal/",
  },
  {
    name: "J Glen Enosh",
    role: "Generative AI Engineer",
    bio: "Designs and builds advanced AI model Architectures to generate new content, optimize workflows, and solve complex creative tasks.",
    image: glen_img,
    linkedin: "https://www.linkedin.com/in/glen-enosh-924414215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJE%2F6emvASaarGOMLVYxZLg%3D%3D",
  },
  {
    name: "MOHD MURSALEEN",
    role: "NLP ENGINEER /LARGE LANGUAGE MODEL SPECIALIST",
    bio: "Engineers design, fine-tune, and maintain large language models for cutting-edge text understanding & gen tasks.",
    image: mohamed_img,
    linkedin: "https://www.linkedin.com/in/mohd-mursaleen-b2870b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Ramkishore M",
    role: "Software Engineer",
    bio: " Engineers designs, builds, tests, and maintains software solutions, ensuring functionality & scalability.",
    image: ashish,
    linkedin: "https://www.linkedin.com/in/ramkishore-m/",
  },
];

export default function Team() {
  return (
    <section
      className="bg-gradient-to-b w-[100%] from-black to-[#111111] text-silver py-32 px-6 relative overflow-hidden"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-center font-extrabold mb-12 text-white"
      >
        Our Executive Team
      </motion.h2>

      {/* Dominique (CEO & CTO) */}
      <div className="flex justify-center mb-16">
        <motion.div
          className="w-full sm:w-[450px] lg:w-[500px] bg-[#1a1a1a] text-center p-8 rounded-xl  hover:scale-105 shadow-sm hover:shadow-md hover:shadow-white/25  shadow-white/25 transition-all duration-500 ease-in-out"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            className="w-44 h-44 mx-auto rounded-full mb-6 object-contain border-4 border-silver"
          />
          <h3 className="text-3xl font-semibold text-white mb-4">
            {teamMembers[0].name}
          </h3>
          <p className="text-lg text-silver mb-4">{teamMembers[0].role}</p>
          <p className="text-sm text-silver">{teamMembers[0].bio}</p>

          <a
            href={teamMembers[0].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-silver hover:text-white transition duration-300"
          >
            <FaLinkedin size={20} className="mr-2" />
            <span>View LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Sujal (COO) */}
      <div className="flex justify-center mb-16">
        <motion.div
          className="w-full sm:w-[400px] lg:w-[450px] bg-[#1a1a1a] text-center p-8 rounded-xl  hover:scale-105 shadow-sm hover:shadow-md hover:shadow-white/25  shadow-white/25 transition-all duration-500 ease-in-out"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={teamMembers[1].image}
            alt={teamMembers[1].name}
            className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-silver"
          />
          <h3 className="text-2xl font-semibold text-white mb-4">
            {teamMembers[1].name}
          </h3>
          <p className="text-lg text-silver mb-4">{teamMembers[1].role}</p>
          <p className="text-sm text-silver">{teamMembers[1].bio}</p>

          <a
            href={teamMembers[1].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-silver hover:text-white transition duration-300"
          >
            <FaLinkedin size={20} className="mr-2" />
            <span>View LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Other team members in grid format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.slice(2).map((member, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] text-center p-8 rounded-xl  hover:scale-105  shadow-sm hover:shadow-md hover:shadow-white/25  shadow-white/25 transition-all duration-500 ease-in-out"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-6 border-4 object-cover border-silver"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              {member.name}
            </h3>
            <p className="text-lg text-silver mb-4">{member.role}</p>
            <p className="text-sm text-silver">{member.bio}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 justify-center text-silver hover:text-white transition duration-300"
              >
                <FaLinkedin size={20} className="mr-2" />
                <span>View LinkedIn</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
