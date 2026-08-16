import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const techStack = [
  { name: 'React.js', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'React Native', emoji: '📱' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'CI/CD', emoji: '🔄' },
  { name: 'Docker', emoji: '🐳' },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero-section relative min-h-screen flex flex-col justify-center pt-28 pb-10 overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="hero-wave-background" aria-hidden="true">
        <svg viewBox="0 0 1440 720" preserveAspectRatio="none">
          <path className="hero-wave hero-wave-one" d="M-180 300 C 80 170, 300 430, 570 300 S 1060 150, 1620 320 L 1620 760 L -180 760 Z" />
          <path className="hero-wave hero-wave-two" d="M-200 420 C 120 250, 360 560, 680 390 S 1150 260, 1640 440 L 1640 760 L -200 760 Z" />
          <path className="hero-wave hero-wave-three" d="M-220 520 C 100 390, 390 650, 730 500 S 1220 390, 1660 540 L 1660 760 L -220 760 Z" />
        </svg>
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Orbs */}
      <div className="orb orb-indigo w-[500px] h-[500px] -top-32 -left-32 opacity-30" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-1/4 right-0 opacity-20" />

      <meta itemProp="name" content="Anisul Islam" />
      <meta itemProp="jobTitle" content="Full Stack Software Engineer" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* ── Left Column: Introduction ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="section-badge inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Sparkles size={12} />
                {t('hero.badge')}
              </span>
            </div>

            {/* Title / Heading */}
            <div className="animate-fade-up delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                <span style={{ color: 'var(--text-primary)' }}>{t('hero.greeting')}</span>{' '}
                <span className="gradient-text animate-grad-shift">
                  Anisul Islam
                </span>
              </h1>
              <h2
                className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium"
                style={{ color: 'var(--text-secondary)' }}
                itemProp="jobTitle"
              >
                {t('hero.subtitle')}
              </h2>
            </div>

            {/* Short Bio */}
            <p
              className="animate-fade-up delay-200 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
              itemProp="description"
            >
              {t('hero.description')}
            </p>

            {/* Core Tech Stack */}
            <div className="animate-fade-up delay-300 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl">
              {techStack.map((tech) => (
                <span key={tech.name} className="tech-pill justify-center">
                  <span>{tech.emoji}</span>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/projects" className="btn-primary text-sm sm:text-base justify-center">
                {t('hero.viewProjects')}
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost text-sm sm:text-base justify-center">
                {t('hero.getQuote')}
                <ExternalLink size={15} />
              </Link>
            </div>

            {/* Social Connections */}
            <div className="animate-fade-up delay-500 flex items-center gap-4 pt-4 border-t border-dashed" style={{ borderColor: 'var(--border-subtle)' }}>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{t('hero.connect')}</span>
              <div className="flex gap-3" itemProp="sameAs">
                {[
                  { href: 'https://github.com/anisulislam10', icon: <Github size={17} />, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/ianisulislam', icon: <Linkedin size={17} />, label: 'LinkedIn' },
                  { href: 'https://twitter.com/ianisulislam', icon: <Twitter size={17} />, label: 'Twitter' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300"
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

          </div>

          {/* ── Right Column: Premium Employee ID Card Frame ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="id-card-lanyard-wrap relative">
              {/* Lanyard Strap */}
              <div className="id-card-strap" />
              
              {/* Metal Badge Hook / Clip */}
              <div className="id-card-hook">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Metal Ring */}
                  <path d="M12 2C9.79086 2 8 3.79086 8 6V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V6C16 3.79086 14.2091 2 12 2Z" fill="var(--accent-indigo)" opacity="0.8"/>
                  {/* Clip Body */}
                  <rect x="9" y="10" width="6" height="12" rx="1.5" fill="#94a3b8" />
                  {/* Claw Hook */}
                  <path d="M8 20C8 17.7909 9.79086 16 12 16C14.2091 16 16 17.7909 16 20V26C16 28.2091 14.2091 30 12 30C9.79086 30 8 28.2091 8 26V20Z" stroke="#64748b" strokeWidth="2" />
                  {/* Pin/Hinge */}
                  <circle cx="12" cy="22" r="2" fill="#475569" />
                </svg>
              </div>

              {/* ID Card container */}
              <div className="id-card-container">
                {/* Lanyard slot */}
                <div className="id-card-slot" />
                
                <div className="id-card-inner">
                  {/* Header */}
                  <div className="id-card-header">
                    <span className="id-card-logo">⚡ ANISULDEV</span>
                    <span className="id-card-header-tag">ENG #10</span>
                  </div>

                  {/* Photo container */}
                  <div className="id-card-image-container">
                    <img
                      src="/anisul-passport.png"
                      alt="Anisul Islam"
                      className="id-card-image"
                      itemProp="image"
                    />

                    {/* Status Overlay */}
                    <div className="id-card-status">
                      <span className="status-dot" />
                      <span className="status-text">{t('hero.openToWork')}</span>
                    </div>
                  </div>

                  {/* Card Info details */}
                  <div className="id-card-info">
                    <div className="id-card-name" itemProp="name">Anisul Islam</div>
                    <div className="id-card-designation" itemProp="jobTitle">{t('hero.badge')}</div>
                  </div>

                  {/* Footer with barcode and EMV chip */}
                  <div className="id-card-footer">
                    <div className="id-card-chip">
                      <div className="chip-line" />
                      <div className="chip-line" />
                      <div className="chip-line" />
                    </div>

                    <div className="id-card-barcode">
                      <div className="barcode-line w-[2px] h-full" />
                      <div className="barcode-line w-[4px] h-[80%]" />
                      <div className="barcode-line w-[1px] h-full" />
                      <div className="barcode-line w-[3px] h-[90%]" />
                      <div className="barcode-line w-[2px] h-[75%]" />
                      <div className="barcode-line w-[1px] h-full" />
                      <div className="barcode-line w-[5px] h-[85%]" />
                      <div className="barcode-line w-[2px] h-full" />
                      <div className="barcode-line w-[3px] h-[70%]" />
                      <div className="barcode-line w-[1px] h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anisul Islam",
            "jobTitle": "Full Stack Software Engineer",
            "url": "https://www.anisuldev.online",
            "image": "https://www.anisuldev.online/anisul-passport.png",
            "sameAs": [
              "https://github.com/anisulislam10",
              "https://linkedin.com/in/ianisulislam",
              "https://twitter.com/ianisulislam"
            ],
            "workLocation": { "@type": "Place", "name": "Islamabad, Pakistan" },
          })
        }}
      />
    </section>
  );
};

export default Hero;
