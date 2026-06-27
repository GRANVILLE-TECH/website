import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { PlayCircle, FileText, Download, ExternalLink } from "lucide-react";
import InnovationSupportCTA from "../components/InnovationSupportCTA";

// ALETU Presentations (served from public folder)
const blueprintPdf = "/assets/aletu-slides/ALETU_Africa_s_Adaptive_Education_Blueprint.pdf";
const curriculumPdf = "/assets/aletu-slides/ALETU_Neural_Curriculum.pdf";
const masteryPdf = "/assets/aletu-slides/ALETU_Scaling_Mastery_in_Africa.pdf";

// Import your image assets
import aletu from "../assets/innovations/Data-Science-Practitioner.png-update-min-702x468.png";
import mirrorMentor from "../assets/innovations/mirrior mentor.webp";
import echo from "../assets/innovations/echo sign.jpg";
import echoWearable from "../assets/innovations/echosign.webp";
import timeshift from "../assets/innovations/timeshift.jpg";

const innovationInfo = [
  {
    key: "aletu",
    title: "Adaptive learning for educational transform of Uganda",
    tagline: "Revolutionizing education, one student at a time",
    category: "EdTech",
    description:
      "A cloud-based, AI-driven educational platform designed for secondary schools in Uganda. It delivers personalized, mastery-based instruction aligned with local curriculums",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=ALETU__AI_Tutor_for_a_Nation_wmmbbc&profile=cld-default",
    hasVideo: true,
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
    presentations: [
      {
        key: "blueprint",
        title: "Adaptive Education Blueprint",
        description: "A comprehensive guide to transforming Uganda's educational landscape through adaptive AI.",
        file: blueprintPdf
      },
      {
        key: "curriculum",
        title: "Neural Curriculum",
        description: "Deep dive into the AI-driven curriculum design and mastery-based learning paths.",
        file: curriculumPdf
      },
      {
        key: "mastery",
        title: "Scaling Mastery in Africa",
        description: "Strategic framework for scaling high-impact educational solutions across the continent.",
        file: masteryPdf
      }
    ]
  },
  {
    key: "timesift",
    title: "TimeSift",
    tagline: "Rediscover peace of mind with intelligent security",
    category: "Security",
    description:
      "An AI-driven security system that transforms hours of CCTV footage into curated daily highlight reels, saving time and enhancing security",
    videoUrl: null,
    hasVideo: false,
    ValueProposition: {
      Problem:
        "Homeowners and property managers face the tedious task of manually reviewing hours of CCTV footage to monitor their homes or properties Conventional systems lack intelligence to identify and summarize significant activities, making security inefficient and time-consuming",
      Solution:
        "TimeSift uses advanced AI to sift through hours of footage and generate concise highlight reels tailored to user preferencesIt identifies significant events like unusual movements, visitors, or deliveries, saving users time while enhancing security",
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
      "To redefine home and property security with AI, providing effortless security and peace of mind by turning hours of video into moments of significance",
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
          "Integrate TimeSift with your smart home to make security even smarter and more efficient",
      },
      SmallBusiness: {
        Message: " Small business owners with basic security setups",
      },
      TravelersAndRemoteHomeowners: {
        Message:
          "Travelers and remote homeowners who need periodic summaries of property activity",
      },
    },
    ValuePropositionStatement:
      "For homeowners, property managers, and smart home enthusiasts seeking smarter and more efficient security Solutions, TimeSift is an AI-driven system that transforms hours of CCTV footage into curated daily highlight reels Unlike traditional security systems that rely on manual review",
  },
  {
    key: "echosign",
    title: "EchoSign",
    tagline: "Giving voice to the unspoken",
    category: "Accessibility",
    description:
      "An AI-powered platform that converts sign language into spoken words in real-time using advanced vision processing models",
    videoUrl: null,
    hasVideo: false,
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
    key: "echosign_wearable",
    title: "EchoSign Wearable",
    tagline: "Your voice, carried in the palm of your hand",
    category: "Accessibility",
    description:
      "A wearable device that translates sign language into speech on the go, enhancing mobile communication.",
    videoUrl: null,
    hasVideo: false,
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
    key: "mentor_mirror",
    title: "Mentor Mirror",
    tagline: "Trade like the masters without years of study",
    category: "FinTech",
    description:
      "An AI-powered trading platform that mirrors strategies of seasoned mentors to assist traders in real-time.",
    videoUrl: null,
    hasVideo: false,
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

const toCamelCase = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

// Images mapped for JSON data
const imageMapping = {
  aletu: aletu,
  timesift: timeshift,
  echosign: echo,
  echosign_wearable: echoWearable,
  mentor_mirror: mirrorMentor,
};

// Map JSON data and attach images dynamically
const innovations = innovationInfo.map((item) => ({
  ...item,
  image: imageMapping[item.key],
}));

export default function Innovations() {
  const { t } = useTranslation();
  const [activeInnovation, setActiveInnovation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "EdTech", "FinTech", "Security", "Accessibility"];

  const filteredInnovations = selectedCategory === "All"
    ? innovations
    : innovations.filter(innovation => innovation.category === selectedCategory);

  const handleCloseModal = () => {
    setActiveInnovation(null);
    setCurrentPage(1);
  };

  const getTotalPages = () => {
    let pages = 3; // Basic info, Vision, Value Prop
    if (activeInnovation?.hasVideo) pages += 1;
    if (activeInnovation?.presentations) pages += 1;
    pages += 1; // Support slide (NEW)
    return pages;
  };

  const handleNextPage = () => {
    const totalPages = getTotalPages();
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
          {t("innovations.title", "Our Innovations")}
        </motion.h2>
        <p className="text-lg sm:text-xl text-silver max-w-3xl mx-auto">
          {t("innovations.subtitle", "Pioneering transformative AI solutions that redefine industries and empower a smarter tomorrow.")}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg'
                : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#2a2a2a] border border-gray-700'
                }`}
            >
              {t("innovations.categories." + category, category)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid View */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 sm:p-8 gap-16">
        {filteredInnovations.map((innovation, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gradient-to-b from-[#1e1e1e] to-black rounded-xl cursor-pointer transform relative overflow-hidden"
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
              scale: 1.05,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <div className="relative overflow-hidden rounded-t-xl w-full h-64 bg-gradient-to-br from-[#1a1a1a] to-black">
              {/* Innovation Image */}
              {innovation.image && (
                <img
                  src={innovation.image}
                  alt={`AI Solution for ${innovation.category}: ${t("innovations.items." + innovation.key + ".title", innovation.title)} - ${t("innovations.items." + innovation.key + ".tagline", innovation.tagline)}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Video Badge Overlay */}
              {innovation.hasVideo && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/60 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <PlayCircle className="w-16 h-16 text-white" />
                    <span className="text-white font-semibold text-sm">
                      {t("innovations.watchDemo", "Watch Demo")}
                    </span>
                  </div>
                </div>
              )}

              {/* Video Available Badge */}
              {innovation.hasVideo && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <PlayCircle className="w-3 h-3" />
                  {t("innovations.videoBadge", "VIDEO")}
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t("innovations.categories." + innovation.category, innovation.category)}
              </div>
            </div>

            <div className="text-center px-4 py-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {t("innovations.items." + innovation.key + ".title", innovation.title)}
              </h3>
              <p className="text-sm text-silver font-medium italic mb-4">
                {t("innovations.items." + innovation.key + ".tagline", innovation.tagline) || ""}
              </p>
              <p className="text-silver text-sm">
                {t("innovations.items." + innovation.key + ".description", innovation.description)}
              </p>
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
          <div className="bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#1a1a1a] text-gray-300 w-[90%] sm:w-[80%] mx-auto p-8 rounded-lg shadow-lg relative h-[80vh] border border-neutral-700 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCloseModal();
              }}
              aria-label="Close Modal"
              className="absolute top-4 right-4 text-silver hover:text-gray-200 text-4xl transition-colors"
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
                {/* Video Page - Only show if video exists */}
                {activeInnovation.hasVideo && (
                  <div className="w-full flex-shrink-0 p-4 space-y-8">
                    <h3 className="text-3xl font-semibold text-white text-center mb-6">
                      {t("innovations.items." + activeInnovation.key + ".title", activeInnovation.title)} - {t("innovations.videoDemoTitle", "Demo Video")}
                    </h3>

                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={activeInnovation.videoUrl}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title={`${t("innovations.items." + activeInnovation.key + ".title", activeInnovation.title)} Demo Video`}
                      />
                    </div>

                    <div className="text-center mt-6">
                      <p className="text-lg text-gray-300 mb-4">
                        {t("innovations.items." + activeInnovation.key + ".description", activeInnovation.description)}
                      </p>
                      <p className="text-sm text-gray-400 italic mb-6">
                        &ldquo;{t("innovations.items." + activeInnovation.key + ".tagline", activeInnovation.tagline)}&rdquo;
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4 justify-center mt-8">
                        <a
                          href="#contact"
                          onClick={handleCloseModal}
                          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          {t("innovations.requestDemo", "Request Demo")}
                        </a>
                        <a
                          href="#contact"
                          onClick={handleCloseModal}
                          className="px-6 py-3 bg-[#1e1e1e] text-white font-semibold rounded-lg border border-gray-600 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
                        >
                          {t("innovations.contactUs", "Contact Us")}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Presentations Page - Only show if presentations exist */}
                {activeInnovation.presentations && (
                  <div className="w-full flex-shrink-0 p-4 space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-semibold text-white mb-2">
                        {t("innovations.labels.resourceLibrary", "Resource Library")}
                      </h3>
                      <p className="text-silver">
                        {t("innovations.resourcesSubtitle", {
                          defaultValue: "Explore our detailed presentations and technical blueprints for {{name}}.",
                          name: t("innovations.items." + activeInnovation.key + ".title", activeInnovation.title)
                        })}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {activeInnovation.presentations.map((presentation, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -5 }}
                          className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center group"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-yellow-500/20 transition-all">
                            <FileText className="text-black w-8 h-8" />
                          </div>
                          <h4 className="text-white font-bold mb-2">
                            {t("innovations.items." + activeInnovation.key + ".presentations." + presentation.key + ".title", presentation.title)}
                          </h4>
                          <p className="text-gray-400 text-sm mb-6 flex-grow">
                            {t("innovations.items." + activeInnovation.key + ".presentations." + presentation.key + ".description", presentation.description)}
                          </p>
                          <div className="flex gap-3 w-full">
                            <a
                              href={presentation.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all"
                            >
                              <ExternalLink size={14} /> {t("resources.viewBtn", "View")}
                            </a>
                            <a
                              href={presentation.file}
                              download
                              className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
                            >
                              <Download size={14} /> {t("resources.downloadBtn", "Get PDF")}
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mt-8">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                          <ExternalLink className="text-yellow-500 w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-white font-semibold mb-1">
                            {t("innovations.lookingForMore", "Looking for more?")}
                          </h5>
                          <p className="text-gray-400 text-sm">
                            {t("innovations.lookingForMoreDesc", "These documents represent our core strategy and technical foundations. Contact our team for detailed implementation case studies or partnership inquiries.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Components Section */}
                <div className="w-full flex-shrink-0 p-4 space-y-8">
                  <div>
                    <h3 className="sm:text-2xl font-semibold text-lg text-white border-b mb-4 border-silver pb-2">
                      {t("innovations.labels.ValuePropositionStatement", "Value Proposition Statement")}
                    </h3>
                    <p className="text-lg">
                      {t("innovations.items." + activeInnovation.key + ".valuePropositionStatement", activeInnovation.ValuePropositionStatement)}
                    </p>
                  </div>
                  <h3 className="text-2xl text-white font-semibold border-b border-silver pb-2">
                    {t("innovations.labels.KeyComponents", "Key Components")}
                  </h3>
                  {[
                    "ProblemFocused",
                    "SolutionOriented",
                    "UniqueDifferentiators",
                  ].map((section) => (
                    <div key={section}>
                      <h4 className="text-lg font-medium text-white mb-2">
                        {t("innovations.labels." + section, formatKey(section))}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {Object.entries(
                          activeInnovation.KeyComponents[section]
                        ).map(([key, value]) => (
                          <li key={key}>
                            <strong className="text-white">
                              {t("innovations.labels." + key, formatKey(key))}:
                            </strong>{" "}
                            {t("innovations.items." + activeInnovation.key + ".keyComponents." + toCamelCase(section) + "." + key, value)}
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
                      {t("innovations.visionStatement", "Vision Statement")}
                    </h3>
                    <p className="text-lg">
                      {t("innovations.items." + activeInnovation.key + ".visionStatement", activeInnovation.VisionStatement)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white border-b border-silver pb-2">
                      {t("innovations.targetAudience", "Target Audience")}
                    </h3>
                    {Object.entries(activeInnovation.TargetAudience).map(
                      ([key, { Message }]) => (
                        <div key={key} className="mb-4 mt-4">
                          <strong className="text-white">
                            {t("innovations.labels." + key, formatKey(key))}:
                          </strong>
                          <p className="text-gray-300">
                            {t("innovations.items." + activeInnovation.key + ".targetAudience." + key, Message)}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Value Proposition Section */}
                <div className="w-full flex-shrink-0 p-6 space-y-6">
                  <h3 className="text-2xl font-semibold text-white border-b border-silver pb-2">
                    {t("innovations.valueProposition", "Value Proposition")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        {t("innovations.problem", "Problem")}
                      </h4>
                      <p className="text-gray-300">
                        {t("innovations.items." + activeInnovation.key + ".valueProposition.problem", activeInnovation.ValueProposition.Problem)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        {t("innovations.solution", "Solution")}
                      </h4>
                      <p className="text-gray-300">
                        {t("innovations.items." + activeInnovation.key + ".valueProposition.solution", activeInnovation.ValueProposition.Solution)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        {t("innovations.keyBenefits", "Key Benefits")}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {Object.entries(
                          activeInnovation.ValueProposition.KeyBenefits
                        ).map(([key, value]) => (
                          <li key={key}>
                            <strong>{t("innovations.labels." + key, formatKey(key))}:</strong>{" "}
                            {t("innovations.items." + activeInnovation.key + ".valueProposition.keyBenefits." + key, value)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        {t("innovations.differentiators", "Differentiators")}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {(t("innovations.items." + activeInnovation.key + ".valueProposition.differentiators", { returnObjects: true }) || activeInnovation.ValueProposition.Differentiators).map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-gray-700">
                      <a
                        href="#contact"
                        onClick={handleCloseModal}
                        className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        {t("innovations.requestDemo", "Request Demo")}
                      </a>
                      <a
                        href="#contact"
                        onClick={handleCloseModal}
                        className="px-6 py-3 bg-[#1e1e1e] text-white font-semibold rounded-lg border border-gray-600 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
                      >
                        {t("innovations.contactUs", "Contact Us")}
                      </a>
                    </div>
                  </div>
                </div>
                {/* Support Slide */}
                <InnovationSupportCTA innovationName={t("innovations.items." + activeInnovation.key + ".title", activeInnovation.title)} />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 mt-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center space-x-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="bg-[white] text-black px-4 py-2 rounded-lg shadow hover:border border border-transparent hover:border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MdKeyboardDoubleArrowLeft className="text-lg" />
              </button>

              {/* Page Indicator */}
              <span className="text-white text-sm">
                {currentPage} / {getTotalPages()}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === getTotalPages()}
                aria-label="Next Page"
                className="bg-[white] text-black px-4 py-2 rounded-lg shadow hover:border border border-transparent hover:border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
