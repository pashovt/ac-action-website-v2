import { service } from '../content/site.js';
import PanelHead from './PanelHead.jsx';
import Icon from './Icon.jsx';

/** "We look after everything": installation, restocking, maintenance, local contact. */
export default function Service() {
  return (
    <section id={service.id} className="section service-v2 theme-light" aria-labelledby="service-title">
      <div className="container service-v2__grid">
        <PanelHead id="service-title" eyebrow={service.eyebrow} heading={service.heading} intro={service.intro} />
        <ul className="blocks">
          {service.blocks.map((b) => (
            <li className="block" key={b.title} data-reveal>
              <span className="block__icon" aria-hidden="true">
                <Icon name={b.icon} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
