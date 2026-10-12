import React from 'react';
import { useTranslation } from 'react-i18next';

const technologies = [
  'TypeScript',
  'React.js',
  'Next.js',
  'React Native',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'Supabase',
  'Docker',
  'Tailwind CSS',
  'REST & GraphQL',
  'CI/CD',
  'Git',
];

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.cards.webApps.title'),
      description: t('services.cards.webApps.description'),
      features: t('services.cards.webApps.features', { returnObjects: true }),
      image: '/services-web-laptop.png',
      imageAlt: 'Open laptop displaying a modern web application dashboard',
    },
    {
      title: t('services.cards.reactNative.title'),
      description: t('services.cards.reactNative.description'),
      features: t('services.cards.reactNative.features', { returnObjects: true }),
      image: '/services-react-native-mobile.png',
      imageAlt: 'Smartphone displaying a polished React Native mobile application',
    },
    {
      title: t('services.cards.backend.title'),
      description: t('services.cards.backend.description'),
      features: t('services.cards.backend.features', { returnObjects: true }),
      image: '/services-backend-server.png',
      imageAlt: 'Server infrastructure connected to cloud, database, API and security systems',
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[76rem] mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end animate-fade-up">
          <div className="lg:col-span-7">
            <span className="section-badge">{t('services.badge')}</span>
            <h2 className="mt-6 text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem]">
              {t('services.heading')} <span className="gradient-text">{t('services.headingHighlight')}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="lede lg:pb-2">{t('services.description')}</p>
          </div>
        </div>

        {/* ── Services ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 lg:mt-10">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="service-offering group flex flex-col overflow-hidden animate-fade-up"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="service-card-visual">
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="service-card-visual-shade" aria-hidden="true" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-[1.25rem]" style={{ color: 'var(--text-primary)' }}>
                  {svc.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {svc.description}
                </p>

                <ul className="mt-6 pt-5 flex-1 space-y-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  {Array.isArray(svc.features) && svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.875rem]" style={{ color: 'var(--text-secondary)' }}>
                      <span
                        className="mt-[0.6rem] h-px w-3 flex-shrink-0"
                        style={{ background: 'var(--accent)' }}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* ── Technology index ── */}
        <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] animate-fade-up">
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h3 className="text-[1.5rem] sm:text-[1.75rem]">{t('services.techStack')}</h3>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
              Tools &amp; languages I build with
            </span>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px mt-8"
            style={{ background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)' }}
          >
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-5 py-4 text-[0.8125rem] transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
