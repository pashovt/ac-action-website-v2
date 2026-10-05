import { machines, photos } from '../content/site.js';
import PanelHead from './PanelHead.jsx';

/** A few machine types AC Action installs (stock photos). */
export default function Machines() {
  return (
    <section id={machines.id} className="section machines theme-light" aria-labelledby="machines-title">
      <div className="container">
        <PanelHead id="machines-title" eyebrow={machines.eyebrow} heading={machines.heading} intro={machines.intro} />
        <ul className="machines__grid">
          {machines.items.map((m) => {
            const p = photos[m.photo];
            return (
              <li className="machine-card" key={m.title} data-reveal>
                <div className="machine-card__stage">
                  <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
                </div>
                <div className="machine-card__text">
                  <span className="machine-card__tag">{m.tag}</span>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
