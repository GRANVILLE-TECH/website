import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  VideoIcon,
  UsersIcon,
  ClipboardCheckIcon,
  MessageSquareIcon,
  DownloadIcon,
  SmartphoneIcon,
  AwardIcon,
  ArrowRightIcon,
  TrophyIcon,
  FlameIcon,
  SparklesIcon,
  StarIcon,
  RocketIcon,
  HeartIcon,
  ZapIcon,
  TargetIcon,
  BrainIcon,
  DiamondIcon,
  GiftIcon,
  ShieldCheckIcon,
  CrownIcon,
  LightbulbIcon,
  MedalIcon } from
'lucide-react';
import MainLayout from '../layouts/MainLayout';
const UserRoleCard = ({
  title,
  description,
  icon: Icon,
  features,
  bgColor,
  textColor,
  role








}: {title: string;description: string;icon: any;features: string[];bgColor: string;textColor: string;role: 'student' | 'teacher' | 'admin';}) =>
<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 relative overflow-hidden">
    <div
    className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-bl-full -mr-16 -mt-16`}>
  </div>
    <div className="relative">
      <div className={`${bgColor} p-3 inline-block rounded-xl mb-4`}>
        <Icon className={`h-8 w-8 ${textColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) =>
      <li key={index} className="flex items-center text-gray-700">
            <div className={`w-2 h-2 ${textColor} rounded-full mr-2`}></div>
            {feature}
          </li>
      )}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
        to={`/${role}/login`}
        className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-white ${bgColor.replace('bg-', 'bg-').replace('-50', '-600')} hover:${bgColor.replace('bg-', 'bg-').replace('-50', '-700')} transition-colors duration-200`}>
        
          Login
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <Link
        to={`/${role}/signup`}
        className={`inline-flex items-center justify-center px-4 py-2 rounded-md border-2 ${textColor} border-current hover:bg-gray-50 transition-colors duration-200`}>
        
          Sign Up
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>;

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[url('https://assets.website-files.com/631d911fd8877e6b9ec1a9fb/631d911fd8877e42f4c1aa0d_pattern-dark.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative space-y-8">
              <div className="flex items-center gap-3 animate-fade-in">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 shadow-glow">
                  <FlameIcon className="h-5 w-5 text-orange-400 animate-pulse" />
                  <span className="ml-2 text-sm font-medium">
                    7 Day Streak!
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 shadow-glow">
                  <SparklesIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-sm font-medium">150 XP Today</span>
                </div>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Learn, Achieve,{' '}
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      Level Up
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 transform -skew-x-12"></span>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Transform your learning journey into an exciting adventure.
                  Earn rewards, unlock achievements, and compete with friends
                  while mastering the Ugandan curriculum.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="group relative px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-2xl">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Journey
                    <RocketIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="#rewards"
                  className="group px-8 py-4 bg-indigo-700/50 backdrop-blur-sm border border-indigo-500/30 text-white font-semibold rounded-lg hover:bg-indigo-600/50 transition-all duration-200 flex items-center justify-center">
                  
                  <TrophyIcon className="mr-2 h-5 w-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  View Rewards
                </a>
              </div>
              <div className="flex items-center gap-4 animate-fade-in-up">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) =>
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-indigo-600 bg-white/10 backdrop-blur-sm flex items-center justify-center transform hover:scale-110 transition-transform">
                    
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-indigo-600 flex items-center justify-center">
                        <span className="text-[10px] font-bold">3</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Recent Achievers</p>
                  <p className="text-gray-300">Join them on the leaderboard!</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-xl blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 p-1 animate-pulse">
                      <div className="w-full h-full rounded-full bg-indigo-900 flex items-center justify-center">
                        <span className="text-lg font-bold">L5</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Math Master</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <FlameIcon className="h-4 w-4 text-orange-400" />
                        <span>7 day streak</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                      <HeartIcon className="h-4 w-4 text-red-400" />
                      <span className="ml-1 text-sm">3</span>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                      <ZapIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm">450</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Current Chapter Progress
                      </span>
                      <span className="text-sm font-bold">75%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transform origin-left transition-all duration-1000"
                        style={{
                          width: '75%'
                        }} />
                      
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                    {
                      icon: TargetIcon,
                      label: 'Goals',
                      value: '8/10'
                    },
                    {
                      icon: BrainIcon,
                      label: 'Skills',
                      value: '12'
                    },
                    {
                      icon: TrophyIcon,
                      label: 'Rewards',
                      value: '5'
                    }].
                    map((item, i) =>
                    <div
                      key={i}
                      className="bg-white/5 rounded-lg p-3 text-center transform hover:scale-105 transition-all duration-200">
                      
                        <item.icon className="h-6 w-6 mx-auto mb-1 text-yellow-400" />
                        <div className="text-xs">{item.label}</div>
                        <div className="font-bold">{item.value}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl mb-4">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                1,200+
              </p>
              <p className="text-gray-600 mt-1">Active Learners</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                50K+
              </p>
              <p className="text-gray-600 mt-1">Achievements Earned</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl mb-4">
                <FlameIcon className="h-8 w-8 text-white" />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                25K+
              </p>
              <p className="text-gray-600 mt-1">Learning Streaks</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                1M+
              </p>
              <p className="text-gray-600 mt-1">XP Points Earned</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50" id="user-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Role in Education
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're learning, teaching, or managing, EduConnect
              provides the tools you need to succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <UserRoleCard
              title="Students & Learners"
              description="Access curriculum-aligned content through multiple channels. Join live classes, watch recorded lessons, take quizzes, and study offline."
              icon={BookOpenIcon}
              features={[
              'Interactive live classes',
              'Downloadable resources',
              'Progress tracking']
              }
              bgColor="bg-indigo-50"
              textColor="text-indigo-600"
              role="student" />
            
            <UserRoleCard
              title="Teachers & Educators"
              description="Create and share high-quality educational content, host live classes, build interactive assessments, and earn from your expertise."
              icon={UsersIcon}
              features={[
              'Course creation tools',
              'Live teaching platform',
              'Earnings dashboard']
              }
              bgColor="bg-green-50"
              textColor="text-green-600"
              role="teacher" />
            
            <UserRoleCard
              title="Administrators"
              description="Manage content quality, oversee user access, process payments, and build partnerships with schools and telecom providers."
              icon={ClipboardCheckIcon}
              features={[
              'Content moderation',
              'User management',
              'Analytics dashboard']
              }
              bgColor="bg-purple-50"
              textColor="text-purple-600"
              role="admin" />
            
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
              <SparklesIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Unlock Amazing Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Level up your learning journey with our powerful features. Each
              feature unlocks new achievements and rewards!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex items-center bg-indigo-100 rounded-full px-3 py-1">
                  <StarIcon className="h-4 w-4 text-indigo-600 mr-1" />
                  <span className="text-xs font-medium text-indigo-600">
                    +100 XP
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <VideoIcon className="h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Live Interactive Classes
                </h3>
                <p className="text-gray-600 mb-4">
                  Join scheduled live sessions with real-time Q&A and
                  collaborative discussions.
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) =>
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center">
                      
                        <CrownIcon className="h-3 w-3 text-indigo-600" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    128 students online
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <MedalIcon className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-gray-600">Level 3 Unlocked</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Join Now
                    <RocketIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex items-center bg-green-100 rounded-full px-3 py-1">
                  <StarIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-medium text-green-600">
                    +75 XP
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <LightbulbIcon className="h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 bg-amber-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Smart Learning Resources
                </h3>
                <p className="text-gray-600 mb-4">
                  Access AI-powered study materials and adaptive learning paths.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[75%] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-2 text-xs text-gray-500">
                      75% Mastered
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <GiftIcon className="h-4 w-4 text-amber-500" />
                    <span className="text-gray-600">4 Rewards Available</span>
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-medium flex items-center">
                    Explore
                    <ZapIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex items-center bg-purple-100 rounded-full px-3 py-1">
                  <StarIcon className="h-4 w-4 text-purple-600 mr-1" />
                  <span className="text-xs font-medium text-purple-600">
                    +150 XP
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <TrophyIcon className="h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 bg-purple-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  Achievement System
                </h3>
                <p className="text-gray-600 mb-4">
                  Earn badges, certificates, and unlock special rewards as you
                  progress.
                </p>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) =>
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    
                      <DiamondIcon className="h-4 w-4 text-purple-600" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <ShieldCheckIcon className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-600">Expert Level</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                    View Achievements
                    <SparklesIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex items-center bg-indigo-100 rounded-full px-3 py-1">
                  <StarIcon className="h-4 w-4 text-indigo-600 mr-1" />
                  <span className="text-xs font-medium text-indigo-600">
                    +100 XP
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <VideoIcon className="h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Live Interactive Classes
                </h3>
                <p className="text-gray-600 mb-4">
                  Join scheduled live sessions with real-time Q&A and
                  collaborative discussions.
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) =>
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center">
                      
                        <CrownIcon className="h-3 w-3 text-indigo-600" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    128 students online
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <MedalIcon className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-gray-600">Level 3 Unlocked</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Join Now
                    <RocketIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex items-center bg-green-100 rounded-full px-3 py-1">
                  <StarIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-medium text-green-600">
                    +75 XP
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <LightbulbIcon className="h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 bg-amber-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Smart Learning Resources
                </h3>
                <p className="text-gray-600 mb-4">
                  Access AI-powered study materials and adaptive learning paths.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[75%] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-2 text-xs text-gray-500">
                      75% Mastered
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <GiftIcon className="h-4 w-4 text-amber-500" />
                    <span className="text-gray-600">4 Rewards Available</span>
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-medium flex items-center">
                    Explore
                    <ZapIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex items-center bg-purple-100 rounded-full px-3 py-1">
                  <StarIcon className="h-4 w-4 text-purple-600 mr-1" />
                  <span className="text-xs font-medium text-purple-600">
                    +150 XP
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <TrophyIcon className="h-8 w-8" />
                </div>
                <div className="absolute -top-1 -right-1 bg-purple-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  Achievement System
                </h3>
                <p className="text-gray-600 mb-4">
                  Earn badges, certificates, and unlock special rewards as you
                  progress.
                </p>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) =>
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    
                      <DiamondIcon className="h-4 w-4 text-purple-600" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <ShieldCheckIcon className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-600">Expert Level</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                    View Achievements
                    <SparklesIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students and teachers already using EduConnect to
            achieve their educational goals.
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100">
            
            Get Started Today
          </Link>
        </div>
      </section>
    </MainLayout>);

};
export default LandingPage;