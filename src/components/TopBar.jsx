import { topBar } from '../content/site.js';

/** Thin announcement bar above the header (as on the client's reference site). */
export default function TopBar() {
  return (
    <div className="top-bar">
      <p className="container">{topBar}</p>
    </div>
  );
}
