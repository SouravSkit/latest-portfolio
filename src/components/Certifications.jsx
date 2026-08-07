import { Award } from 'lucide-react';
import { certifications } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle eyebrow="Learning" title="Certifications" />

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 70} className="cert-card card-hover">
              <div className="cert-icon">
                <Award size={20} />
              </div>
              <div>
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer} · {cert.platform}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
