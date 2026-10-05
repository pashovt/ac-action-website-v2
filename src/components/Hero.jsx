import { useRef } from 'react';
import { hero } from '../content/site.js';
import { useVendIntro } from '../hooks/useVendIntro.js';
import MachineSvg from './MachineSvg.jsx';
import Product from './products/Product.jsx';
import Stripes from './Stripes.jsx';
import Icon from './Icon.jsx';

/**
 * Cover: navy banner with the AC Action machine. On load (once, ~3s) three
 * keypad presses each vend an item that pops out of the delivery bin and lands
 * beside the machine. Without motion/JS the items simply sit there already.
 */
export default function Hero() {
  const rootRef = useRef(null);
  useVendIntro(rootRef);
  return (
    <>
      <section id="top" className="hero" ref={rootRef} aria-labelledby="hero-title">
        <Stripes corner="tr" className="hero__stripes" />
        <Stripes corner="bl" className="hero__stripes" />
        <div className="hero__inner container">
          <div className="hero__copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className="hero__title">
              {hero.heading}
            </h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="hero__actions">
              <a className="btn btn--gold btn--lg" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="btn btn--outline btn--lg" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="hero__machine">
            <div className="hero__machine-frame" data-frame>
              <MachineSvg />
              {hero.vend.map((v, i) => (
                <span key={i} className={`vended vended--${i + 1}`} data-vended data-key={v.key} aria-hidden="true">
                  <Product type={v.item.type} variant={v.item.variant} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="At a glance">
        <ul className="trust__list container">
          {hero.trust.map((t, i) => (
            <li key={t.title}>
              <span className="trust__icon" aria-hidden="true">
                <Icon name={['install', 'restock', 'local'][i]} />
              </span>
              <span>
                <strong>{t.title}</strong>
                {t.body}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
