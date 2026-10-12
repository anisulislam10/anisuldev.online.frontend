import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

const navItems = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/blogs', labelKey: 'nav.blogs' },
  { to: '/contact', labelKey: 'nav.contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  // react-router keeps the key "default" for the first entry of the session,
  // so a page opened from a link/refresh has nothing in-app to go back to.
  const cameFromApp = location.key !== 'default';
  const goBack = () => (cameFromApp ? navigate(-1) : navigate('/'));

  const desktopLink = ({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`;

  // The home page opens straight on the profile, so it keeps only the floating
  // theme toggle; the navigation bar is shown on every other page.
  if (isHome) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle"
          style={{ background: 'var(--bg-card)' }}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    );
  }

  return (
    <header
      className="site-nav sticky top-0 z-50 border-b"
      style={{ background: 'var(--bg-nav)', backdropFilter: 'blur(16px)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="site-nav-inner">
        {/* Brand + back */}
        <div className="site-nav-brand">
          <button
            type="button"
            onClick={goBack}
            className="site-nav-back"
            aria-label={t('nav.back')}
            title={t('nav.back')}
          >
            <ArrowLeft size={15} aria-hidden="true" />
            <span>{t('nav.back')}</span>
          </button>

          <Link
            to="/"
            className="font-display text-[1.0625rem] tracking-[-0.02em] truncate"
            style={{ color: 'var(--text-primary)', fontWeight: 640 }}
          >
            Anisul Islam
          </Link>
        </div>

        {/* Links */}
        <nav className="site-nav-links" aria-label={t('nav.home')}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={desktopLink}>
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="site-nav-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            style={{ background: 'var(--bg-card)' }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
