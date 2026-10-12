import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

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
};

export default Navbar;
