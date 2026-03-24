import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './../../public/anisuldev.online_logo_light.png';
import {
  Heart, Github, Linkedin, Twitter, Mail, ArrowUp,
  Code, Coffee, MapPin, Phone, Send, Zap,
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
    { name: t('nav.tools'), to: '/tools' },
    { name: t('nav.contact'), to: '/contact' },
  ];

  const services = [
    { name: t('footer.services_list.reactNativeApps'), emoji: '📱' },
    { name: t('footer.services_list.webApplications'), emoji: '🌐' },
    { name: t('footer.services_list.backendAPIs'), emoji: '⚙️' },
    { name: t('footer.services_list.databaseDesign'), emoji: '🗃️' },
    { name: t('footer.services_list.vpsDeployment'), emoji: '🚀' },
    { name: t('footer.services_list.vercelDeployment'), emoji: '▲' },
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
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-glow), transparent)' }} />
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
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('footer.tagline')}
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
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--bg-card-hover)';
                    e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                    e.currentTarget.style.color = 'var(--accent-indigo)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
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
            <h3 className="text-sm font-semibold mb-5 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-indigo)' }} />
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-sm transition-all duration-200 flex items-center gap-1.5 group"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-indigo)'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0px'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-5 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-cyan)' }} />
              {t('footer.services')}
            </h3>
            <ul className="space-y-2.5">
              {services.map((svc, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2 text-sm transition-colors duration-200 cursor-default"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
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
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-green)' }} />
                {t('footer.contact')}
              </h3>
              <div className="space-y-2.5">
                {contactItems.map((c, i) => (
                  <a
                    key={i} href={c.href}
                    className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <span style={{ color: 'var(--text-muted)' }}>{c.icon}</span>
                    {c.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>{t('footer.newsletter')}</h4>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>{t('footer.newsletterDesc')}</p>
              <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input-dark rounded-r-none text-xs flex-1"
                  style={{ borderRadius: '8px 0 0 8px', borderColor: 'var(--border-subtle)', background: 'var(--bg-card)' }}
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
        <div className="py-8" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <p className="text-xs text-center mb-4" style={{ color: 'var(--text-muted)' }}>{t('footer.techWorkWith')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-default"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                  e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                  e.currentTarget.style.color = 'var(--accent-indigo)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA strip ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8"
          style={{ borderBottom: '1px solid var(--border-subtle)' }}>
          <div>
            <h4 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{t('footer.ctaHeading')}</h4>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>{t('footer.ctaSubtitle')}</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Zap size={14} />
            {t('footer.getQuote')}
          </Link>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
            <Code size={13} />
            {t('footer.builtWith')}
          </div>

          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
            {t('footer.madeWith')}
            <Heart size={12} className="animate-pulse" style={{ color: '#ec4899', marginLeft: '3px', marginRight: '3px' }} />
            {t('footer.by')}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {t('footer.rights', { year: currentYear })}
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs transition-all duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-indigo)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ArrowUp size={13} className="hover:-translate-y-0.5 transition-transform" />
              {t('footer.top')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;