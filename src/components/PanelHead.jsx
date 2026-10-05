/** Section heading: eyebrow, title and optional intro. */
export default function PanelHead({ id, eyebrow, heading, intro, className = '' }) {
  return (
    <div className={`panel-head ${className}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {heading}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
