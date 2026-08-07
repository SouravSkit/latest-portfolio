import { Github, Heart, Linkedin } from 'lucide-react';
import { profile } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">
          © {year} {profile.name}. Crafted with <Heart size={13} className="footer-heart" /> using
          React & Vite.
        </span>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
