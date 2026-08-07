import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { profile } from '../data.js';

function useCountUp(target, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function useTypewriter(words, typeSpeed = 70, deleteSpeed = 38, pause = 1700) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timer;
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Stat({ value, suffix, label }) {
  const count = useCountUp(value);
  return (
    <div className="stat">
      <span className="stat-value gradient-text">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy fade-up">
          <span className="availability">
            <span className="pulse-dot" /> Available for opportunities
          </span>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-role">
            <Sparkles size={16} className="hero-spark" aria-hidden="true" />
            <span>{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href={profile.cv} download="Sourav_Kumar_CV.pdf">
              Download CV <Download size={17} />
            </a>
            <a className="btn btn-ghost" href="#projects">
              View My Work <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-contact">
            <a href={`mailto:${profile.email}`} className="hero-chip">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hero-chip">
              <Phone size={15} /> {profile.phone}
            </a>
            <span className="hero-chip">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>

          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <div className="hero-visual fade-up delay-2">
          <div className="code-card">
            <div className="code-card-head">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
              <span className="code-file">sourav.ts</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="tok-kw">const</span> <span className="tok-var">sourav</span>{' '}
                <span className="tok-op">=</span> {'{'}
                {'\n'}
                {'  '}role: <span className="tok-str">'React Native & React.js'</span>,
                {'\n'}
                {'  '}experience: <span className="tok-num">'5+ years'</span>,
                {'\n'}
                {'  '}stack: [
                {'\n'}
                {'    '}<span className="tok-str">'React Native'</span>, <span className="tok-str">'React.js'</span>,
                {'\n'}
                {'    '}<span className="tok-str">'Redux'</span>, <span className="tok-str">'TypeScript'</span>,
                {'\n'}
                {'  '}],
                {'\n'}
                {'  '}location: <span className="tok-str">'Bengaluru, India'</span>,
                {'\n'}
                {'  '}available: <span className="tok-bool">true</span>,
                {'\n'}
                {'}'};
              </code>
            </pre>
          </div>

          <div className="hero-stats">
            {profile.stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about section">
        <span className="mouse">
          <span className="mouse-wheel" />
        </span>
      </a>
    </section>
  );
}
