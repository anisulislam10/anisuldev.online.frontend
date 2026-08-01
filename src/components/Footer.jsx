import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './../../public/anisuldev.online_logo_light.png';
import {
  Heart, Github, Linkedin, Twitter, Mail, ArrowUp,
  Code, MapPin, Phone, Zap
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t('nav.home'), to: '/' },
    { name: t('nav.about'), to: '/about' },
    { name: t('nav.projects'), to: '/projects' },
    { name: t('nav.blogs'), to: '/blogs' },
    { name: t('nav.contact'), to: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={17} />, href: 'https://github.com/anisulislam10', label: 'GitHub' },
    { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/ianisulislam', label: 'LinkedIn' },
    { icon: <Twitter size={17} />, href: 'https://twitter.com/ianisulislam', label: 'Twitter' },
    { icon: <Mail size={17} />, href: 'mailto:info@anisuldev.online', label: 'Email' },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Orbs */}
      <div className="orb orb-indigo w-[400px] h-[400px] bottom-0 right-0 opacity-10" />
      <div className="orb orb-purple w-[300px] h-[300px] top-0 left-0 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo & Brand */}
          <Link to="/" className="inline-block">
            <img src={logo} alt="AnisulDev" className="h-7 w-auto opacity-85 hover:opacity-100 transition-opacity" />
          </Link>

          <p className="text-sm max-w-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('footer.tagline')}
          </p>

          {/* Minimal Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="transition-colors hover:text-indigo-500"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                  e.currentTarget.style.color = 'var(--accent-indigo)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Bottom Copyright & Scroll to Top */}
          <div className="pt-6 w-full border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
            <div>
              &copy; {currentYear} Anisul Islam. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5">
              <Code size={13} />
              {t('footer.builtWith')}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs transition-colors hover:text-indigo-500"
              style={{ color: 'var(--text-muted)' }}
            >
              <ArrowUp size={13} />
              {t('footer.top')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;