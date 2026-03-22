import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../public/anisuldev.online_logo_light.png';
import {
  Heart, Github, Linkedin, Twitter, Mail, ArrowUp,
  Code, Coffee, MapPin, Phone, Send, Zap,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Blogs', to: '/blogs' },
    { name: 'Tools', to: '/tools' },
    { name: 'Contact', to: '/contact' },
  ];

  const services = [
    { name: 'React Native Apps', emoji: '📱' },
    { name: 'Web Applications', emoji: '🌐' },
    { name: 'Backend APIs', emoji: '⚙️' },
    { name: 'Database Design', emoji: '🗃️' },
    { name: 'VPS Deployment', emoji: '🚀' },
    { name: 'Vercel Deployment', emoji: '▲' },
  ];

  const contactItems = [
    { icon: <Mail size={15} />, text: 'info@anisuldev.online', href: 'mailto:info@anisuldev.online' },
    { icon: <Phone size={15} />, text: '+92 343 9275550', href: 'tel:+923439275550' },
    { icon: <MapPin size={15} />, text: 'Islamabad, Pakistan', href: '#' },
  ];

  const socialLinks = [
    { icon: <Github size={17} />, href: 'https://github.com/anisulislam10', label: 'GitHub' },
    { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/ianisulislam', label: 'LinkedIn' },
    { icon: <Twitter size={17} />, href: 'https://twitter.com/ianisulislam', label: 'Twitter' },
    { icon: <Mail size={17} />, href: 'mailto:info@anisuldev.online', label: 'Email' },
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
    'React Native', 'Firebase', 'Tailwind CSS', 'Vercel', 'Docker', 'TypeScript', 'Redis',
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050508 0%, #030305 100%)' }}
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(34,211,238,0.4), transparent)' }} />

      {/* Orbs */}
      <div className="orb orb-indigo w-[400px] h-[400px] top-0 right-0 opacity-10" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 left-0 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="inline-block">
              <img src={logo} alt="AnisulDev" className="h-8 w-auto opacity-85 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
              Full Stack Software Engineer passionate about crafting digital experiences with modern JavaScript technologies.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#475569' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
                    e.currentTarget.style.color = '#a5b4fc';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-5 flex items-center gap-2" style={{ color: '#e2e8f0' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#6366f1' }} />
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-sm transition-all duration-200 flex items-center gap-1.5 group"
                    style={{ color: '#475569' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.paddingLeft = '0px'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-5 flex items-center gap-2" style={{ color: '#e2e8f0' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22d3ee' }} />
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((svc, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2 text-sm transition-colors duration-200 cursor-default"
                    style={{ color: '#475569' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; }}
                  >
                    <span className="text-sm">{svc.emoji}</span>
                    {svc.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: '#e2e8f0' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
                Contact
              </h3>
              <div className="space-y-2.5">
                {contactItems.map((c, i) => (
                  <a
                    key={i} href={c.href}
                    className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                    style={{ color: '#475569' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; }}
                  >
                    <span style={{ color: '#334155' }}>{c.icon}</span>
                    {c.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-semibold mb-2" style={{ color: '#94a3b8' }}>Newsletter</h4>
              <p className="text-xs mb-3" style={{ color: '#334155' }}>Subscribe for tech insights</p>
              <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input-dark rounded-r-none text-xs flex-1"
                  style={{ borderRadius: '8px 0 0 8px' }}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center px-3.5 rounded-r-lg transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)' }}
                >
                  <Send size={14} style={{ color: '#fff' }} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Tech Tags ── */}
        <div className="py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs text-center mb-4" style={{ color: '#334155' }}>Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
                  e.currentTarget.style.color = '#818cf8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA strip ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h4 className="text-base font-semibold" style={{ color: '#e2e8f0' }}>Ready to work together?</h4>
            <p className="text-sm mt-0.5" style={{ color: '#475569' }}>Let's build something amazing</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Zap size={14} />
            Get a Quote
          </Link>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#334155' }}>
            <Code size={13} />
            Built with React, Vite &amp; Tailwind CSS
          </div>

          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#334155' }}>
            Made with
            <Heart size={12} className="animate-pulse" style={{ color: '#ec4899', marginLeft: '3px', marginRight: '3px' }} />
            by Anisul Islam
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: '#334155' }}>
              © {currentYear} Anisul Islam. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs transition-all duration-200"
              style={{ color: '#334155' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#334155'; }}
            >
              <ArrowUp size={13} className="hover:-translate-y-0.5 transition-transform" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;