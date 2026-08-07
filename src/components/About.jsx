import { Database, Globe, GraduationCap, Layers, MapPin, MonitorSmartphone, Smartphone, Users } from 'lucide-react';
import { focusAreas, profile } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const AREA_ICONS = [Smartphone, Globe, Layers, Database];

export default function About() {
  const facts = [
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: GraduationCap, label: 'Education', value: 'B.E. Computer Science' },
    { icon: MonitorSmartphone, label: 'Focus', value: 'Mobile & Web Apps' },
    { icon: Users, label: 'Team Experience', value: '3 Companies' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="About Me" title="Software Engineer crafting delightful apps" />

        <div className="about-grid">
          <Reveal className="about-text">
            <p>{profile.summary}</p>
            <div className="facts">
              {facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <fact.icon size={17} className="fact-icon" />
                  <div>
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="focus-grid">
            {focusAreas.map((area, i) => {
              const Icon = AREA_ICONS[i % AREA_ICONS.length];
              return (
                <Reveal key={area.title} delay={i * 90} className="focus-card card-hover">
                  <div className="focus-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
