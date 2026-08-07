import { Baby, Clapperboard, Eye, HeartPulse, ScanFace, ShoppingCart, Store, Target } from 'lucide-react';
import { projects } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const ICONS = {
  cart: ShoppingCart,
  play: Clapperboard,
  baby: Baby,
  heart: HeartPulse,
  store: Store,
  face: ScanFace,
  eye: Eye,
  target: Target,
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Projects I've built"
          text="From e-commerce and health apps to computer-vision experiments — production features and impactful prototypes."
        />

        <div className="project-grid">
          {projects.map((project, i) => {
            const Icon = ICONS[project.icon] || ShoppingCart;
            return (
              <Reveal key={project.title} delay={(i % 4) * 80} className="project-card card-hover">
                <div className="project-icon">
                  <Icon size={22} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
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
