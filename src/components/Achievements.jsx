import { achievements } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="Impact"
          title="Key achievements"
          text="A few numbers from the products I've worked on."
        />

        <div className="achievement-grid">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="achievement-card card-hover">
              <span className="achievement-metric gradient-text">{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
