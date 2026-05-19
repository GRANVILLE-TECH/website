import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Linkedin, Youtube, Mail, Globe, ChevronDown } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'ar', label: 'العربية' },
    { code: 'zh', label: '中文' }
  ];

  const currentLanguageCode = i18n.language ? i18n.language.split('-')[0] : 'en';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode) || languages[0];

  // Scroll handler for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the document title based on the current hash
  useEffect(() => {
    const handleTitle = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (path === '/alumni') {
        document.title = `${t('nav.alumni')} - Granville-Tech`;
      } else if (path === '/articles') {
        document.title = `Articles - Granville-Tech`;
      } else if (path === '/innovations' && !hash) {
        document.title = `${t('nav.innovations')} - Granville-Tech`;
      } else if (hash === '#home' || (path === '/' && !hash)) {
        document.title = `${t('nav.home')} - Granville-Tech`;
      } else if (hash) {
        const title = hash.replace('#', '').charAt(0).toUpperCase() + hash.slice(1);
        document.title = `${title} - Granville-Tech`;
      } else {
        document.title = 'Granville-Tech';
      }
    };

    handleTitle();
    window.addEventListener('hashchange', handleTitle);
    return () => window.removeEventListener('hashchange', handleTitle);
  }, [location, t]);

  useEffect(() => {
    if (!langDropdownOpen) return;
    const closeDropdown = () => setLangDropdownOpen(false);
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, [langDropdownOpen]);

  const navItems = [
    { name: t('nav.home'), href: '/#home' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.innovations'), href: '/#innovations' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.booking'), href: '/#booking' },
    { name: t('nav.resources'), href: '/#resources' },
    { name: t('nav.alumni'), href: '/alumni' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/granvilletek/' },
    { icon: Youtube, href: 'http://www.youtube.com/@granvilletech' },
    { icon: Mail, href: 'mailto:info@granvilletech.co' },
  ];

  const isActive = (href) => {
    if (href === '/#home' && location.pathname === '/' && !window.location.hash) {
      return true;
    }
    if (href.startsWith('/#')) {
      return location.pathname === '/' && window.location.hash === href.replace('/', '');
    }
    return location.pathname === href;
  };

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Logo Section */}
        <Link to="/#home" className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 10 }}
          >
            <img src={logo} alt="Granville-Tech Logo" className="h-10 w-auto" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.15em] text-white group-hover:text-amber-400 transition-colors uppercase font-serif">
              Granville
            </span>
            <span className="text-[10px] tracking-[0.3em] text-white/40 group-hover:text-amber-400/60 transition-colors uppercase">
              Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`text-sm font-bold tracking-widest uppercase relative group transition-colors duration-300 ${
                    isActive(item.href) ? 'text-amber-400' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-amber-400 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Dropdown Selector */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLangDropdownOpen(!langDropdownOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-amber-400/50 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95"
            >
              <Globe className="h-3.5 w-3.5 text-amber-400" />
              <span>{currentLanguage.code}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 py-1.5 w-32 bg-black/90 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl z-[120]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 block ${
                        currentLanguage.code === lang.code
                          ? 'text-amber-400 bg-white/5'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/#contact"
            className="px-6 py-2.5 bg-white text-black text-xs font-black tracking-widest uppercase rounded-full hover:bg-amber-400 transition-all duration-300 shadow-xl active:scale-95"
          >
            {t('nav.contact')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[110]" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[105] lg:hidden flex flex-col justify-center px-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.1),transparent)]" />
            
            <div className="relative z-10 flex flex-col h-full py-20">
              <div className="flex justify-between items-center mb-8">
                <span className="text-amber-400 text-[10px] tracking-[0.5em] font-black uppercase">
                  {t('nav.navigationTitle')}
                </span>
                
                {/* Mobile Language Switcher */}
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => i18n.changeLanguage(lang.code)}
                      className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider border rounded transition-all ${
                        currentLanguage.code === lang.code
                          ? 'border-amber-400 text-amber-400 bg-amber-400/10'
                          : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
              
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="text-4xl sm:text-5xl font-black text-white hover:text-amber-400 transition-colors flex items-center gap-4 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                      <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-400" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-8">
                <div className="flex gap-6">
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.href} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-white/40 text-xs tracking-widest uppercase">{t('nav.office')}</p>
                  <p className="text-white text-lg font-bold">{t('nav.location')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
}
