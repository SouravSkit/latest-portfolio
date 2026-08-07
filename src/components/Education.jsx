import { GraduationCap, Languages, Rocket } from 'lucide-react';
import { education, languages, passions } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle eyebrow="Background" title="Education & beyond" />

        <div className="edu-grid">
          <Reveal className="edu-card card-hover">
            <div className="edu-icon">
              <GraduationCap size={24} />
            </div>
            <div className="edu-body">
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <span className="period">{education.location} · {education.period}</span>
            </div>
          </Reveal>

          <Reveal delay={90} className="edu-card card-hover">
            <div className="edu-icon">
              <Rocket size={24} />
            </div>
            <div className="edu-body">
              <h3>Passions</h3>
              <div className="chips">
                {passions.map((p) => (
                  <span key={p} className="chip">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="edu-card card-hover">
            <div className="edu-icon">
              <Languages size={24} />
            </div>
            <div className="edu-body">
              <h3>Languages</h3>
              <div className="chips">
                {languages.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
