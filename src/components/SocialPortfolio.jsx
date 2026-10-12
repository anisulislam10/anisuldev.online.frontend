import { createElement, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Grid3X3, Code2, Quote, Smartphone, Globe, Server, X, Github, Linkedin, Mail, MapPin, ArrowRight, BadgeCheck, Heart } from 'lucide-react';
import { projects } from '../data/projects';
import './SocialPortfolio.css';

const profileImage = 'https://avatars.githubusercontent.com/u/61471461?v=4';

const services = [
  { id: 'web', kind: 'services', title: 'Web experiences.\nMade to stand out.', subtitle: 'WEB DEVELOPMENT', image: '/services-web-laptop.png', description: 'Responsive websites and web applications built with React and Next.js. From a first landing page to a complete product.', tags: ['React', 'Next.js', 'TypeScript'] },
  { id: 'mobile', kind: 'services', title: 'Your idea.\nIn their pocket.', subtitle: 'MOBILE DEVELOPMENT', image: '/services-react-native-mobile.png', description: 'Cross-platform mobile applications with React Native, designed for a smooth experience on iOS and Android.', tags: ['React Native', 'Firebase', 'iOS & Android'] },
  { id: 'backend', kind: 'services', title: 'Strong foundations.\nRoom to grow.', subtitle: 'BACKEND & APIs', image: '/services-backend-server.png', description: 'APIs, databases, and deployment for products that need a dependable foundation.', tags: ['Node.js', 'PostgreSQL', 'Docker'] },
];
const quotes = [
  { id: 'quote-1', kind: 'quotes', title: 'Make it simple.\nMake it useful.\nMake it matter.', description: 'A design principle: give every feature a purpose, and make the next step easy to understand.', subtitle: 'A NOTE ON DESIGN' },
  { id: 'quote-2', kind: 'quotes', title: 'Great products\nstart with a\ngood question.', description: 'Before choosing a framework, understand the person using the product and the problem they need to solve.', subtitle: 'THINKING OUT LOUD' },
  { id: 'quote-3', kind: 'quotes', title: 'Small details.\nBetter experiences.', description: 'Readable text, helpful feedback, and thoughtful spacing all contribute to a product that feels easier to use.', subtitle: 'THE LITTLE THINGS' },
];
const projectPosts = projects.map((p, index) => ({ ...p, id: `project-${p.id}`, kind: 'projects', title: p.name, subtitle: `${p.category} / ${p.platform}`, tags: p.techStack, tone: index % 5 }));
const posts = [projectPosts[0], services[0], quotes[0], quotes[1], projectPosts[4], services[1], projectPosts[1], services[2], projectPosts[5], quotes[2], ...projectPosts.filter((_, i) => ![0, 4, 1, 5].includes(i))];
const filters = [{ id: 'all', label: 'All posts', Icon: Grid3X3 }, { id: 'projects', label: 'Projects', Icon: Code2 }, { id: 'services', label: 'Services', Icon: Globe }, { id: 'quotes', label: 'Notes & quotes', Icon: Quote }];

function PostVisual({ post }) {
  return <div className={`post-art post-art-${post.kind} tone-${post.tone ?? 0}`}>
    {post.kind === 'services' && <img src={post.image} alt="" loading="lazy" />}
    <span className="post-category">{post.subtitle}</span>
    {post.kind === 'quotes' && <Quote className="post-quote-icon" size={30} strokeWidth={1.3} />}
    {post.kind === 'projects' && <div className="post-project-symbol" aria-hidden="true">{post.platform === 'Mobile' ? <Smartphone size={54} strokeWidth={1} /> : <Code2 size={54} strokeWidth={1} />}</div>}
    <h3>{post.title}</h3>
    <div className="post-art-footer"><span>{post.kind === 'projects' ? post.tags.slice(0, 2).join(' + ') : post.kind === 'services' ? 'Let’s build together' : 'Ideas worth keeping'}</span><ArrowUpRight size={18} /></div>
  </div>;
}

function InteractivePost({ post, liked, onLike, onToggleLike, onOpen }) {
  const tapTimer = useRef(null);
  const [heartBurst, setHeartBurst] = useState(0);
  const burstId = useRef(0);

  useEffect(() => () => clearTimeout(tapTimer.current), []);

  const animateLike = () => {
    onLike(post.id);
    setHeartBurst(++burstId.current);
  };

  const handleClick = (event) => {
    // Keyboard activation opens details immediately; the heart button is also keyboard accessible.
    if (event.detail === 0) {
      clearTimeout(tapTimer.current);
      tapTimer.current = null;
      if (onOpen) onOpen(post);
      else animateLike();
      return;
    }
    if (tapTimer.current !== null) {
      clearTimeout(tapTimer.current);
      tapTimer.current = null;
      animateLike();
      return;
    }
    tapTimer.current = setTimeout(() => {
      tapTimer.current = null;
      onOpen?.(post);
    }, 340);
  };

  return <div className={`interactive-post${heartBurst ? ' heart-active' : ''}`}>
    <button className="portfolio-post" onClick={handleClick} aria-label={`${onOpen ? 'Open post' : 'Like post'}: ${post.title.replaceAll('\n', ' ')}. Double tap to like.`}>
      <PostVisual post={post} />
      {onOpen && <span className="post-hover">View {post.kind === 'projects' ? 'project' : post.kind === 'services' ? 'service' : 'note'} <ArrowUpRight size={18} /></span>}
      {heartBurst > 0 && <span key={heartBurst} className="post-heart-burst" aria-hidden="true" onAnimationEnd={() => setHeartBurst(0)}><Heart /></span>}
    </button>
    <button className={`post-like-button${liked ? ' is-liked' : ''}`} aria-label={`${liked ? 'Unlike' : 'Like'} ${post.title.replaceAll('\n', ' ')}`} aria-pressed={liked} onClick={() => {
      clearTimeout(tapTimer.current);
      tapTimer.current = null;
      if (liked) { onToggleLike(post.id); setHeartBurst(0); }
      else animateLike();
    }}><Heart size={18} fill={liked ? 'currentColor' : 'none'} /></button>
  </div>;
}

export default function SocialPortfolio() {
  const [filter, setFilter] = useState('all');
  const [likedPosts, setLikedPosts] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('portfolio-liked-posts') || '[]');
      return Array.isArray(saved) ? saved.filter(id => typeof id === 'string') : [];
    } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem('portfolio-liked-posts', JSON.stringify(likedPosts)); } catch { /* Likes still work when storage is unavailable. */ }
  }, [likedPosts]);
  const likePost = (id) => setLikedPosts(current => current.includes(id) ? current : [...current, id]);
  const toggleLike = (id) => setLikedPosts(current => current.includes(id) ? current.filter(value => value !== id) : [...current, id]);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const feedRef = useRef(null);
  const visiblePosts = filter === 'all' ? posts : posts.filter(post => post.kind === filter);

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [selected]);

  const showCategory = (category) => {
    setFilter(category);
    feedRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  };

  return <div className="social-portfolio">
    <header className="creator-profile">
      <div className="creator-avatar-ring"><img src={profileImage} alt="Anisul Islam" /></div>
      <div className="creator-info">
        <div className="creator-topline"><span className="creator-handle">anisul.dev <BadgeCheck className="creator-verified" size={22} aria-label="Verified profile" role="img" /></span><Link className="creator-message" to="/contact">Let’s talk <ArrowUpRight size={15} /></Link><a className="creator-icon-link" href="https://github.com/anisulislam10" target="_blank" rel="noopener noreferrer" aria-label="Anisul on GitHub"><Github size={20} /></a></div>
        <div className="creator-stats"><span><strong>{posts.length}</strong> posts</span><span><strong>{projects.length}</strong> projects</span><span><strong>{services.length}</strong> services</span></div>
        <h1>Anisul Islam</h1>
        <p className="creator-role">Software Engineer · Full-Stack Developer</p>
        <p className="creator-bio">Building web &amp; mobile apps that turn ideas into products.<br />React · Next.js · React Native · Node.js<br />Frontend experiences, backend APIs &amp; scalable databases.</p>
        <div className="creator-meta"><span><MapPin size={13} /> Islamabad, Pakistan</span><span className="creator-available"><i /> Open to work</span></div>
        <Link className="creator-contact" to="/contact">Have an idea? Let’s make it happen <ArrowUpRight size={14} /></Link>
      </div>
    </header>

    <nav className="story-highlights" aria-label="Portfolio highlights">
      <button onClick={() => showCategory('projects')}><span className="story-circle story-work"><Code2 size={27} strokeWidth={1.4} /></span>My work</button>
      <button onClick={() => showCategory('services')}><span className="story-circle story-services"><Globe size={27} strokeWidth={1.4} /></span>Services</button>
      <button onClick={() => { setSelected(services[1]); }}><span className="story-circle story-mobile"><Smartphone size={27} strokeWidth={1.4} /></span>Mobile apps</button>
      <button onClick={() => { setSelected(services[2]); }}><span className="story-circle story-backend"><Server size={27} strokeWidth={1.4} /></span>Behind the code</button>
      <button onClick={() => showCategory('quotes')}><span className="story-circle story-notes"><Quote size={27} strokeWidth={1.4} /></span>Little thoughts</button>
      <Link to="/about"><span className="story-circle story-about"><img src={profileImage} alt="" /></span>About me</Link>
    </nav>

    <section className="creator-feed" ref={feedRef} aria-label="Portfolio posts">
      <div className="feed-topbar"><span>A little work. A little inspiration. Double tap to like.</span><span>Made with intention <span aria-hidden="true">✳</span></span></div>
      <div className="feed-filters" role="group" aria-label="Filter posts">{filters.map(({ id, label, Icon }) => <button key={id} aria-pressed={filter === id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{createElement(Icon, { size: 15 })}<span>{label}</span></button>)}</div>
      <p className="sr-only" aria-live="polite">{visiblePosts.length} posts shown</p>
      <div className="post-grid">{visiblePosts.map(post => <InteractivePost key={post.id} post={post} liked={likedPosts.includes(post.id)} onLike={likePost} onToggleLike={toggleLike} onOpen={setSelected} />)}</div>
      <div className="feed-end"><span>You’ve seen the work. Let’s create what’s next.</span><Link to="/contact">Start a conversation <ArrowRight size={16} /></Link></div>
    </section>

    <dialog ref={dialogRef} className="post-dialog" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} aria-labelledby="post-title">
      {selected && <div className="post-dialog-content"><button className="post-close" onClick={() => setSelected(null)} aria-label="Close post" autoFocus><X size={20} /></button><InteractivePost post={selected} liked={likedPosts.includes(selected.id)} onLike={likePost} onToggleLike={toggleLike} /><div className="post-details"><div className="post-author"><img src={profileImage} alt="" /><span><strong className="post-author-handle">anisul.dev <BadgeCheck className="creator-verified" size={15} aria-label="Verified profile" role="img" /></strong><small>Anisul Islam · {selected.kind === 'quotes' ? 'Notes & quotes' : selected.kind}</small></span></div><span className="detail-category">{selected.subtitle}</span><h2 id="post-title">{selected.title}</h2><p>{selected.description}</p>{selected.tags && <div className="post-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}<div className="post-detail-actions">{selected.liveUrl && <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">Explore project <ArrowUpRight size={16} /></a>}<Link to="/contact">{selected.kind === 'services' ? 'Discuss your project' : 'Let’s talk'} <Mail size={16} /></Link></div><a className="post-linkedin" href="https://linkedin.com/in/ianisulislam" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> Connect on LinkedIn</a></div></div>}
    </dialog>
  </div>;
}
