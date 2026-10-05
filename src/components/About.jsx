import { about, photos } from '../content/site.js';
import PanelHead from './PanelHead.jsx';

/** Business introduction: photo beside text (reference-site layout). */
export default function About() {
  const p = photos[about.photo];
  return (
    <section id={about.id} className="section about theme-light" aria-labelledby="about-title">
      <div className="container about__grid">
        <figure className="about__photo" data-reveal>
          <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
        </figure>
        <div>
          <PanelHead id="about-title" eyebrow={about.eyebrow} heading={about.heading} />
          <div className="about__body" data-reveal>
            {about.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
