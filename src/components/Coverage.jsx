import { coverage } from '../content/site.js';
import PanelHead from './PanelHead.jsx';
import PostcodeChecker from './PostcodeChecker.jsx';
import CoverageMap from './CoverageMap.jsx';

const MAP_PLACES = [
  { name: 'Nottingham', angle: 0, miles: 0 },
  { name: 'West Bridgford', angle: 150, miles: 2 },
  { name: 'Beeston', angle: 235, miles: 3.5 },
  { name: 'Arnold', angle: 15, miles: 4 },
  { name: 'Carlton', angle: 80, miles: 3.5 },
  { name: 'Clifton', angle: 195, miles: 4 },
  { name: 'Hucknall', angle: 340, miles: 7 },
  { name: 'Ilkeston', angle: 280, miles: 8 },
  { name: 'Long Eaton', angle: 235, miles: 8.5 },
  { name: 'Bingham', angle: 95, miles: 9 },
  { name: 'Eastwood', angle: 305, miles: 8 },
  { name: 'Ruddington', angle: 175, miles: 5 },
];

/** Service area: places served, postcode checker and a radius map. */
export default function Coverage() {
  return (
    <section id={coverage.id} className="section coverage-v2" aria-labelledby="coverage-title">
      <div className="container coverage-v2__grid">
        <div className="coverage-v2__text">
          <PanelHead id="coverage-title" eyebrow={coverage.eyebrow} heading={coverage.heading} intro={coverage.body} />
          <ul className="coverage__list" data-reveal>
            {coverage.places.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <PostcodeChecker />
        </div>
        <CoverageMap places={MAP_PLACES} />
      </div>
    </section>
  );
}
