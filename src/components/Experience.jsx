import { Briefcase, ChevronRight, MapPin } from 'lucide-react';
import { experience } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="Career"
          title="Where I've worked"
          text="Five years of shipping production React Native and React.js applications across startups and product companies."
        />

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={15} />
              </div>
              <div className="job-card card-hover">
                <div className="job-head">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">
                      {job.company} · <MapPin size={12} /> {job.location}
                    </p>
                  </div>
                  <span className={`period ${job.current ? 'period-current' : ''}`}>
                    {job.current && <span className="pulse-dot" />}
                    {job.period}
                  </span>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>
                      <ChevronRight size={14} className="bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
