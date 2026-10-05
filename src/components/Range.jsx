import { range } from '../content/site.js';
import PanelHead from './PanelHead.jsx';
import Product from './products/Product.jsx';

/** What we stock: three ranges with product models and short bullet lists. */
export default function Range() {
  return (
    <section id={range.id} className="section range" aria-labelledby="range-title">
      <div className="container">
        <PanelHead id="range-title" eyebrow={range.eyebrow} heading={range.heading} intro={range.intro} />
        <ul className="range__grid">
          {range.categories.map((c) => (
            <li className="range-card" key={c.title} data-reveal>
              <div className="range-card__stage" aria-hidden="true">
                <span className="range-card__glow" />
                {c.products.map((p, i) => (
                  <div className="range-card__product" key={i} style={{ '--i': i }}>
                    <Product type={p.type} variant={p.variant} />
                  </div>
                ))}
              </div>
              <h3 className="range-card__title">{c.title}</h3>
              <ul className="range-card__points">
                {c.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
