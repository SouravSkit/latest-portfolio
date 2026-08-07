import Reveal from './Reveal.jsx';

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal className="section-title-wrap">
      <div className="section-title">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="gradient-text">{title}</h2>
      </div>
      {text && <p className="section-lead">{text}</p>}
    </Reveal>
  );
}
