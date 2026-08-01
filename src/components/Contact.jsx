import React, { useState } from 'react';
import {
  Mail, Phone, Send, MessageSquare,
  Clock, Github, Linkedin, Twitter, CheckCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>

      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="orb orb-indigo w-[600px] h-[600px] -bottom-32 -right-32 opacity-15" />
      <div className="orb orb-purple w-[400px] h-[400px] top-1/4 -left-20 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16 lg:mb-20 animate-fade-up">
          <span className="section-badge mb-4 flex w-fit">
            <MessageSquare size={13} />
            {t('contact.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mt-4">
            {t('contact.heading')}{' '}
            <span className="gradient-text animate-grad-shift">{t('contact.headingHighlight')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left Column: Quick Info & Socials ── */}
          <div className="lg:col-span-5 space-y-8 animate-fade-up">

            {/* Availability card */}
            <div
              className="p-6 rounded-2xl flex items-center gap-5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Clock size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#10b981' }}>{t('contact.available')}</span>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Status: {t('contact.open')} · Mon — Fri, 9:00 — 18:00 PKT</p>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Mail size={18} />, label: t('contact.form.email'), val: 'info@anisuldev.online', href: 'mailto:info@anisuldev.online' },
                { icon: <Phone size={18} />, label: t('contact.form.phone'), val: '+92 343 9275550', href: 'tel:+923439275550' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="p-5 rounded-2xl transition-all duration-300 group"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `var(--accent-indigo)`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ color: 'var(--accent-indigo)' }}>
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                  <div className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{item.val}</div>
                </a>
              ))}
            </div>

            {/* Social Connect */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>{t('contact.connectSocial')}</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={18} />, href: 'https://github.com/anisulislam10' },
                  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/ianisulislam' },
                  { icon: <Twitter size={18} />, href: 'https://twitter.com/ianisulislam' },
                ].map((s, i) => (
                  <a
                    key={i} href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-indigo)'; e.currentTarget.style.color = 'var(--accent-indigo)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Clean Simple Form ── */}
          <div className="lg:col-span-7 lg:mt-0 mt-8 animate-fade-up">
            <div
              className="rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden h-full"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
            >
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{t('contact.form.heading')}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.subheading')}</p>
              </div>

              {formStatus === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center animate-fade-up">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{t('contact.form.successTitle')}</h4>
                  <p className="text-sm max-w-xs mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.successDesc')}</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-ghost"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>{t('contact.form.fullName')}</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder={t('contact.form.namePlaceholder')}
                        className="input-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>{t('contact.form.email')}</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        className="input-dark"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>Subject</label>
                    <input
                      required
                      type="text"
                      name="subject"
                      placeholder="Project details, inquiries, etc."
                      className="input-dark"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider pl-1" style={{ color: 'var(--text-muted)' }}>{t('contact.form.message')}</label>
                    <textarea
                      required
                      name="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows="5"
                      className="input-dark !py-4"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                    <button
                      disabled={formStatus === 'sending'}
                      type="submit"
                      className="btn-primary w-full sm:w-auto"
                    >
                      {formStatus === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                      <Send size={16} />
                    </button>
                    <p className="text-[10px] sm:text-xs text-center sm:text-left leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {t('contact.form.privacy')}
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;