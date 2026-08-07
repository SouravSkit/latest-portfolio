import { Code2, Database, Layers, MonitorSmartphone, Sparkles, Users } from 'lucide-react';
import { skillGroups } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const ICONS = {
  code: Code2,
  database: Database,
  layers: Layers,
  sparkles: Sparkles,
  monitor: MonitorSmartphone,
  users: Users,
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="Toolbox"
          title="Skills & technologies"
          text="The languages, frameworks and tools I reach for to turn ideas into shipped products."
        />

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] || Code2;
            return (
              <Reveal key={group.category} delay={(i % 3) * 80} className="skill-group card-hover">
                <div className="skill-group-head">
                  <span className="skill-group-icon">
                    <Icon size={17} />
                  </span>
                  <h3>{group.category}</h3>
                </div>
                <div className="chips">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
