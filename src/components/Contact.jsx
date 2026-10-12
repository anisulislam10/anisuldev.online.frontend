import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, Send, Github, Linkedin, Twitter, ArrowUpRight, MessageCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// EmailJS credentials live in .env.local (see .env.example).
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Inbox that receives every contact form submission.
const CONTACT_INBOX = 'anis.inbox10@gmail.com';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'sending') return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to .env.local.');
      setFormStatus('error');
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setFormStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: CONTACT_INBOX,
          from_name: data.get('name'),
          reply_to: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setFormStatus('success');
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setFormStatus('error');
    }
  };

  const channels = [
    {
      Icon: Mail,
      label: t('contact.form.email'),
      value: 'anisuldev@gmail.com',
      href: 'mailto:anisuldev@gmail.com',
    },
    {
      Icon: Phone,
      label: t('contact.form.phone'),
      value: '+92 343 927 5550',
      href: 'tel:+923439275550',
    },
    {
      Icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92 343 927 5550',
      href: 'https://wa.me/923439275550',
    },
  ];

  const expectations = [
    { title: t('contact.response24h'), desc: t('contact.response24hDesc') },
    { title: t('contact.noSpam'), desc: t('contact.noSpamDesc') },
    { title: t('contact.freeConsult'), desc: t('contact.freeConsultDesc') },
  ];

  const socials = [
    { href: 'https://github.com/anisulislam10', label: 'GitHub', Icon: Github },
    { href: 'https://linkedin.com/in/ianisulislam', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://twitter.com/ianisulislam', label: 'Twitter', Icon: Twitter },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-[76rem] mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end animate-fade-up">
          <div className="lg:col-span-7">
            <span className="section-badge">{t('contact.badge')}</span>
            <h2 className="mt-6 text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem]">
              {t('contact.heading')} <span className="gradient-text">{t('contact.headingHighlight')}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="lede lg:pb-2">{t('contact.description')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 lg:mt-10 items-start">

          {/* ── Details ── */}
          <div className="lg:col-span-5 flex flex-col animate-fade-up">

            <div className="flex items-center gap-3">
              <span className="status-dot" />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                {t('contact.available')}
              </span>
            </div>
            <p className="mt-2 text-[0.875rem]" style={{ color: 'var(--text-muted)' }}>
              {t('contact.open')} · Mon — Fri, 9:00 — 18:00 PKT
            </p>

            {/* Channels */}
            <div className="mt-9" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {channels.map((channel) => {
                const Icon = channel.Icon;
                const external = channel.href.startsWith('http');
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 py-5 transition-colors duration-200"
                    style={{ borderBottom: '1px solid var(--border-subtle)' }}
                  >
                    <Icon size={17} style={{ color: 'var(--text-muted)' }} className="flex-shrink-0" />
                    <span className="w-20 flex-shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
                      {channel.label}
                    </span>
                    <span className="flex-1 truncate text-[0.9375rem]" style={{ color: 'var(--text-primary)' }}>
                      {channel.value}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </a>
                );
              })}
            </div>

            {/* Expectations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {expectations.map((item) => (
                <div key={item.title}>
                  <div className="text-[0.875rem] font-medium" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </div>
                  <div className="mt-1 text-[0.8125rem] leading-snug" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-5">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
                {t('contact.connectSocial')}
              </span>
              <div className="flex gap-1">
                {socials.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-9 h-9 rounded-[6px] transition-colors duration-200 hover:text-[var(--accent)]"
                      style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-7 w-full animate-fade-up delay-100">
            <div
              className="p-6 sm:p-9"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 className="text-[1.375rem]" style={{ color: 'var(--text-primary)' }}>
                {t('contact.form.heading')}
              </h3>
              <p className="mt-2 text-[0.875rem]" style={{ color: 'var(--text-muted)' }}>
                {t('contact.form.subheading')}
              </p>

              <div className="mt-8" style={{ borderTop: '1px solid var(--border-subtle)' }} />

              {formStatus === 'success' ? (
                <div className="py-14 flex flex-col items-start animate-fade-up">
                  <span className="section-badge">{t('contact.form.successTitle')}</span>
                  <h4 className="mt-5 text-[1.5rem]" style={{ color: 'var(--text-primary)' }}>
                    {t('contact.form.successDesc')}
                  </h4>
                  <button onClick={() => setFormStatus('idle')} className="btn-ghost mt-7">
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-mono text-[0.625rem] uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
                        {t('contact.form.fullName')}
                      </label>
                      <input required type="text" name="name" placeholder={t('contact.form.namePlaceholder')} className="input-dark" />
                    </div>
                    <div>
                      <label className="block mb-2 font-mono text-[0.625rem] uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
                        {t('contact.form.email')}
                      </label>
                      <input required type="email" name="email" placeholder={t('contact.form.emailPlaceholder')} className="input-dark" />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-mono text-[0.625rem] uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
                      Subject
                    </label>
                    <input required type="text" name="subject" placeholder="Project details, timelines, budget…" className="input-dark" />
                  </div>

                  <div>
                    <label className="block mb-2 font-mono text-[0.625rem] uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="input-dark resize-none"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <p role="alert" className="text-[0.8125rem]" style={{ color: '#d9534f' }}>
                      {t('contact.form.sendFailed')}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                    <button disabled={formStatus === 'sending'} type="submit" className="btn-primary w-full sm:w-auto justify-center">
                      {formStatus === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                      <Send size={15} />
                    </button>
                    <p className="text-[0.75rem] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
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
