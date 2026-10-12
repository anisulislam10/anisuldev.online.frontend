import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../i18n/LanguageContext';

const footerNav = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/blogs', labelKey: 'nav.blogs' },
  { to: '/contact', labelKey: 'nav.contact' },
];

const elseLinks = [
  { label: 'GitHub', href: 'https://github.com/anisulislam10' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ianisulislam' },
  { label: 'X', href: 'https://twitter.com/ianisulislam' },
  { label: 'Email', href: 'mailto:anisuldev@gmail.com' },
];

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ur', label: 'اردو' },
  { code: 'ar', label: 'عربي' },
];

const Footer = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav className="footer-links" aria-label={t('footer.navigation')}>
          {footerNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <nav className="footer-links" aria-label={t('footer.contact')}>
          {elseLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-meta">
          <span className="footer-lang" role="group" aria-label={t('footer.language')}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                aria-current={language === lang.code ? 'true' : undefined}
              >
                {lang.label}
              </button>
            ))}
          </span>
          <span className="footer-copyright">© {currentYear} Anisul Islam</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
