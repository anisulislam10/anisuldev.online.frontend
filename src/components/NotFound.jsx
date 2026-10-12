import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ArrowUpRight } from 'lucide-react';

const suggestions = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

const NotFound = () => {
  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[76rem] mx-auto px-5 sm:px-8">

        <span className="section-badge">Error 404</span>

        <h1
          className="mt-6 text-[6rem] sm:text-[9rem] leading-[0.9] tracking-[-0.04em]"
          style={{ color: 'var(--text-primary)', fontWeight: 640 }}
        >
          404
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-10 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-[1.75rem] sm:text-[2rem] mb-4">
              This page doesn&apos;t exist.
            </h2>
            <p className="lede max-w-[34rem]">
              The link may be broken, or the page may have been moved. Here are a few places worth visiting instead.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <Link to="/" className="btn-primary justify-center">
                <Home size={15} />
                Back to home
              </Link>
              <button onClick={() => window.history.back()} className="btn-ghost justify-center">
                <ArrowLeft size={15} />
                Go back
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
              Popular pages
            </span>
            <div className="mt-5" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {suggestions.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between py-4 transition-colors duration-200"
                  style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                >
                  <span className="text-[0.9375rem]">{item.label}</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
