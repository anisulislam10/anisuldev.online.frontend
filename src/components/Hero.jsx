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

          {/* ── Right Column: Premium Personal Photo Frame ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-right">
            <div className="hero-portrait-wrap relative group">
              {/* Photo Card container */}
              <div className="hero-portrait-card relative w-72 h-80 sm:w-80 sm:h-96 overflow-visible">
                <img
                  src="/anisul-programming-blue-lamp.png"
                  alt="Anisul Islam programming under a blue desk lamp"
                  className="hero-portrait-image w-full h-full object-cover object-center grayscale-[5%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  itemProp="image"
                />

                {/* Status Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">{t('hero.openToWork')}</span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium">PKT Zone</span>
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
            "image": "https://www.anisuldev.online/Anisul_Islam_Software_Developer_Chitral.png",
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
