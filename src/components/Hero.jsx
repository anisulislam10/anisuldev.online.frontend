import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const codeLines = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'developer' }, { t: 'bracket', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'property', v: '  name' }, { t: 'bracket', v: ': ' }, { t: 'string', v: '"Anisul Islam"' }, { t: 'default', v: ',' }] },
  { indent: 1, tokens: [{ t: 'property', v: '  role' }, { t: 'bracket', v: ': ' }, { t: 'string', v: '"Full Stack Engineer"' }, { t: 'default', v: ',' }] },
  { indent: 1, tokens: [{ t: 'property', v: '  stack' }, { t: 'bracket', v: ': [' }] },
  { indent: 2, tokens: [{ t: 'string', v: '    "React.js"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"Next.js"' }, { t: 'default', v: ',' }] },
  { indent: 2, tokens: [{ t: 'string', v: '    "Node.js"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"MongoDB"' }, { t: 'default', v: ',' }] },
  { indent: 2, tokens: [{ t: 'string', v: '    "React Native"' }] },
  { indent: 1, tokens: [{ t: 'bracket', v: '  ],' }] },
  { indent: 1, tokens: [{ t: 'property', v: '  experience' }, { t: 'bracket', v: ': ' }, { t: 'number', v: '3' }, { t: 'default', v: '+ years,' }] },
  { indent: 1, tokens: [{ t: 'property', v: '  projects' }, { t: 'bracket', v: ': ' }, { t: 'number', v: '50' }, { t: 'default', v: '+,' }] },
  { indent: 1, tokens: [{ t: 'property', v: '  available' }, { t: 'bracket', v: ': ' }, { t: 'keyword', v: 'true' }] },
  { indent: 0, tokens: [{ t: 'bracket', v: '};' }] },
];

const colorMap = {
  keyword: '#c792ea',
  var: '#82aaff',
  string: '#c3e88d',
  number: '#f78c6c',
  property: '#80cbc4',
  bracket: '#89ddff',
  comment: '#546e7a',
  func: '#82aaff',
  default: '#cdd5e0',
};

const techStack = [
  { name: 'React.js', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'React Native', emoji: '📱' },
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '3+', label: 'Years Exp' },
  { value: '100%', label: 'Satisfaction' },
];

const Hero = () => {
  const [typedLine, setTypedLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typedLine < codeLines.length) {
      const timer = setTimeout(() => setTypedLine(t => t + 1), 120);
      return () => clearTimeout(timer);
    }
  }, [typedLine]);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor(c => !c), 550);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Orbs */}
      <div className="orb orb-indigo w-[600px] h-[600px] -top-32 -left-32 opacity-40" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-1/4 right-0 opacity-30" />
      <div className="orb orb-purple w-[350px] h-[350px] bottom-0 left-1/3 opacity-25" />

      <meta itemProp="name" content="Anisul Islam" />
      <meta itemProp="jobTitle" content="Full Stack Software Engineer" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col justify-center gap-6 order-2 lg:order-1">

            {/* Badge */}
            <div className="animate-fade-up" style={{ animationFillMode: 'both' }}>
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <Sparkles size={12} />
                Full Stack Developer
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-up delay-100" style={{ animationFillMode: 'both' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight" itemProp="name">
                <span style={{ color: 'var(--text-primary)' }}>Hi, I'm</span>{' '}
                <span className="gradient-text animate-grad-shift">
                  Anisul Islam
                </span>
              </h1>
              <h2
                className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium"
                style={{ color: 'var(--text-secondary)' }}
                itemProp="jobTitle"
              >
                JavaScript Lover &amp; Full Stack Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p
              className="animate-fade-up delay-200 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--text-secondary)', animationFillMode: 'both' }}
              itemProp="description"
            >
              I craft beautiful, performant web &amp; mobile applications using modern
              JavaScript — from pixel-perfect UIs to scalable backend systems.
            </p>

            {/* Tech Stack Pills */}
            <div className="animate-fade-up delay-300 flex flex-wrap gap-2" style={{ animationFillMode: 'both' }}>
              {techStack.map((tech) => (
                <span key={tech.name} className="tech-pill">
                  <span>{tech.emoji}</span>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3" style={{ animationFillMode: 'both' }}>
              <Link to="/projects" className="btn-primary text-sm sm:text-base">
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost text-sm sm:text-base">
                Get a Quote
                <ExternalLink size={15} />
              </Link>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up delay-500 flex items-center gap-4 pt-2" style={{ animationFillMode: 'both' }}>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Connect:</span>
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

          {/* ── Right: Terminal Card ── */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 animate-fade-right delay-200" style={{ animationFillMode: 'both' }}>

            {/* Terminal window */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-card-hover)' }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <Terminal size={12} style={{ color: '#475569' }} />
                  <span className="text-xs" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>developer.js</span>
                </div>
              </div>

              {/* Code body */}
              <div className="p-5 code-block" style={{ minHeight: '280px' }}>
                {codeLines.slice(0, typedLine).map((line, li) => (
                  <div key={li} className="flex items-start leading-7">
                    <span className="select-none mr-4 text-xs w-4 text-right flex-shrink-0" style={{ color: 'var(--text-muted)', lineHeight: '1.75rem' }}>
                      {li + 1}
                    </span>
                    <span>
                      {line.tokens.map((tok, ti) => (
                        <span key={ti} style={{ color: colorMap[tok.t] || '#cdd5e0' }}>{tok.v}</span>
                      ))}
                      {li === typedLine - 1 && typedLine < codeLines.length && (
                        <span style={{ color: '#6366f1', opacity: showCursor ? 1 : 0 }}>▋</span>
                      )}
                    </span>
                  </div>
                ))}
                {typedLine >= codeLines.length && (
                  <div className="flex items-center mt-1">
                    <span className="select-none mr-4 text-xs w-4 text-right" style={{ color: 'var(--text-muted)' }}>{codeLines.length + 1}</span>
                    <span style={{ color: '#6366f1', opacity: showCursor ? 1 : 0 }}>▋</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card text-center py-4 px-2 rounded-xl"
                  style={{ background: 'var(--bg-card-hover)' }}
                >
                  <div
                    className="text-2xl sm:text-3xl font-black gradient-text"
                    style={{ lineHeight: 1.2 }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Profile card */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden"
                  style={{ border: '2px solid rgba(99,102,241,0.4)' }}>
                  <img
                    src="/Anisul_Islam_Software_Developer_Chitral.png"
                    alt="Anisul Islam"
                    className="w-full h-full object-cover"
                    itemProp="image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Anisul Islam</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Full Stack Software Engineer</div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs" style={{ color: '#34d399' }}>Open to work</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)' }}
              >
                Hire
              </Link>
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