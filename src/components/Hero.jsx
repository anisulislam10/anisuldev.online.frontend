import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight, ArrowUpRight, MapPin, Code2, Layers, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const techStack = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express',
  'React Native',
  'MongoDB',
  'PostgreSQL',
  'Docker',
];

const socials = [
  { href: 'https://github.com/anisulislam10', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com/in/ianisulislam', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://twitter.com/ianisulislam', label: 'Twitter', Icon: Twitter },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="profile-layout" itemScope itemType="https://schema.org/Person">
      <article className="profile-card">
        <div className="profile-cover">
          <div className="cover-copy"><span>DESIGN. DEVELOP. DELIVER.</span><p>Thoughtful code.<br />Meaningful experiences.</p></div>
          <div className="cover-symbol" aria-hidden="true"><Code2 size={64} strokeWidth={1} /></div>
        </div>
        <div className="profile-body">
          <div className="profile-identity-row">
            <img className="profile-avatar" src="/anisul-passport.png" alt="Anisul Islam" itemProp="image" />
            <span className="profile-status"><span className="status-dot" />{t('hero.openToWork')}</span>
          </div>
          <h1 itemProp="name">Anisul Islam</h1>
          <p className="profile-role" itemProp="jobTitle">{t('hero.subtitle')}</p>
          <p className="profile-location"><MapPin size={14} aria-hidden="true" /> Islamabad, Pakistan <span aria-hidden="true">·</span> <Link to="/contact">{t('nav.contact')}</Link></p>
          <p className="profile-summary" itemProp="description">{t('hero.description')}</p>
          <div className="profile-actions">
            <Link to="/contact" className="btn-primary">{t('hero.getQuote')}<ArrowUpRight size={16} /></Link>
            <Link to="/projects" className="btn-ghost">{t('hero.viewProjects')}<ArrowRight size={16} /></Link>
          </div>
          <div className="profile-specialties"><span><Code2 size={16} /> Web applications</span><span><Layers size={16} /> Mobile &amp; backend</span></div>
        </div>
      </article>
      <aside className="profile-aside">
        <div className="profile-sidebar">
          <span className="sidebar-eyebrow">ELSEWHERE ON THE WEB</span><h2>{t('hero.connect')}</h2>
          {socials.map(({ href, label, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="profile-social"> {React.createElement(Icon, { size: 20 })}{label}<ArrowUpRight size={14} className="ml-auto" /></a>)}
        </div>
        <div className="profile-sidebar">
          <span className="sidebar-eyebrow">MY TOOLKIT</span><h2>Built with the right tools.</h2>
          <div className="flex flex-wrap gap-2">{techStack.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}</div>
        </div>
        <Link to="/contact" className="profile-contact-link"><span className="contact-link-icon"><MessageCircle size={20} /></span><span><strong>Have a project in mind?</strong><small>Let’s build something great.</small></span><ArrowUpRight size={18} /></Link>
      </aside>

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
