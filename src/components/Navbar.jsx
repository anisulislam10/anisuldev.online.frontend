import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { useTranslation } from 'react-i18next';
import logo from './../../public/logo_anisuldev.online.png';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ur', label: 'اردو' },
  { code: 'ar', label: 'عربي' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), to: '/' },
    { name: t('nav.about'), to: '/about' },
    { name: t('nav.projects'), to: '/projects' },
    { name: t('nav.blogs'), to: '/blogs' },
    { name: t('nav.tools'), to: '/tools' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'var(--bg-nav-scrolled)' : 'var(--bg-nav)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid var(--border-subtle)'
            : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img
                src={logo}
                alt="AnisulDev Logo"
                className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: theme === 'light' ? 'invert(1) brightness(0.2)' : 'none' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                >
                  <span className="relative z-10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200"
                    style={{ color: isActive(item.to) ? 'var(--accent-indigo)' : 'var(--text-secondary)' }}>
                    {item.name}
                  </span>
                  {/* Active indicator */}
                  {isActive(item.to) && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: 'var(--gradient-brand)' }}
                    />
                  )}
                  {/* Hover bg */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'var(--bg-card-hover)' }} />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center gap-0.5 p-1 rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200"
                    style={{
                      background: language === lang.code ? 'var(--accent-indigo)' : 'transparent',
                      color: language === lang.code ? '#fff' : 'var(--text-muted)',
                    }}
                    aria-label={`Switch to ${lang.label}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl transition-all duration-300 border border-transparent hover:border-indigo-500/20 bg-gray-100/10 dark:bg-white/5 hover:bg-indigo-500/10 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm dark:shadow-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', color: '#10b981' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t('nav.available')}
              </div>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: 'var(--gradient-brand)',
                  boxShadow: 'var(--shadow-button)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-button)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Zap size={14} />
                {t('nav.hireMe')}
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 dark:text-slate-400"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: 'var(--text-secondary)', background: isMenuOpen ? 'var(--bg-card-hover)' : 'transparent' }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: isMenuOpen ? '500px' : '0px',
            opacity: isMenuOpen ? 1 : 0,
            transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
          }}
        >
          <div className="px-4 pb-6 pt-2"
            style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-nav-mobile)' }}>
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive(item.to) ? 'var(--accent-indigo)' : 'var(--text-secondary)',
                    background: isActive(item.to) ? 'var(--bg-card-hover)' : 'transparent',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-1.5 mb-4 p-1 rounded-lg w-fit" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200"
                  style={{
                    background: language === lang.code ? 'var(--accent-indigo)' : 'transparent',
                    color: language === lang.code ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)' }}
            >
              <Zap size={15} />
              {t('nav.getInTouch')}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
