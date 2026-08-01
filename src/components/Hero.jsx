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
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero-section relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
    >
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
            <div className="animate-fade-up delay-300 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech.name} className="tech-pill">
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
              {/* Animated decorative gradient borders behind photo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow" />
              
              {/* Photo Card container */}
              <div className="relative w-72 h-[25rem] sm:w-80 sm:h-[29rem] rounded-[2rem] overflow-hidden bg-slate-900 border-2 shadow-2xl" style={{ borderColor: 'var(--border-subtle)' }}>
                <img
                  src="/Anisul_Islam_Software_Developer_Chitral.png"
                  alt="Anisul Islam"
                  className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
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