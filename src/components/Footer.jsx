import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

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

  const serviceLinks = [
    t('footer.services_list.webApplications'),
    t('footer.services_list.reactNativeApps'),
    t('footer.services_list.backendAPIs'),
    t('footer.services_list.databaseDesign'),
    t('footer.services_list.vpsDeployment'),
    t('footer.services_list.vercelDeployment'),
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/anisulislam10', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/ianisulislam', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com/ianisulislam', label: 'Twitter' },
    { Icon: Mail, href: 'mailto:anisuldev@gmail.com', label: 'Email' },
  ];

  const columnLabel = 'font-mono text-[0.625rem] uppercase tracking-[0.16em]';

  return (
    <footer
      className="relative"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[76rem] mx-auto px-5 sm:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <span className="font-display text-[1.375rem] tracking-[-0.03em]" style={{ color: 'var(--text-primary)', fontWeight: 640 }}>
                Anisul Islam
              </span>
            </Link>
            <p className="mt-4 max-w-[24rem] text-[0.9375rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('footer.tagline')}
            </p>

            <div className="flex gap-1 mt-7">
              {socialLinks.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-[6px] transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className={columnLabel} style={{ color: 'var(--text-muted)' }}>
              {t('footer.navigation')}
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[0.9375rem] transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h3 className={columnLabel} style={{ color: 'var(--text-muted)' }}>
              {t('footer.services')}
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((name) => (
                <li key={name} className="text-[0.9375rem]" style={{ color: 'var(--text-secondary)' }}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <span className="font-mono text-[0.6875rem]" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} Anisul Islam
          </span>

          <span className="font-mono text-[0.6875rem]" style={{ color: 'var(--text-muted)' }}>
            {t('footer.builtWith')}
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowUp size={13} />
            {t('footer.top')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
