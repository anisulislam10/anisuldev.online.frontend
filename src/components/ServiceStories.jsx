import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';
import './ServiceStories.css';

const STORY_DURATION = 7000;

export default function ServiceStories({ stories, initialIndex = 0, profileImage, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hidden, setHidden] = useState(document.hidden);
  const [progress, setProgress] = useState(0);
  const elapsed = useRef(0);
  const dialogRef = useRef(null);
  const story = stories[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    const visibilityChanged = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', visibilityChanged);
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      document.removeEventListener('visibilitychange', visibilityChanged);
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    if (paused || hidden) return;
    let frame;
    let last = performance.now();
    const tick = (now) => {
      elapsed.current += now - last;
      last = now;
      setProgress(Math.min(elapsed.current / STORY_DURATION, 1));
      if (elapsed.current >= STORY_DURATION) {
        elapsed.current = 0;
        setProgress(0);
        if (index === stories.length - 1) onClose();
        else setIndex(index + 1);
      } else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [index, paused, hidden, stories.length, onClose]);

  const goTo = (nextIndex) => {
    if (nextIndex >= stories.length) { onClose(); return; }
    elapsed.current = 0;
    setProgress(0);
    setIndex(Math.max(0, nextIndex));
  };

  return <dialog className="service-stories" ref={dialogRef} aria-labelledby="service-story-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(index + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(index - 1); }
  }}>
    <div className={`service-story-frame${story.groups ? ' story-has-stack' : ''}`}>
      <img className="service-story-image" src={story.image} alt={`${story.subtitle.toLowerCase()} illustration`} />
      <div className="service-story-shade" />
      <div className="service-story-top">
        <div className="service-story-progress" aria-label={`Story ${index + 1} of ${stories.length}`}>
          {stories.map((item, i) => <button key={item.id} aria-label={`View ${item.subtitle.toLowerCase()} story`} aria-current={i === index ? 'step' : undefined} onClick={() => goTo(i)}><span style={{ transform: `scaleX(${i < index ? 1 : i === index ? progress : 0})` }} /></button>)}
        </div>
        <div className="service-story-author"><img src={profileImage} alt="" /><span><strong>anisul.dev <BadgeCheck size={14} /></strong><small>{story.groups ? 'Tech stack' : 'Services'} · {index + 1} / {stories.length}</small></span><button onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play stories' : 'Pause stories'}>{paused ? <Play size={19} /> : <Pause size={19} />}</button><button onClick={onClose} aria-label="Close stories" autoFocus><X size={23} /></button></div>
      </div>
      <button className="service-story-prev" onClick={() => goTo(index - 1)} aria-label="Previous story"><ChevronLeft size={24} /></button>
      <button className="service-story-next" onClick={() => goTo(index + 1)} aria-label={index === stories.length - 1 ? 'Finish stories' : 'Next story'}><ChevronRight size={24} /></button>
      <div className="service-story-copy" aria-live="polite">
        <span className="service-story-category">{story.subtitle}</span>
        <h2 id="service-story-title">{story.title}</h2>
        <p>{story.description}</p>
        {story.groups ? <div className="story-stack-groups">{story.groups.map(group => <section key={group.name}><h3>{group.name}</h3><div className="service-story-tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>)}</div> : <div className="service-story-tags">{story.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
        <Link to="/contact" onClick={onClose}>Let’s build your project <ArrowUpRight size={18} /></Link>
        <small>{paused ? 'Paused · take your time exploring' : 'Services & tech stack · tap the arrows to browse'}</small>
      </div>
    </div>
  </dialog>;
}
