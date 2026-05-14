import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon, VideoIcon, UsersIcon, ClipboardCheckIcon, MessageSquareIcon,
  DownloadIcon, AwardIcon, ArrowRightIcon, TrophyIcon, FlameIcon,
  StarIcon, ZapIcon, BrainIcon, LockIcon, ShieldIcon
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import ComingSoonModal from '../components/ComingSoonModal';

// Role card for Student (functional)
const StudentRoleCard = ({ onLogin }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 relative overflow-hidden ring-2 ring-indigo-500">
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16" />
    <div className="relative">
      <div className="absolute -top-2 -right-2">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-bold">
          ✓ Available Now
        </span>
      </div>
      <div className="bg-indigo-50 p-3 inline-block rounded-xl mb-4">
        <BookOpenIcon className="h-8 w-8 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">For Students</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Access curated lessons, join live classes, and track your mastery progress with our gamified learning system.
      </p>
      <ul className="space-y-3 mb-6">
        {['Gamified learning with XP & streaks', 'Live & recorded classes', 'Mastery-based progression', 'Q&A Forum & peer support', 'Offline content access'].map((f, i) => (
          <li key={i} className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/aletu/student/login" className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors font-medium">
          Login <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <Link to="/aletu/student/signup" className="inline-flex items-center justify-center px-4 py-2 rounded-md border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors font-medium">
          Sign Up <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
);

// Role card for locked roles (Teacher / Admin)
const LockedRoleCard = ({ title, desc, icon: Icon, bgColor, textColor, features, onShowModal }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden opacity-90">
    <div className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-bl-full -mr-16 -mt-16`} />
    {/* Frosted lock overlay */}
    <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center rounded-xl">
      <div className="bg-white rounded-2xl shadow-lg px-6 py-5 text-center max-w-xs">
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
          <LockIcon className="h-5 w-5 text-gray-500" />
        </div>
        <p className="font-semibold text-gray-800 mb-1">Coming in the Full Release</p>
        <p className="text-xs text-gray-500 mb-4">The {title} portal will be available when ALETU launches.</p>
        <button
          onClick={onShowModal}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Get Notified
        </button>
      </div>
    </div>
    {/* Card content (blurred behind overlay) */}
    <div className="relative">
      <div className={`${bgColor} p-3 inline-block rounded-xl mb-4`}>
        <Icon className={`h-8 w-8 ${textColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-gray-700">
            <div className={`w-2 h-2 ${textColor.replace('text-', 'bg-')} rounded-full mr-2`} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const features = [
  { icon: VideoIcon, title: 'Live Classes', desc: 'Join real-time sessions with expert teachers and ask questions live.' },
  { icon: BrainIcon, title: 'Mastery Learning', desc: 'Adaptive content that adjusts to your pace and ensures true understanding.' },
  { icon: ClipboardCheckIcon, title: 'Smart Quizzes', desc: 'Practice with curriculum-aligned quizzes and get instant feedback.' },
  { icon: MessageSquareIcon, title: 'Q&A Forum', desc: 'Ask questions, help peers, and build a collaborative study community.' },
  { icon: DownloadIcon, title: 'Offline Access', desc: 'Download lessons and study even without an internet connection.' },
  { icon: TrophyIcon, title: 'Gamification', desc: 'Earn XP, maintain streaks, unlock achievements, and top leaderboards.' },
];

const LandingPage = () => {
  const [modalRole, setModalRole] = useState(null);

  return (
    <MainLayout>
      {modalRole && <ComingSoonModal role={modalRole} onClose={() => setModalRole(null)} />}

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
                  <FlameIcon className="h-5 w-5 text-orange-400 animate-pulse" />
                  <span className="ml-2 text-sm font-medium">7 Day Streak!</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <span className="ml-2 text-sm font-medium">1,250 XP</span>
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Learn, Achieve,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Level Up</span>
                </h1>
                <p className="text-lg text-indigo-200 leading-relaxed max-w-lg">
                  ALETU is Uganda's gamified learning platform. Join thousands of S1–S6 students mastering curriculum subjects through live classes, smart quizzes, and AI-powered mastery modules.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/aletu/student/login"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors shadow-lg"
                >
                  <ZapIcon className="h-5 w-5" />
                  Start Learning Free
                </Link>
                <button
                  onClick={() => setModalRole('teacher')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-colors"
                >
                  <LockIcon className="h-4 w-4 text-white/70" />
                  For Teachers
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-indigo-300 text-sm">
                <span className="flex items-center gap-1.5"><UsersIcon className="h-4 w-4" /> 1,200+ Students</span>
                <span className="flex items-center gap-1.5"><BookOpenIcon className="h-4 w-4" /> 150+ Lessons</span>
                <span className="flex items-center gap-1.5"><TrophyIcon className="h-4 w-4" /> S1–S6 Curriculum</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden md:block">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                  <span className="text-xs text-indigo-300 ml-2">Student Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-400/30 flex items-center justify-center">
                      <FlameIcon className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">12 Day Streak 🔥</p>
                      <p className="text-xs text-indigo-300">Keep it up!</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-sm font-bold text-amber-400">+50 XP</p>
                    </div>
                  </div>
                  {[{ subject: 'Mathematics', progress: 72, color: 'bg-indigo-400' }, { subject: 'Biology', progress: 88, color: 'bg-green-400' }, { subject: 'Chemistry', progress: 45, color: 'bg-amber-400' }].map((s) => (
                    <div key={s.subject} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold">{s.subject[0]}</div>
                      <div className="flex-1">
                        <p className="text-xs font-medium mb-1">{s.subject}</p>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.progress}%` }} />
                        </div>
                      </div>
                      <span className="text-xs text-indigo-300">{s.progress}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Role</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ALETU is built for the whole learning community. Explore the Student demo today, with Teacher and Admin tools launching in the full release.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StudentRoleCard />
            <LockedRoleCard
              title="For Teachers"
              desc="Create and deliver engaging content, manage classes, and track student performance in real time."
              icon={UsersIcon}
              bgColor="bg-green-50"
              textColor="text-green-600"
              features={['Create lessons & quizzes', 'Run live sessions', 'Track student mastery', 'Earn from your content']}
              onShowModal={() => setModalRole('teacher')}
            />
            <LockedRoleCard
              title="For Administrators"
              desc="Oversee the platform, manage users, approve content, and monitor institutional analytics."
              icon={ShieldIcon}
              bgColor="bg-purple-50"
              textColor="text-purple-600"
              features={['Content moderation', 'Teacher verification', 'Platform analytics', 'Payment management']}
              onShowModal={() => setModalRole('admin')}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Students Love ALETU</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to excel in Uganda's secondary school curriculum, in one place.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="p-3 bg-indigo-50 inline-block rounded-xl mb-4">
                  <f.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">Join thousands of Ugandan students already improving their grades with ALETU.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/aletu/student/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors">
              <ZapIcon className="h-5 w-5" /> Create Free Account
            </Link>
            <Link to="/aletu/student/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LandingPage;
