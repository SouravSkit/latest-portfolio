import { Download, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { profile } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="orb orb-4" aria-hidden="true" />
          <span className="contact-eyebrow">Contact</span>
          <h2 className="gradient-text">Let's build something great together</h2>
          <p>
            I'm currently open to React Native and React.js opportunities. Whether you have a
            project in mind, a role to fill, or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail size={17} /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <Phone size={17} /> {profile.phone}
            </a>
            <a className="btn btn-ghost" href={profile.cv} download="Sourav_Kumar_CV.pdf">
              <Download size={17} /> Download CV
            </a>
          </div>

          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn">
              <Linkedin size={19} /> <span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn">
              <Github size={19} /> <span>GitHub</span>
            </a>
            <a href={`mailto:${profile.email}`} className="social-btn">
              <Send size={19} /> <span>Email</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
