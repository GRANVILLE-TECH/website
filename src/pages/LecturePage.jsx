import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Briefcase, BookOpen, ArrowRight, ArrowLeft,
  CheckCircle2, Calendar, MapPin, Clock, Users, Sparkles,
  ChevronRight, Mail, Phone, Building2, User
} from 'lucide-react';
import Nav from '../components/navbar';
import CircularTestimonials from '../components/ui/CircularTestimonials';
import logo from '../assets/Logo.svg';
import aletuImg from '../assets/innovations/aletu.webp';
import echoSignImg from '../assets/innovations/echosign.webp';
import timeSiftImg from '../assets/innovations/timeshift.jpg';
import { AiFillLinkedin, AiFillYoutube, AiFillMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────
// REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
export const EMAILJS_PUBLIC_KEY = 'H1TweB7817PmTZJIA';
export const EMAILJS_PRIVATE_KEY = '2oxNKx66gd9YnFALgRDHF'; // Not used in frontend emailjs.send()

// ─── Event Config ────────────────────────────────────────────────
const EVENT_DATE = new Date('2026-08-23T09:00:00+03:00');
const EVENT_TITLE = 'AI in the Real World';
const EVENT_SUBTITLE = 'How Professionals Use AI Every Day';
const EVENT_LOCATION = 'Kampala, Uganda';
const EVENT_TIME = '9:00 AM — 4:00 PM EAT';

// ─── Interest Topics (practical / everyday AI) ───────────────────
const INTEREST_TOPICS = [
  { id: 'writing', label: 'AI for Writing & Communication', icon: '✍️' },
  { id: 'data', label: 'AI for Data Analysis & Reporting', icon: '📊' },
  { id: 'design', label: 'AI for Creative Design', icon: '🎨' },
  { id: 'healthcare', label: 'AI in Healthcare & Medicine', icon: '🏥' },
  { id: 'business', label: 'AI for Business & Entrepreneurship', icon: '💼' },
  { id: 'software', label: 'AI in Software Development', icon: '💻' },
  { id: 'research', label: 'AI for Research & Academia', icon: '🔬' },
  { id: 'finance', label: 'AI in Finance & Accounting', icon: '📈' },
  { id: 'marketing', label: 'AI in Marketing & Social Media', icon: '📱' },
  { id: 'automation', label: 'Automating Repetitive Tasks with AI', icon: '⚙️' },
  { id: 'education', label: 'AI in Education & Learning', icon: '📚' },
  { id: 'career', label: 'Building a Career in Tech', icon: '🚀' },
];

// ─── Initiatives Data ────────────────────────────────────────────
const INITIATIVES = [
  {
    quote: "ALETU is our flagship adaptive learning platform. It revolutionizes education by delivering personalized, mastery-based instruction aligned with local curriculums to secondary schools.",
    name: "ALETU LMS",
    designation: "AI in Education",
    src: aletuImg
  },
  {
    quote: "EchoSign bridges the communication gap by translating sign language into natural speech in real-time, empowering users with inclusive and accessible verbal communication.",
    name: "EchoSign",
    designation: "AI for Accessibility",
    src: echoSignImg
  },
  {
    quote: "TimeSift uses advanced AI to sift through hours of CCTV footage, generating concise daily highlight reels. It saves time while enhancing your peace of mind.",
    name: "TimeSift",
    designation: "AI in Security",
    src: timeSiftImg
  }
];

// ─── Role Definitions ────────────────────────────────────────────
const ROLES = [
  {
    id: 'student',
    label: 'Student',
    description: 'Currently enrolled in school or university',
    icon: GraduationCap,
    color: 'from-sky-500 to-cyan-400',
    orgLabel: 'School / University',
    roleLabel: 'Year / Program',
  },
  {
    id: 'teacher',
    label: 'Teacher / Educator',
    description: 'Working in education or academia',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-400',
    orgLabel: 'School / Institution',
    roleLabel: 'Subject / Department',
  },
  {
    id: 'professional',
    label: 'Professional',
    description: 'Working in industry or business',
    icon: Briefcase,
    color: 'from-violet-500 to-purple-400',
    orgLabel: 'Company / Organization',
    roleLabel: 'Job Title',
  },
];

// ─── Countdown Hook ──────────────────────────────────────────────
function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

// ─── Countdown Unit ──────────────────────────────────────────────
function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl sm:text-3xl font-black text-white tabular-nums"
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="absolute -top-px left-2 right-2 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      </div>
      <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] font-bold mt-2">
        {label}
      </span>
    </div>
  );
}

// ─── Step Indicator ──────────────────────────────────────────────
function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <React.Fragment key={i}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
              i < current
                ? 'bg-amber-400 text-black'
                : i === current
                ? 'bg-white/10 text-white border-2 border-amber-400'
                : 'bg-white/5 text-white/30 border border-white/10'
            }`}
          >
            {i < current ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
          </div>
          {i < total - 1 && (
            <div
              className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                i < current ? 'bg-amber-400' : 'bg-white/10'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Floating Particles ──────────────────────────────────────────
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═════════════════════════════════════════════════════════════════
export default function LecturePage() {
  const countdown = useCountdown(EVENT_DATE);
  const [step, setStep] = useState(0); // 0=role, 1=about, 2=interests
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    roleTitle: '',
  });
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [hopeToLearn, setHopeToLearn] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Public Lecture — Granville-Tech';
  }, []);

  // Scroll to form
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Validate step
  const validateStep = () => {
    const newErrors = {};
    if (step === 0 && !selectedRole) {
      newErrors.role = 'Please select your role';
    }
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Please enter a valid email';
      if (formData.phone && !/^\+?[\d\s-]{10,15}$/.test(formData.phone))
        newErrors.phone = 'Please enter a valid phone number';
    }
    if (step === 2) {
      if (selectedInterests.length === 0)
        newErrors.interests = 'Please select at least one topic';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    if (step < 2) setStep(step + 1);
    else handleSubmit();
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const toggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const templateParams = {
        role: selectedRole,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || 'N/A',
        organization: formData.organization,
        roleTitle: formData.roleTitle,
        interests: selectedInterests.map(id => INTEREST_TOPICS.find(t => t.id === id)?.label || id).join(', '),
        hopeToLearn: hopeToLearn || 'N/A',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Lecture Registration Submitted via EmailJS:', templateParams);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form via EmailJS:', error);
      setSubmitError('Failed to submit registration. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleConfig = ROLES.find((r) => r.id === selectedRole);

  // ─── Animation Variants ──────────────────────────────────────
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Nav />

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a1a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(14,165,233,0.08),transparent_60%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <FloatingParticles />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          {/* Event badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">
              Public Lecture — August 23, 2026
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.95] tracking-tight"
          >
            <span className="block text-white">{EVENT_TITLE}</span>
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #0ea5e9 50%, #f59e0b 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s ease-in-out infinite',
              }}
            >
              {EVENT_SUBTITLE}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Join industry professionals sharing how they use AI in their everyday work — 
            from writing and design to healthcare and finance. Discover what your future career 
            could look like with AI as your co-pilot.
          </motion.p>

          {/* Event Details Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
          >
            {[
              { icon: Calendar, text: 'August 23, 2026' },
              { icon: Clock, text: EVENT_TIME },
              { icon: MapPin, text: EVENT_LOCATION },
              { icon: Users, text: 'Teachers · Students · Professionals' },
            ].map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <item.icon className="w-4 h-4 text-amber-400/80" />
                <span className="text-sm text-white/70 font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-xs text-white/30 uppercase tracking-[0.3em] font-bold mb-4">
              Event starts in
            </p>
            <div className="flex justify-center gap-3 sm:gap-5">
              <CountdownUnit value={countdown.days} label="Days" />
              <div className="flex items-center text-white/20 text-2xl font-light self-start mt-5">:</div>
              <CountdownUnit value={countdown.hours} label="Hours" />
              <div className="flex items-center text-white/20 text-2xl font-light self-start mt-5">:</div>
              <CountdownUnit value={countdown.minutes} label="Min" />
              <div className="flex items-center text-white/20 text-2xl font-light self-start mt-5">:</div>
              <CountdownUnit value={countdown.seconds} label="Sec" />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black text-sm uppercase tracking-widest rounded-full hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now — It's Free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ═══ OUR INITIATIVES ════════════════════════════════════════ */}
      <section className="relative py-24 px-6 bg-[#060507]">
        <div className="max-w-5xl mx-auto mb-16 text-center">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            Our Initiatives
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Discover how Granville-Tech applies artificial intelligence in the real world to solve everyday challenges and empower communities.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center relative w-full">
          <CircularTestimonials
            testimonials={INITIATIVES}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#e1e1e1",
              testimony: "#f1f1f7",
              arrowBackground: "#1a1a1a",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#f59e0b",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "20px",
            }}
          />
        </div>
      </section>

      {/* ═══ REGISTRATION FORM ═══════════════════════════════════════ */}
      <section id="registration-form" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080810] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,158,11,0.06),transparent_60%)]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              {submitted ? 'You\'re In!' : 'Reserve Your Spot'}
            </h2>
            {!submitted && (
              <p className="text-white/40 text-base">
                Complete the form below to register — it only takes a minute.
              </p>
            )}
          </motion.div>

          {/* ─── Success State ──────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                {/* Success animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/30"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-white mb-3"
                >
                  Registration Confirmed!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/50 max-w-md mx-auto mb-4"
                >
                  Thank you, <span className="text-amber-400 font-semibold">{formData.fullName}</span>!
                  We've received your registration for the public lecture.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/30 text-sm"
                >
                  A confirmation will be sent to <span className="text-white/60">{formData.email}</span>
                </motion.p>

                {/* Decorative burst */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: ['#f59e0b', '#0ea5e9', '#10b981', '#f43f5e', '#a855f7'][i % 5],
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((i / 12) * Math.PI * 2) * 120,
                      y: Math.sin((i / 12) * Math.PI * 2) * 120,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  />
                ))}
              </motion.div>
            ) : (
              /* ─── Form Steps ──────────────────────────────────────── */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
              >
                <StepIndicator current={step} total={3} />

                <AnimatePresence mode="wait" custom={step}>
                  {/* ── Step 0: Role Selection ───────────────────────── */}
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      custom={1}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-1">What describes you best?</h3>
                      <p className="text-white/40 text-sm mb-6">
                        This helps us tailor the experience for you.
                      </p>

                      <div className="grid gap-4">
                        {ROLES.map((role) => {
                          const Icon = role.icon;
                          const selected = selectedRole === role.id;
                          return (
                            <motion.button
                              key={role.id}
                              onClick={() => {
                                setSelectedRole(role.id);
                                setErrors({});
                              }}
                              className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
                                selected
                                  ? 'border-amber-400 bg-amber-400/5'
                                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                              }`}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${role.color} ${
                                    selected ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'
                                  } transition-opacity`}
                                >
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-white font-bold text-base">{role.label}</p>
                                  <p className="text-white/40 text-sm">{role.description}</p>
                                </div>
                                <div
                                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                    selected
                                      ? 'border-amber-400 bg-amber-400'
                                      : 'border-white/20'
                                  }`}
                                >
                                  {selected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-2 h-2 rounded-full bg-black"
                                    />
                                  )}
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {errors.role && (
                        <p className="text-red-400 text-sm mt-3">{errors.role}</p>
                      )}
                    </motion.div>
                  )}

                  {/* ── Step 1: About You ─────────────────────────────── */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      custom={1}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-1">Tell us about yourself</h3>
                      <p className="text-white/40 text-sm mb-6">
                        So we can personalize your experience at the lecture.
                      </p>

                      <div className="space-y-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-white/60 text-sm font-semibold mb-2">
                            <User className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                            placeholder="e.g. John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.07] transition-all duration-300"
                          />
                          {errors.fullName && (
                            <p className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-white/60 text-sm font-semibold mb-2">
                            <Mail className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.07] transition-all duration-300"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-white/60 text-sm font-semibold mb-2">
                            <Phone className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                            Phone Number <span className="text-white/20">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+256 700 000 000"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.07] transition-all duration-300"
                          />
                          {errors.phone && (
                            <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                          )}
                        </div>

                        {/* Organization — label adapts to role */}
                        <div>
                          <label className="block text-white/60 text-sm font-semibold mb-2">
                            <Building2 className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                            {roleConfig?.orgLabel || 'Organization'}
                          </label>
                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({ ...formData, organization: e.target.value })
                            }
                            placeholder={
                              selectedRole === 'student'
                                ? 'e.g. Makerere University'
                                : selectedRole === 'teacher'
                                ? 'e.g. Kampala International School'
                                : 'e.g. Granville-Tech'
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.07] transition-all duration-300"
                          />
                        </div>

                        {/* Role / Title — label adapts */}
                        <div>
                          <label className="block text-white/60 text-sm font-semibold mb-2">
                            {roleConfig?.roleLabel || 'Title'}
                          </label>
                          <input
                            type="text"
                            value={formData.roleTitle}
                            onChange={(e) =>
                              setFormData({ ...formData, roleTitle: e.target.value })
                            }
                            placeholder={
                              selectedRole === 'student'
                                ? 'e.g. Year 3, Computer Science'
                                : selectedRole === 'teacher'
                                ? 'e.g. Physics, Senior School'
                                : 'e.g. Software Engineer'
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.07] transition-all duration-300"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ── Step 2: Interests ─────────────────────────────── */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      custom={1}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-1">What interests you most?</h3>
                      <p className="text-white/40 text-sm mb-6">
                        Select the topics you'd love to learn about from professionals who use AI daily.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {INTEREST_TOPICS.map((topic) => {
                          const selected = selectedInterests.includes(topic.id);
                          return (
                            <motion.button
                              key={topic.id}
                              onClick={() => toggleInterest(topic.id)}
                              className={`text-left p-3.5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                                selected
                                  ? 'border-amber-400/60 bg-amber-400/10'
                                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                              }`}
                              whileTap={{ scale: 0.97 }}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{topic.icon}</span>
                                <span
                                  className={`text-sm font-medium transition-colors ${
                                    selected ? 'text-amber-300' : 'text-white/60 group-hover:text-white/80'
                                  }`}
                                >
                                  {topic.label}
                                </span>
                                {selected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="ml-auto"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                  </motion.div>
                                )}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {errors.interests && (
                        <p className="text-red-400 text-sm mb-4">{errors.interests}</p>
                      )}

                      {submitError && (
                        <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          {submitError}
                        </div>
                      )}

                      {/* Free text */}
                      <div>
                        <label className="block text-white/60 text-sm font-semibold mb-2">
                          What do you hope to learn at this lecture?
                        </label>
                        <textarea
                          value={hopeToLearn}
                          onChange={(e) => setHopeToLearn(e.target.value)}
                          rows={3}
                          placeholder="e.g. I want to know how AI can help me in my daily work as a teacher..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Navigation Buttons ──────────────────────────────── */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                  {step > 0 ? (
                    <button
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-white/50 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <motion.button
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-black uppercase tracking-wider rounded-full hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        {step === 2 ? 'Submit Registration' : 'Continue'}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════════════ */}
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
            <p>© {new Date().getFullYear()} Granville-Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Shimmer keyframe for gradient text */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
