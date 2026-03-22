import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Send, Mail, Phone, MapPin, CheckCircle, MessageSquare,
  User, Clock, Shield, AlertCircle, Github, Linkedin, Twitter,
  ArrowRight, Zap
} from 'lucide-react';

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'info@anisuldev.online', href: 'mailto:info@anisuldev.online', color: '#6366f1' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+92 343 9275550', href: 'tel:+923439275550', color: '#22d3ee' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Islamabad, Pakistan', href: '#', color: '#a855f7' },
];

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/anisulislam10', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/ianisulislam', label: 'LinkedIn' },
  { icon: <Twitter size={18} />, href: 'https://twitter.com/ianisulislam', label: 'Twitter' },
];

const projectTypes = [
  { value: 'web', label: 'Web App', icon: '🌐' },
  { value: 'mobile', label: 'Mobile App', icon: '📱' },
  { value: 'fullstack', label: 'Full Stack', icon: '⚡' },
  { value: 'api', label: 'API Dev', icon: '🔌' },
  { value: 'consulting', label: 'Consulting', icon: '💼' },
  { value: 'other', label: 'Other', icon: '✨' },
];

const budgetOptions = [
  { value: 'small', label: '$1k – $5k' },
  { value: 'medium', label: '$5k – $20k' },
  { value: 'large', label: '$20k+' },
  { value: 'custom', label: 'Custom' },
];

const timelineOptions = [
  { value: 'urgent', label: '< 1 Month' },
  { value: '1-3 months', label: '1-3 Months' },
  { value: '3-6 months', label: '3-6 Months' },
  { value: 'flexible', label: 'Flexible' },
];

const faqs = [
  { q: 'What happens after I submit the form?', a: "I'll review your project details within 24 hours and schedule a free 30-minute consultation call." },
  { q: "What's included in your quote?", a: 'Detailed project scope, timeline, cost estimation, technology stack recommendation, and maintenance plan.' },
  { q: 'Do you work with international clients?', a: 'Yes! I work with clients worldwide using modern remote collaboration tools.' },
  { q: "What's your typical project timeline?", a: 'Small: 2-4 weeks · Medium: 1-3 months · Large: 3-6 months. Custom timelines available.' },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
    projectType: 'web', budget: 'medium', timeline: '1-3 months',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 4000);
    return () => clearTimeout(t);
  }, [showSuccess]);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.trim().length < 10) e.message = 'At least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setIsSubmitting(true);
    try {
      await emailjs.sendForm('service_5jvvj5c', 'template_pga51qh', form.current, 'rTovarWJC2HfQcEt-');
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', projectType: 'web', budget: 'medium', timeline: '1-3 months' });
    } catch {
      setErrors({ submit: 'Failed to send. Please try again.' });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(16px)' }}>
          <CheckCircle size={20} style={{ color: '#10b981' }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--accent-green)' }}>Message Sent!</div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>I'll get back to you within 24h</div>
          </div>
        </div>
      )}

      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: 'var(--bg-primary)' }}>

        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="orb orb-indigo w-[500px] h-[500px] top-0 right-0 opacity-15" />
        <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-0 opacity-12" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-flex">
              <MessageSquare size={13} />
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4">
              Let's Build{' '}
              <span className="gradient-text animate-grad-shift">Together</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Ready to start your project? Fill out the form and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ── Left: Info ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Availability */}
              <div className="flex items-center justify-between p-4 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--accent-green)', opacity: 0.9 }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-500">Available for new projects</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">Open</span>
              </div>

              {/* Contact items */}
              <div className="flex flex-col gap-3">
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-glow)'; e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.background = 'var(--bg-card)'; }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}18`, border: `1px solid ${c.color}30`, color: c.color }}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.label}</div>
                      <div className="text-sm font-medium mt-0.5" style={{ color: 'var(--text-primary)' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-5 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>Connect on social</h4>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--bg-card-hover)';
                        e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                        e.currentTarget.style.color = 'var(--accent-indigo)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'var(--bg-card-hover)';
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="p-5 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>What to expect:</h4>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: <Clock size={15} />, title: '24-Hour Response', desc: 'Detailed quote within 24h' },
                    { icon: <Shield size={15} />, title: 'No-Spam Guarantee', desc: 'Your info stays private' },
                    { icon: <CheckCircle size={15} />, title: 'Free Consultation', desc: '30-min free project talk' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--accent-indigo)' }}>
                        {f.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{f.title}</div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <div className="p-6 md:p-8 rounded-2xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>

                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Get a Quote</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Fill out the form below to discuss your project</p>

                {errors.submit && (
                  <div className="flex items-center gap-2 p-3 rounded-lg mb-4 text-sm"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}>
                    <AlertCircle size={15} />
                    {errors.submit}
                  </div>
                )}
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-1"><User size={12} /> Full Name *</span>
                      </label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="John Doe"
                        className={`input-dark ${errors.name ? 'error' : ''}`}
                      />
                      {errors.name && <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#f87171' }}><AlertCircle size={11} />{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-1"><Mail size={12} /> Email *</span>
                      </label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className={`input-dark ${errors.email ? 'error' : ''}`}
                      />
                      {errors.email && <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#f87171' }}><AlertCircle size={11} />{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      <span className="flex items-center gap-1"><Phone size={12} /> Phone (Optional)</span>
                    </label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="input-dark"
                    />
                  </div>

                  {/* Hidden fields */}
                  <input type="hidden" name="projectType" value={formData.projectType} />
                  <input type="hidden" name="budget" value={formData.budget} />
                  <input type="hidden" name="timeline" value={formData.timeline} />

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Project Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {projectTypes.map((t) => (
                        <button
                          key={t.value} type="button"
                          onClick={() => setFormData(p => ({ ...p, projectType: t.value }))}
                          className="flex flex-col items-center gap-1 p-3 rounded-lg text-xs font-medium transition-all duration-200"
                          style={{
                            background: formData.projectType === t.value ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                            border: formData.projectType === t.value ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                            color: formData.projectType === t.value ? 'var(--accent-indigo)' : 'var(--text-muted)',
                          }}
                        >
                          <span>{t.icon}</span>
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget + Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Budget</label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b.value} type="button"
                            onClick={() => setFormData(p => ({ ...p, budget: b.value }))}
                            className="py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200"
                            style={{
                              background: formData.budget === b.value ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                              border: formData.budget === b.value ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                              color: formData.budget === b.value ? 'var(--accent-indigo)' : 'var(--text-muted)',
                            }}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Timeline</label>
                      <select
                        name="timeline" value={formData.timeline} onChange={handleChange}
                        className="input-dark"
                        style={{ cursor: 'pointer' }}
                      >
                        {timelineOptions.map((o) => (
                          <option key={o.value} value={o.value} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      <span className="flex items-center gap-1"><MessageSquare size={12} /> Project Description *</span>
                    </label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} rows={5}
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      className={`input-dark resize-none ${errors.message ? 'error' : ''}`}
                    />
                    {errors.message && <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#f87171' }}><AlertCircle size={11} />{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-3.5 text-sm rounded-xl"
                    style={{ borderRadius: '12px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message &amp; Get Quote
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl cursor-pointer transition-all duration-300"
                  style={{
                    background: openFaq === i ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    border: openFaq === i ? '1px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                  }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', color: 'var(--accent-indigo)' }}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{faq.q}</h4>
                      {openFaq === i && (
                        <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                      )}
                    </div>
                    <span className="text-xs transition-transform duration-200" style={{ color: 'var(--text-muted)', transform: openFaq === i ? 'rotate(90deg)' : 'rotate(0)' }}>›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;