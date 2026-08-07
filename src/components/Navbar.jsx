import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data.js';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Impact' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 140;
      let current = '';
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= pos) current = link.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav-logo-mark">SK</span>
          <span className="nav-logo-dot">.</span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${active === link.id ? 'active' : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost nav-cv" href={profile.cv} download="Sourav_Kumar_CV.pdf">
            <Download size={15} /> <span className="nav-cv-label">Resume</span>
          </a>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn nav-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link) => (
            <button key={link.id} className="nav-mobile-link" onClick={() => go(link.id)}>
              {link.label}
            </button>
          ))}
          <a
            className="nav-mobile-link nav-mobile-resume"
            href={profile.cv}
            download="Sourav_Kumar_CV.pdf"
            onClick={() => setOpen(false)}
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
