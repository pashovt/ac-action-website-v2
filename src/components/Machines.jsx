import { machines } from '../content/site.js';
import PanelHead from './PanelHead.jsx';
import MachineSvg from './MachineSvg.jsx';

/** A few machine types AC Action installs (illustrations). */
export default function Machines() {
  return (
    <section id={machines.id} className="section machines theme-light" aria-labelledby="machines-title">
      <div className="container">
        <PanelHead id="machines-title" eyebrow={machines.eyebrow} heading={machines.heading} intro={machines.intro} />
        <ul className="machines__grid">
          {machines.items.map((m) => (
            <li className="machine-card" key={m.variant} data-reveal>
              <div className="machine-card__stage">
                <MachineSvg variant={m.variant} title={`Illustration of a ${m.title.toLowerCase()}`} />
              </div>
              <div className="machine-card__text">
                <span className="machine-card__tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="machines__note">{machines.note}</p>
      </div>
    </section>
  );
}
