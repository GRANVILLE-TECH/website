import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { BookOpen, Calendar, Clock, User, Tag } from 'lucide-react';

// Article data structure
const articlesData = [
  {
    id: 1,
    title: "Strategic Market Positioning: Navigating the African EdTech Funding Winter",
    subtitle: "A comprehensive analysis of the African EdTech landscape and strategic pathways for sustainable growth",
    author: "ALETU Strategy Team",
    date: "2026-01-21",
    readTime: "15 min read",
    tags: ["EdTech", "Africa", "Strategy", "Investment", "AI"],
    excerpt: "The African EdTech sector presents the most compelling arbitrage opportunity in emerging markets. This article explores strategic positioning, technological innovation, and sustainable financing models for navigating the funding winter.",
    sections: [
      {
        title: "The Macroeconomic Divergence: Africa's EdTech Context",
        content: [
          {
            type: "paragraph",
            text: "The African EdTech sector currently presents the most compelling arbitrage opportunity in emerging markets. While the continent's demographic dividend—over 60% of the population is under 25—creates an insatiable demand for human capital development, the \"funding winter\" has exposed the fragility of ventures reliant on Western-centric growth models. In 2023, African venture capital equity plummeted 54% to $2.3 billion, yet the strategic tension lies in the sector's internal prioritization: EdTech captured a negligible 1% of that total. As a Lead Strategist, I view this not as a lack of opportunity, but as a terminal misalignment of current business architectures against continental realities."
          },
          {
            type: "bullets",
            items: [
              "Global Capital Concentration: Africa attracts less than 1% of global venture capital.",
              "Sector Neglect: Within Africa, EdTech captured only $27 million (1%) of total 2023 investment.",
              "Systemic Deficit: 17 million additional teachers are required by 2030, while only 40% of primary schools currently have internet access."
            ]
          },
          {
            type: "paragraph",
            text: "The AUDA-NEPAD framework highlights a critical infrastructure deficit, yet smart capital looks at the \"Teacher Smartphone Ownership\" data as the real bridge: 90% in South Africa and 30-65% in markets like Ghana, Nigeria, and Kenya. This proves that a mobile-first, offline-capable intervention is not just a preference—it is the only viable infrastructure. To survive, founders must transition from generic SaaS models to architectures that deconstruct syllabi to irreducible truths, aligning with the \"First Principles\" approach required for systemic reform."
          }
        ]
      },
      {
        title: "The Growth Horizon Conflict: Venture Capital vs. Sector Realities",
        content: [
          {
            type: "paragraph",
            text: "The fundamental friction in the current market lies in a terminal value misalignment. The \"Silicon Valley Model\" of rapid growth and 7–10 year exits fundamentally clashes with the systemic, long-horizon nature of African educational reform. While FinTech can scale through purely digital rails, EdTech requires navigating a \"long game\" that involves behavioral shifts and bureaucratic integration."
          },
          {
            type: "table",
            headers: ["Venture Capital Expectations", "EdTech Sector Benchmarks"],
            rows: [
              ["Rapid Growth: Target CAGR >23% (FinTech standard)", "Moderate Expansion: Typical EdTech CAGR is ~16%"],
              ["Short Exit Horizon: Expected liquidity in 7–10 years", "Systemic Horizon: Reform cycles require patient capital"],
              ["Fundraising Velocity: 12–18 month cycles", "Extended Cycles: Fundraising often spans 12–24 months"],
              ["Low COGS: Software-only, near-zero marginal cost", "High Content Cost: Continuous curriculum/pedagogical R&D"]
            ]
          },
          {
            type: "paragraph",
            text: "This conflict is exacerbated by the User-Purchaser Disconnect. Unlike B2C software, the student (end-user) rarely holds the purse strings. The gap between students and the purchasers (government/administrators) obscures the visibility of product effectiveness, creating a perception of high risk for VCs. Strategic positioning now requires treating Efficacy as a Sales Tool rather than a research byproduct. By proving impact, ventures can collapse the review cycle and assert pricing power, turning moderate growth into high \"Value Density.\""
          }
        ]
      },
      {
        title: "Operational Hurdles: The Cost of Scalability and Efficacy",
        content: [
          {
            type: "paragraph",
            text: "The \"Scalability Maze\" in African EdTech is defined by the inability to achieve exponential revenue without a corresponding surge in operational overhead. Traditional ventures often break when they hit the public school barrier, as the cost of content adaptation and procurement complexity compresses margins to unsustainable levels."
          },
          {
            type: "subheading",
            text: "The Scalability Maze: Core Challenges & Strategic Pivots"
          },
          {
            type: "bullets",
            items: [
              "Customer Segmentation (The Public School Barrier): Public schools offer the largest TAM but involve multi-year procurement cycles. Strategic Pivot: Follow the Resolute Education model by utilizing a \"Subscription + Consumable\" revenue stream.",
              "Content Adaptability (Diversity of Curricula): Multilingual requirements and fragmented national syllabi make manual curation a margin-killer. Strategic Pivot: Implementing modular, AI-driven content generation that can be localized at near-zero marginal cost.",
              "Acquisition Cycles (Workflow Integration): Integration into classrooms is slow and requires teacher buy-in. Strategic Pivot: Collaborative purchasing. Data indicates teacher satisfaction increases from 80% to 96% when they are involved in the procurement decision."
            ]
          },
          {
            type: "paragraph",
            text: "Critically, the market is moving toward an \"Efficacy-First\" mandate. With Brookings data showing only 11% of global EdTech has been externally evaluated, the lack of data is an unmanaged risk. The next generation of platforms must integrate automated efficacy tracking, using modern AI architectures to bridge the evidence gap."
          }
        ]
      },
      {
        title: "Technological Arbitrage: Leveraging AI to Bridge the Efficiency Gap",
        content: [
          {
            type: "paragraph",
            text: "The shift from traditional SaaS to platforms like ALETU represents a move from software budgets to Labor and Payroll Budgets. Traditional SaaS competes for a sliver of the IT budget; \"Agentic AI\" competes for the much larger pot of money currently spent on labor (tutoring and teaching)."
          },
          {
            type: "subheading",
            text: "Comparison: Traditional EdTech vs. AI-Driven Adaptive Learning (ALETU Model)"
          },
          {
            type: "bullets",
            items: [
              "Content Generation: Static syllabi vs. AI-driven dynamic content using Knowledge Graphs (KGs) that deconstruct complex subjects into fundamental truths.",
              "Personalization: One-size-fits-all vs. Mastery-based tracking via Bayesian Knowledge Tracing (BKT). ALETU targets a probabilistic mastery threshold (P-mastery ≥ 0.9) before allowing progression.",
              "Scalability: High human curation costs vs. LLM-driven remediation and automated bias mitigation."
            ]
          },
          {
            type: "paragraph",
            text: "The AI Math vs. SaaS Math: Traditional SaaS aims for 70–85% gross margins by selling tools. Agentic AI platforms may accept lower gross margins of 50–60%—reflecting higher compute and inference costs—but they assert significantly higher pricing power. If an AI product augments $200k worth of human labor, it can command a $100k price point. This is the \"Value Density\" play: lower delivery efficiency is traded for a 10x larger TAM and massive absolute profit per customer."
          }
        ]
      },
      {
        title: "Financing the Future: Beyond the \"Silicon Dream\"",
        content: [
          {
            type: "paragraph",
            text: "Founders must reject the \"equity-only\" narrative and build a diversified funding stack. Chasing high-velocity VC capital often leads to \"mission drift,\" where the pressure for 10x returns forces ventures to abandon the long-term impact metrics that ensure continental survival."
          },
          {
            type: "bullets",
            items: [
              "Revenue-Based Financing: Ideal for ventures with variable revenue cycles, tying repayment to income rather than equity.",
              "Social Impact Bonds (SIBs): A performance-based model where third parties (governments/donors) repay investors only upon verified literacy or numeracy improvements.",
              "Blended Finance: Utilizing philanthropic \"patient capital\" to de-risk the early stages.",
              "Grants & Forgivable Loans: Essential for non-dilutive R&D in high-impact areas like multilingual content or rural infrastructure."
            ]
          },
          {
            type: "paragraph",
            text: "Strategic founders like those at Instill Education demonstrate that taking smaller, values-aligned capital early—such as from the Mastercard Foundation—is a superior strategy to chasing large VC checks. Maintaining your \"True North\" ensures that as the venture scales, it does so without compromising the pedagogical integrity required for long-term government partnerships."
          }
        ]
      },
      {
        title: "Conclusion: A New Blueprint for African EdTech",
        content: [
          {
            type: "paragraph",
            text: "The path through the funding winter requires a synthesis of local innovation, regulatory alignment with the African EdTech 2030 Vision, and a move toward Digital Public Infrastructure. By leveraging Agentic AI, the continent can solve the scaling crisis that has historically plagued teacher-led models."
          },
          {
            type: "subheading",
            text: "Action Framework for EdTech Founders"
          },
          {
            type: "bullets",
            items: [
              "Prioritize Efficacy Evidence: Integrate mastery-tracking (BKT) to provide quantifiable proof of impact to investors and purchasers.",
              "Design for Intermediate Stakeholders: Treat teachers and parents as the \"bridge\" to learners; their buy-in is the primary driver of retention.",
              "Align with Government Policy: Build vendor-neutral, interoperable systems consistent with AUDA-NEPAD standards.",
              "Leverage AI Orchestration: Shift from high-cost human curation to agentic delivery, tapping into labor budgets for higher ARPA."
            ]
          },
          {
            type: "paragraph",
            text: "Africa stands at a \"Leapfrog\" moment. Just as Mobile Money bypassed traditional banking infrastructure to spark a financial revolution (M-Pesa), African EdTech is positioned to bypass legacy educational barriers. By embracing sustainable financial models and AI-driven efficiency, the continent will not just survive the funding winter—it will lead the next era of global educational innovation."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Bridging the Innovation Gap: A Pan-African EdTech Stakeholder Engagement Strategy",
    subtitle: "Navigating the complex ecosystem of learners, educators, parents, and policymakers for sustainable EdTech impact",
    author: "ALETU Strategy Team",
    date: "2026-01-20",
    readTime: "18 min read",
    tags: ["EdTech", "Stakeholder Engagement", "Policy", "Africa", "Education Ecosystem"],
    excerpt: "Strategic success in African EdTech demands understanding the complex interdependencies between learners, educators, parents, and policymakers. This article maps the ecosystem and provides actionable engagement strategies.",
    sections: [
      {
        title: "The Interdependency Framework: Mapping the Education Ecosystem",
        content: [
          {
            type: "paragraph",
            text: "Strategic success in the African EdTech sector demands a shift in perspective: EdTech is not a standalone product but a vital component within a complex web of learners, educators, parents, and policymakers. In the Pan-African context, digital solutions operate within an \"Education Ecosystem Map\" where success is inextricably linked to socio-economic conditions and institutional structures. Fragmented innovation fails because it ignores these interdependencies; a unified strategy is required to transform isolated products into sustainable systems."
          },
          {
            type: "paragraph",
            text: "Based on the Injini framework, the ecosystem is sustained by four key entities providing critical inputs:"
          },
          {
            type: "bullets",
            items: [
              "Government: Provides regulation, curriculum setting, and quality assurance.",
              "Private Sector: Drives funding through VC/Angel investment and CSR initiatives.",
              "Academia: Contributes research, innovation, and high-level skills development.",
              "Civil Society: Leads advocacy, lobbying, and community-based resource provision."
            ]
          },
          {
            type: "paragraph",
            text: "When these stakeholders operate in silos, the result is \"sub-optimal solutions\"—technologies that fail to address systemic needs. To achieve sustainable impact, providers must align their value propositions with the central roles of the ecosystem's primary actors:"
          },
          {
            type: "bullets",
            items: [
              "Learners: The ultimate beneficiaries. Impact is measured by mastery and engagement.",
              "Teachers: The classroom implementers. For the policy advisor, the critical metric is the SSR (Single Teacher Success Rate), which tracks how effectively a single educator can drive learning outcomes using digital tools.",
              "Parents: The primary gatekeepers and purchasers of home-based educational resources."
            ]
          },
          {
            type: "paragraph",
            text: "The transition from theoretical framework to scale requires navigating the \"bureaucratic reality\" of the most influential entity: the state."
          }
        ]
      },
      {
        title: "Navigating the Bureaucratic Divide: Government as a Primary Partner",
        content: [
          {
            type: "paragraph",
            text: "In markets like South Africa, where 98% of learners are in public schools, government alignment is the only path to continental scale. However, a significant \"Skepticism Gap\" exists, fueled by decades of failed e-Education promises. The 2004 White Paper 7 on e-Education set a primary objective for every learner to be \"ICT capable\" by 2013—a goal that remains largely unfulfilled in 2024. This policy lag has left governments with an outdated understanding of e-Education, while the private sector moves rapidly into AI and robotics."
          },
          {
            type: "paragraph",
            text: "Strategic engagement must acknowledge that while schools may lack infrastructure, the individuals within them do not. Smartphone ownership among teachers exceeds 90% in South Africa and ranges between 30% and 65% in Ghana, Nigeria, and Kenya. This foundation allows for mobile-first interventions even when school-level connectivity is absent."
          },
          {
            type: "table",
            headers: ["Government Challenge", "Description", "EdTech Strategic Response"],
            rows: [
              ["Resource Allocation", "Budgets prioritized for food security and transport over technology", "Evidence-Based ROI: Demonstrating high \"Value Density\" where AI replaces/augments costly human labor"],
              ["Digital Divide", "Inconsistent infrastructure in low-income and rural districts", "Intermittent Connectivity Design: Utilizing Zero-rated data and offline-first architectures"],
              ["Language Barriers", "English-only materials exclude learners in early childhood development (ECD)", "Localized Multi-lingualism: Content provided in regional languages (e.g., isiZulu, Kiswahili, Wolof)"],
              ["Bureaucratic Inertia", "Lengthy review cycles and outdated 2004-era ICT standards", "AI-Shift Advocacy: Mapping solutions to modern coding and robotics curriculum mandates"]
            ]
          },
          {
            type: "paragraph",
            text: "Policymakers must move beyond basic computer literacy. To remain curriculum-relevant, national strategies must redefine e-education to include AI-driven personalization, ensuring students gain the digital skills required by modern economies."
          }
        ]
      },
      {
        title: "The Gateway Stakeholders: Engaging Teachers and Parents",
        content: [
          {
            type: "paragraph",
            text: "Teachers and parents are the \"essential intermediaries\" between the product and the learner. Without their endorsement, even the most sophisticated technology remains shelfware."
          },
          {
            type: "subheading",
            text: "Distilling Teacher Pain Points"
          },
          {
            type: "paragraph",
            text: "75% of teachers prioritize curriculum alignment over pure innovation. They view EdTech as a tool to solve immediate classroom pressures, not as an additional burden. The top three obstacles identified include:"
          },
          {
            type: "bullets",
            items: [
              "Resource Limitations (53%): Lack of devices or consistent power.",
              "Time Constraints (40%): Heavy curricula leave no room for software troubleshooting.",
              "Insufficient Training (28%): Low confidence in using digital tools effectively."
            ]
          },
          {
            type: "subheading",
            text: "Parental Preference Dynamics: The \"Digital vs. Physical\" Paradox"
          },
          {
            type: "paragraph",
            text: "In rural contexts, a paradox exists: 80% of parents are digitally literate and own smartphones, yet 75.2% prefer physical reading materials for their children to avoid digital distractions. Strategic \"So What?\": The recommendation is not to abandon digital, but to adopt an intentional friction reduction strategy. Digital tools should empower physical interaction (e.g., hybrid kits) rather than replace it, using the parent's digital literacy to facilitate offline learning."
          },
          {
            type: "subheading",
            text: "The Language of Instruction Conflict"
          },
          {
            type: "paragraph",
            text: "While pedagogical research proves mother-tongue learning is superior, 89.7% of parents prefer English materials, viewing them as a \"universal language\" for employment. Strategic Recommendation: Founders must \"educate the market\" by positioning mother-tongue instruction as an English-enabler, not a competitor. Mastery in a local language accelerates the cognitive structures required for English fluency, a point essential for market buy-in."
          }
        ]
      },
      {
        title: "Fit-for-Purpose Innovation: Adaptive Learning and AI Architecture",
        content: [
          {
            type: "paragraph",
            text: "Modern EdTech must transition from static content to \"Closed-Loop\" adaptive platforms, personalizing education at scale for resource-limited settings."
          },
          {
            type: "subheading",
            text: "The Closed-Loop Adaptive Tutor Mechanism"
          },
          {
            type: "paragraph",
            text: "As evidenced by the ALETU architecture, a sophisticated adaptive platform requires:"
          },
          {
            type: "bullets",
            items: [
              "Syllabus Management: Managing subtopic tracking via CSV-based frameworks to monitor status (Not Started → Learning → Completed).",
              "Knowledge Representation: Storing curriculum facts in Parquet-format Knowledge Graphs (KGs) to ensure contextual groundedness.",
              "Content Generation: Using LLMs to generate lessons grounded in KGs to prevent hallucinations.",
              "Assessment: Employing Bayesian Knowledge Tracing (BKT) (e.g., a 0.9 mastery threshold) to update learner probability scores after every interaction."
            ]
          },
          {
            type: "subheading",
            text: "The Economic Shift: Value Density"
          },
          {
            type: "paragraph",
            text: "AI-driven EdTech shifts the financial profile of the sector. While traditional SaaS enjoys 70–85% gross margins, AI companies often see 50–60% margins due to compute and inference costs. However, they offer higher \"Value Density\" because they tap into labor budgets (tutors, teaching assistants), which are typically 10x larger than software budgets."
          },
          {
            type: "subheading",
            text: "Localization Protocols for AI"
          },
          {
            type: "paragraph",
            text: "AI agents must be architected with specific localization protocols:"
          },
          {
            type: "bullets",
            items: [
              "Bias Mitigation: Removing generic Western biases from generated content.",
              "Cultural Relevance: Integrating specific keywords (e.g., Ugandan context) to ensure examples resonate locally.",
              "Multi-lingual Support: Capability to switch between English and regional languages like Kiswahili or Wolof."
            ]
          }
        ]
      },
      {
        title: "The Efficacy and Investment Roadmap: Proving the \"So What?\"",
        content: [
          {
            type: "paragraph",
            text: "In the current \"Funding Winter,\" capital is scarce. EdTech's moderate 16% CAGR (vs. FinTech's 24%) makes it less attractive to traditional VCs seeking 7–10 year exits. To attract investment, founders must bridge the \"Efficacy Gap\"—only 11% of global EdTech solutions have been externally evaluated."
          },
          {
            type: "paragraph",
            text: "This gap is exacerbated by the disconnect between the end-user and the purchaser. Because the student is not the payer, the feedback loop for efficacy is broken. External evaluation is the only way to de-risk investment and prove a solution's \"tangible value\" to institutional buyers."
          },
          {
            type: "table",
            headers: ["Mechanism", "Strategic Value"],
            rows: [
              ["Impact First Private Capital", "Aligns profit with societal objectives; accepts longer growth horizons"],
              ["Social Impact Bonds (SIBs)", "Transfers risk from the government to the investor; the state only pays for verified outcomes"],
              ["Blended Finance", "Uses philanthropic grants to lower the risk for private equity"],
              ["Revenue-Based Financing", "Flexible repayments tied to future income, accommodating slow sales cycles"]
            ]
          }
        ]
      },
      {
        title: "Conclusion: The African EdTech 2030 Strategic Vision",
        content: [
          {
            type: "paragraph",
            text: "The AUDA-NEPAD 2030 Vision envisages a Pan-African EdTech transformation that leapfrogs legacy infrastructure. The implementation follows three phases:"
          },
          {
            type: "bullets",
            items: [
              "Foundation Building (2024-2026): Establishing continental policy frameworks and technical standards.",
              "System Integration (2026-2028): Scaling Digital Public Infrastructure (DPI). A key benefit for policymakers is the implementation of Single Sign-On (SSO), reducing the number of passwords teachers must manage across multiple platforms.",
              "Consolidation and Export (2029-2030): Positioning Africa as a global leader in mobile-first, locally relevant EdTech."
            ]
          },
          {
            type: "paragraph",
            text: "The Master Strategy: Success lies in bridging the gap through localized, curriculum-aligned, and evidence-based innovation. By focusing on \"Value Density\" and solving the real-world constraints of teachers and parents, the continent will not just participate in the future of education—it will define it through coordinated policy and local innovation."
          }
        ]
      }
    ]
  }
];

export default function ArticlesPage() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCloseModal = () => {
    setActiveArticle(null);
    setCurrentPage(1);
  };

  const getTotalPages = () => {
    if (!activeArticle) return 0;
    return activeArticle.sections.length;
  };

  const handleNextPage = () => {
    const totalPages = getTotalPages();
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderContent = (contentItem) => {
    switch (contentItem.type) {
      case 'paragraph':
        return (
          <p className="text-gray-300 leading-relaxed mb-4">
            {contentItem.text}
          </p>
        );
      case 'subheading':
        return (
          <h4 className="text-xl font-semibold text-white mt-6 mb-3">
            {contentItem.text}
          </h4>
        );
      case 'bullets':
        return (
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {contentItem.items.map((item, idx) => (
              <li key={idx} className="text-gray-300 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
      case 'table':
        return (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-400 to-amber-500">
                  {contentItem.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="border border-gray-700 px-4 py-3 text-left text-black font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contentItem.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={rowIdx % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#111111]'}
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-gray-700 px-4 py-3 text-gray-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#111111] to-[#111111] text-white py-16 px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Articles & Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into African EdTech strategy, innovation, and the future of education
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {articlesData.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => {
                setActiveArticle(article);
                setCurrentPage(1);
              }}
              className="bg-gradient-to-b from-[#1e1e1e] to-[#111111] rounded-xl p-6 cursor-pointer border border-gray-800 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Article Header */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm italic mb-4">
                  {article.subtitle}
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-semibold rounded-full"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More CTA */}
              <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                <BookOpen size={18} />
                <span>Read Article</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article Reading Modal */}
      {activeArticle && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleCloseModal}
        >
          <div
            className="bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#1a1a1a] w-full max-w-5xl h-[85vh] rounded-lg shadow-2xl relative border border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close Modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl transition-colors z-10"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="h-full overflow-y-auto px-8 py-8">
              {/* Article Header (shown on first page) */}
              {currentPage === 1 && (
                <div className="mb-8 pb-6 border-b border-gray-700">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                    {activeArticle.title}
                  </h1>
                  <p className="text-xl text-gray-400 italic mb-4">
                    {activeArticle.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{activeArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(activeArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{activeArticle.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-semibold rounded-full"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Section Content */}
              {activeArticle.sections[currentPage - 1] && (
                <div className="mb-20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-yellow-400 pb-3">
                    {activeArticle.sections[currentPage - 1].title}
                  </h2>
                  <div className="space-y-4">
                    {activeArticle.sections[currentPage - 1].content.map((contentItem, idx) => (
                      <div key={idx}>
                        {renderContent(contentItem)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111111] to-transparent p-6">
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  aria-label="Previous Section"
                  className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <MdKeyboardDoubleArrowLeft className="text-lg" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <span className="text-white text-sm font-semibold px-4 py-2 bg-[#1a1a1a] rounded-lg border border-gray-700">
                  Section {currentPage} / {getTotalPages()}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === getTotalPages()}
                  aria-label="Next Section"
                  className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Next</span>
                  <MdKeyboardDoubleArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
