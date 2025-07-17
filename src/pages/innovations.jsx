import { useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

// Import your image assets
import aletu from "../assets/innovations/DALL·E 2024-12-04 19.34.44 - A hopeful vision of Uganda's educational transformation featuring divers (1).webp";
import mirrorMentor from "../assets/innovations/mirrior mentor.webp";
import echo from "../assets/innovations/echo sign.jpg";
import echoWearable from "../assets/innovations/ech sign wearable.webp";
import timeshift from "../assets/innovations/time shift.jpg";

const innovationInfo = [
  {
    title: "Adaptive learning for educational transform of Uganda",
    tagline: "Revolutionizing education, one student at a time",
    description:
      "A cloud-based, AI-driven educational platform designed for secondary schools in Uganda. It delivers personalized, mastery-based instruction aligned with local curriculums",
    ValueProposition: {
      Problem:
        "For secondary schools in Uganda facing challenges with high dropout rates, limited teacher capacity, and low student engagement",
      Solution:
        "ALETU is a personalized, adaptive educational platform that leverages AI-driven learning paths, mastery learning principles, and cognitive assessments to transform educational outcomes",
      KeyBenefits: {
        Students: "Receive engaging, tailored education that improves outcomes",
        Teachers:
          "Save time on administrative tasks and focus on meaningful mentorship",
        Schools:
          "Reduce dropout rates and improve overall academic performance",
        Policymakers:
          "Gain actionable insights to inform national educational strategies",
      },
      Differentiators: [
        "Personalized, culturally aligned educational content",
        "Seamless integration of cross-cutting issues like environmental awareness and ethics",
        "AI-generated lesson plans and assessments aligned with the national curriculum",
      ],
    },
    KeyComponents: {
      ProblemFocused: {
        HighDropoutRates: "High dropout rates in Ugandan secondary schools",
        OverburdenedTeachers:
          "Overburdened teachers with limited tools for personalization",
        LackOfDataDrivenApproaches:
          "Lack of data-driven approaches to monitor and improve student performance",
      },
      SolutionOriented: {
        AIAdaptiveLearning:
          "AI-powered adaptive learning ensures every student progresses at their own pace",
        MasteryLearning:
          "Mastery learning principles ensure students fully understand concepts before advancing",
        IntegratedDashboards:
          "Integrated dashboards and analytics give teachers actionable insights for intervention",
      },
      UniqueDifferentiators: {
        CulturalAlignment:
          "Personalized, culturally aligned educational content",
        CrossCuttingIssues:
          "Seamless integration of cross-cutting issues like environmental awareness and ethics",
        NationalCurriculum:
          "AI-generated lesson plans and assessments aligned with the national curriculum",
      },
    },
    VisionStatement:
      "To provide adaptive, AI-powered educational solutions that empower students to excel through personalized learning, support teachers in their roles as mentors and advocates, and enable schools to deliver data-driven, inclusive, and impactful education for a brighter future",
    TargetAudience: {
      Teachers: {
        Message:
          "Spend less time on administrative tasks and more time mentoring and inspiring your students ALETU is here to help you make a greater impact",
      },
      Students: {
        Message:
          "Your learning, your pace, your future ALETU helps you succeed by making every lesson just right for you",
      },
      AdministratorsAndPolicymakers: {
        Message:
          "Drive better educational outcomes with data-driven insights and adaptive learning technologies ALETU aligns with your goals for a brighter future",
      },
    },
    ValuePropositionStatement:
      "ALETU empowers Ugandan secondary schools to overcome high dropout rates, limited teacher capacity, and low student engagement by providing an AI-driven, culturally aligned educational platform It delivers personalized learning paths, mastery-based instruction, and actionable insights for educators, enabling improved academic outcomes, reduced dropout rates, and data-informed policymaking for a brighter educational future",
  },
  {
    title: "TimeSift",
    tagline: "Rediscover peace of mind with intelligent surveillance",
    description:
      "An AI-driven surveillance system that transforms hours of CCTV footage into curated daily highlight reels, saving time and enhancing security",
    ValueProposition: {
      Problem:
        "Homeowners and property managers face the tedious task of manually reviewing hours of CCTV footage to monitor their homes or properties Conventional systems lack intelligence to identify and summarize significant activities, making surveillance inefficient and time-consuming",
      Solution:
        "TimeSift uses advanced AI to sift through hours of footage and generate concise highlight reels tailored to user preferencesIt identifies significant events like unusual movements, visitors, or deliveries, saving users time while enhancing peace of mind",
      KeyBenefits: {
        TimeEfficiency: "Users spend less time reviewing irrelevant footage",
        EnhancedSecurity: "Alerts on unusual or suspicious activity",
        Personalization:
          "Learns user preferences to provide tailored summaries",
      },
      Differentiators: [
        "Automatically detects and highlights significant events",
        "Personalizes summaries based on user-defined preferences",
        "Saves time while enhancing peace of mind by providing a quick and actionable view of daily activities",
      ],
    },
    KeyComponents: {
      ProblemFocused: {
        TediousManualReview:
          "Time-consuming process of manually reviewing hours of CCTV footage",
        LackOfIntelligenceInSystems:
          "Conventional systems lack intelligence to identify and summarize significant activities",
      },
      SolutionOriented: {
        AIAlgorithms:
          "AI-driven system that sifts through footage to automatically generate highlight reels",
        EventDetection:
          "Detection of significant events such as unusual movements, visitors, or deliveries",
      },
      UniqueDifferentiators: {
        Personalization:
          "Adapts to user preferences to provide highly relevant summaries",
        TimeSaving:
          "Transforms hours of footage into a brief, actionable highlight reel",
        PeaceOfMind:
          "Ensures users are always aware of critical events without having to sift through long footage",
      },
    },
    VisionStatement:
      "To redefine home and property surveillance with AI, providing effortless security and peace of mind by turning hours of video into moments of significance",
    TargetAudience: {
      Homeowners: {
        Message:
          "Spend less time monitoring footage and more time enjoying your home TimeSift delivers the peace of mind you deserve",
      },
      PropertyManagers: {
        Message:
          "Manage multiple properties with ease by quickly reviewing relevant security footage TimeSift helps you focus on what matters most",
      },
      SmartHomeEnthusiasts: {
        Message:
          "Integrate TimeSift with your smart home to make surveillance even smarter and more efficient",
      },
      SmallBusiness: {
        Message: " Small business owners with basic surveillance setups",
      },
      TravelersAndRemoteHomeowners: {
        Message:
          "Travelers and remote homeowners who need periodic summaries of property activity",
      },
    },
    ValuePropositionStatement:
      "For homeowners, property managers, and smart home enthusiasts seeking smarter and more efficient surveillance solutions, TimeSift is an AI-driven system that transforms hours of CCTV footage into curated daily highlight reels Unlike traditional surveillance systems that rely on manual review",
  },
  {
    title: "EchoSign",
    tagline: "Giving voice to the unspoken",
    description:
      "An AI-powered platform that converts sign language into spoken words in real-time using advanced vision processing models",
    ValueProposition: {
      Problem:
        "Individuals who rely on sign language face barriers in verbal communication, especially in professional, academic, and public settings",
      Solution:
        "EchoSign uses advanced AI to translate sign language into spoken words in real-time, fostering inclusivity and independence",
      KeyBenefits: {
        Independence:
          "Users can communicate verbally without relying on interpreters",
        Inclusivity:
          "Seamlessly participate in conversations, presentations, and professional engagements",
        Flexibility:
          "Adaptable to various settings, including classrooms, conferences, and media environments",
      },
      Differentiators: [
        "Real-time sign language translation into natural speech",
        "AI-powered system that accurately interprets hand gestures, facial expressions, and body movements",
        "Designed for a wide range of environments, from education to professional spaces",
      ],
    },
    KeyComponents: {
      ProblemFocused: {
        LanguageBarriers:
          "Individuals who rely on sign language face barriers in verbal communication, especially in professional, academic, and public settings",
        InterpreterDependence:
          "Dependence on interpreters limits independence and spontaneity, creating challenges in seamless communication",
      },
      SolutionOriented: {
        AITranslation:
          "EchoSign uses advanced AI to translate sign language into spoken words in realtime",
        AdaptiveLearning:
          " It analyzes hand gestures, facial expressions, and body movements to provide accurate and natural speech synthesis, enabling independence and accessibility",
      },
      UniqueDifferentiators: {
        Accessibility:
          "Makes verbal communication accessible for individuals using sign language",
        Empowerment:
          "Empowers users to engage independently without needing external interpreters",
      },
    },
    VisionStatement:
      "To bridge the communication gap for sign language users, empowering them with real-time, inclusive, and accessible verbal communication tools",
    TargetAudience: {
      DeafOrHardOfHearing: {
        Message:
          "Break communication barriers and engage fully in any setting with EchoSign Your voice, empowered",
      },
      EducationalInstitutions: {
        Message:
          "Enhance inclusivity in classrooms with real-time sign language translation. EchoSign supports every student",
      },
      CorporateEnvironments: {
        Message:
          "Improve accessibility in professional settings with real-time communication. EchoSign fosters inclusive workplaces",
      },
    },
    ValuePropositionStatement:
      "For individuals who communicate through sign language and seek to expand their verbal communication capabilities, EchoSign is an AI-powered platform that translates sign language into natural speech in real-time. Unlike traditional methods that rely on interpreters, EchoSign enables users to independently “speak” in various settings, fostering inclusivity, independence, and seamless interaction",
  },
  {
    title: "EchoSign Wearable",
    tagline: "Your voice, carried in the palm of your hand",
    description:
      "A wearable device that translates sign language into speech on the go, enhancing mobile communication.",
    ValueProposition: {
      Problem:
        "Sign language users need a portable, always-available solution for seamless communication in dynamic, on-the-go environments.",
      Solution:
        "EchoSign Wearable is a compact, portable device that translates sign language into spoken words in real-time, ensuring fluid communication in any setting.",
      KeyBenefits: {
        Mobility:
          "Users can communicate effortlessly wherever they are, whether traveling, at work, or socializing.",
        Independence:
          "Eliminates the need for external setups or interpreters.",
        Convenience:
          "Lightweight and easy to use, it ensures communication is always within reach.",
      },
      Differentiators: [
        "Compact and portable design for real-time communication on the go.",
        "Seamlessly integrates with daily life, enabling constant accessibility.",
        "AI-powered system that ensures accurate translations in varied environments.",
      ],
    },
    KeyComponents: {
      ProblemFocused: {
        NeedForPortability:
          "The need for a portable, always-available sign language translation solution.",
        StationarySystems:
          "Limitations of stationary sign language translation systems, restricting movement and flexibility.",
      },
      SolutionOriented: {
        RealTime:
          "EchoSign Wearable is a compact, portable device that translates sign language intospoken words in real-time, ensuring fluid communication in any setting",
        CompactDesign:
          "Lightweight wearable technology that enables mobile communication.",
      },
      UniqueDifferentiators: {
        Mobility:
          "Provides ultimate mobility for sign language users to communicate freely in any setting.",
        Independence:
          "Enables users to be independent in communication without relying on others or stationary setups.",
      },
    },
    VisionStatement:
      "To make seamless communication accessible anywhere, anytime for sign language users through innovative wearable technology.",
    TargetAudience: {
      OnTheGoSignLanguageUsers: {
        Message:
          "Communicate effortlessly no matter where you are. EchoSign Wearable ensures you’re never without your voice.",
      },
      Professionals: {
        Message:
          "Enhance your ability to communicate in professional environments with a portable, real-time solution.",
      },
      SocialAndCasualSettings: {
        Message:
          "Engage in social conversations without barriers. EchoSign Wearable allows for seamless interaction everywhere.",
      },
    },
    ValuePropositionStatement:
      "For on-the-go sign language users who seek seamless communication, the EchoSign Wearable is a portable device that translates sign language into spoken words in real-time. Unlike stationary systems, EchoSign Wearable provides the freedom and mobility to communicate effortlessly in any setting, from professional meetings to casual interactions.",
  },
  {
    title: "Mentor Mirror",
    tagline: "Trade like the masters without years of study",
    description:
      "An AI-powered trading platform that mirrors strategies of seasoned mentors to assist traders in real-time.",
    ValueProposition: {
      Problem:
        "Aspiring and intermediate traders often lack the time, expertise, or confidence to make informed trading decisions.",
      Solution:
        "Mentor Mirror replicates the strategies of seasoned trading mentors using AI, providing users with actionable insights and automated guidance.",
      KeyBenefits: {
        Expertise:
          "Access to AI-driven trading strategies modeled after successful mentors.",
        Efficiency:
          "Save time with automated insights and reduced manual research.",
        Confidence:
          "Make informed decisions with a system backed by proven methodologies.",
      },
      Differentiators: [
        "AI-driven replication of successful trading strategies.",
        "Real-time, actionable insights and guidance tailored to the user’s needs.",
        "Reduces emotional errors and accelerates learning for traders of all levels.",
      ],
    },
    KeyComponents: {
      ProblemFocused: {
        LackOfExpertise:
          "Many traders lack the time, experience, or knowledge to trade effectively.",
        EmotionalErrors:
          "Emotional errors often lead to poor trading decisions and outcomes.",
      },
      SolutionOriented: {
        AIInsights:
          "Real-time insights and guidance based on proven trading strategies.",
        AutomatedTradingSupport:
          "Automated systems that provide actionable recommendations to enhance decision-making.",
      },
      UniqueDifferentiators: {
        ProvenMethodologies:
          "Traders benefit from strategies modeled after successful mentors’ approaches.",
        EmotionalErrorReduction:
          "Mentor Mirror minimizes emotional influences, helping traders focus on data-driven decisions.",
      },
    },
    VisionStatement:
      "To democratize financial mentorship, empowering traders with AI-driven guidance that replicates the expertise of seasoned professionals.",
    TargetAudience: {
      AspiringTraders: {
        Message:
          "Learn trading strategies and apply them confidently with AI-backed insights. Mentor Mirror is here to help you grow.",
      },
      IntermediateTraders: {
        Message:
          "Enhance your trading skills with real-time mentorship and guidance. Mentor Mirror accelerates your journey.",
      },
      BusyProfessionals: {
        Message:
          "Engage in trading without investing endless hours. Mentor Mirror streamlines decision-making.",
      },
    },
    ValuePropositionStatement:
      " For aspiring and intermediate traders seeking to improve their trading outcomes, Mentor Mirror is an AI-powered platform that replicates the strategies of seasoned trading mentors. Unlike traditional trading tools, Mentor Mirror provides real-time actionable insights and automated guidance, empowering users to trade confidently and efficiently while minimizing learning curves and emotional errors.",
  },
];

const formatKey = (key) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

// Images mapped for JSON data
const imageMapping = {
  "Adaptive learning for educational transform of Uganda": aletu,
  TimeSift: timeshift,
  EchoSign: echo,
  "EchoSign Wearable": echoWearable,
  "Mentor Mirror": mirrorMentor,
};

// Map JSON data and attach images dynamically
const innovations = innovationInfo.map((item) => ({
  ...item,
  image: imageMapping[item.title],
}));

export default function Innovations() {
  const [activeInnovation, setActiveInnovation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCloseModal = () => {
    setActiveInnovation(null);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < 3) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section
      className="bg-gradient-to-b from-black via-[#111111] to-[#111111] w-[100%] text-white py-32 px-6"
    >
      <div className="text-center mb-20">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          Our Innovations
        </motion.h2>
        <p className="text-lg sm:text-xl text-silver max-w-3xl mx-auto">
          Pioneering transformative AI solutions that redefine industries and
          empower a smarter tomorrow.
        </p>
      </div>

      {/* Grid View */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 sm:p-8 gap-16">
        {innovations.map((innovation, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gradient-to-b from-[#1e1e1e] to-black rounded-xl cursor-pointer transform"
            onClick={() => {
              setActiveInnovation(innovation);
              setCurrentPage(1);
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.95,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 w-full h-64">
              <motion.img
                src={innovation.image}
                alt={innovation.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform"
              />
            </div>

            <div className="text-center px-4 py-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {innovation.title}
              </h3>
              <p className="text-sm text-silver font-medium italic mb-4">
                {innovation.tagline || ""}
              </p>
              <p className="text-silver text-sm">{innovation.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with slider */}
      {activeInnovation && (
        <motion.section
          className="fixed inset-0 bg-black bg-opacity-70 overflow-x-clip z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#1a1a1a] text-gray-300  w-[90%] sm:w-[80%] mx-auto p-8 rounded-lg shadow-lg relative h-[80vh] border border-neutral-700 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCloseModal();
              }}
              aria-label="Close Modal"
              className="absolute top-4 right-4 text-silver t hover:text-gray-200 text-4xl transition-colors"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto overflow-x-hidden h-full">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${(currentPage - 1) * 100}%)`,
                }}
                id="innovations-detail"
              >
                {/* Key Components Section */}
                <div className="w-full flex-shrink-0 p-4 space-y-8">
                  <div>
                    <h3 className="sm:text-2xl font-semibold text-lg text-white border-b mb-4 border-silver pb-2">
                      ValuePropositionStatement
                    </h3>
                    <p className="text-lg">
                      {activeInnovation.ValuePropositionStatement}
                    </p>
                  </div>
                  <h3 className="text-2xl text-white font-semibold border-b border-silver pb-2">
                    Key Components
                  </h3>
                  {[
                    "ProblemFocused",
                    "SolutionOriented",
                    "UniqueDifferentiators",
                  ].map((section) => (
                    <div key={section}>
                      <h4 className="text-lg font-medium text-white mb-2">
                        {formatKey(section)}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {Object.entries(
                          activeInnovation.KeyComponents[section]
                        ).map(([key, value]) => (
                          <li key={key}>
                            <strong className="text-white">
                              {formatKey(key)}:
                            </strong>{" "}
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Vision Statement Section */}
                <div className="w-full flex-shrink-0 p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white border-b mb-4 border-silver pb-2">
                      Vision Statement
                    </h3>
                    <p className="text-lg">
                      {activeInnovation.VisionStatement}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white border-b border-silver pb-2">
                      Target Audience
                    </h3>
                    {Object.entries(activeInnovation.TargetAudience).map(
                      ([key, { Message }]) => (
                        <div key={key} className="mb-4 mt-4">
                          <strong className="text-white">
                            {formatKey(key)}:
                          </strong>
                          <p className="text-gray-300">{Message}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Value Proposition Section */}
                <div className="w-full flex-shrink-0 p-6 space-y-6">
                  <h3 className="text-2xl font-semibold text-white border-b border-silver pb-2">
                    Value Proposition
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Problem
                      </h4>
                      <p className="text-gray-300">
                        {activeInnovation.ValueProposition.Problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Solution
                      </h4>
                      <p className="text-gray-300">
                        {activeInnovation.ValueProposition.Solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Key Benefits
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {Object.entries(
                          activeInnovation.ValueProposition.KeyBenefits
                        ).map(([key, value]) => (
                          <li key={key}>
                            <strong>{key}:</strong> {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Differentiators
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {activeInnovation.ValueProposition.Differentiators.map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 mt-4 left-1/2 transform -translate-x-1/2 flex justify-between space-x-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="bg-[white] text-black px-4 py-2 rounded-lg shadow hover:border border border-transparent hover:border-black transition-all"
              >
                <MdKeyboardDoubleArrowLeft className="text-lg" />
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === 3}
                aria-label="Next Page"
                className="bg-[white] text-black px-4 py-2 rounded-lg shadow hover:border border border-transparent hover:border-black transition-all"
              >
                <MdKeyboardDoubleArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </section>
  );
}
