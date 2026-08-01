import React from 'react';
import {
  Smartphone, Globe, Server, Database, Zap, Cloud,
  Code, CheckCircle, GitBranch, Cpu, Layout,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const technologies = [
  { name: 'React Native', icon: <Smartphone size={16} />, category: 'Mobile' },
  { name: 'React.js', icon: <Code size={16} />, category: 'Frontend' },
  { name: 'Next.js', icon: <Layout size={16} />, category: 'Frontend' },
  { name: 'Node.js', icon: <Server size={16} />, category: 'Backend' },
  { name: 'Express.js', icon: <Server size={16} />, category: 'Backend' },
  { name: 'MongoDB', icon: <Database size={16} />, category: 'Database' },
  { name: 'PostgreSQL', icon: <Database size={16} />, category: 'Database' },
  { name: 'MySQL', icon: <Database size={16} />, category: 'Database' },
  { name: 'Firebase', icon: <Cloud size={16} />, category: 'Cloud' },
  { name: 'Docker', icon: <Cpu size={16} />, category: 'DevOps' },
  { name: 'Tailwind CSS', icon: <Layout size={16} />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code size={16} />, category: 'Language' },
  { name: 'Git', icon: <GitBranch size={16} />, category: 'Tools' },
];

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Globe className="w-7 h-7" />,
      title: t('services.cards.webApps.title'),
      description: t('services.cards.webApps.description'),
      features: t('services.cards.webApps.features', { returnObjects: true }),
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      glow: 'rgba(168, 85, 247, 0.3)',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: t('services.cards.reactNative.title'),
      description: t('services.cards.reactNative.description'),
      features: t('services.cards.reactNative.features', { returnObjects: true }),
      gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
      glow: 'rgba(99, 102, 241, 0.3)',
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: t('services.cards.backend.title'),
      description: t('services.cards.backend.description'),
      features: t('services.cards.backend.features', { returnObjects: true }),
      gradient: 'linear-gradient(135deg, #10b981 0%, #22d3ee 100%)',
      glow: 'rgba(16, 185, 129, 0.3)',
    },
  ];

  return (
    <section id="services" className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>

      {/* Background grid */}
      <div className="absolute inset-0 bg-dot opacity-30" />

      {/* Orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-0 right-0 opacity-15" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-up">
          <span className="section-badge mb-4 inline-flex">
            <Zap size={13} />
            {t('services.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mt-4">
            {t('services.heading')}{' '}
            <span className="gradient-text animate-grad-shift">{t('services.headingHighlight')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('services.description')}
          </p>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 animate-fade-up">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-500"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${svc.glow}`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: svc.gradient }} />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{ background: svc.gradient, boxShadow: `0 8px 24px ${svc.glow}` }}
              >
                {svc.icon}
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{svc.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{svc.description}</p>

              <ul className="space-y-2.5 flex-1">
                {Array.isArray(svc.features) && svc.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle size={14} className="flex-shrink-0" style={{ color: '#10b981' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Static Tech Stack Grid ── */}
        <div className="animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('services.techStack')}</h3>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>Tools and languages I use to build scalable products</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
              >
                <div style={{ color: 'var(--accent-indigo)' }}>
                  {tech.icon}
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{tech.name}</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;