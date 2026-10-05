import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Range from './components/Range.jsx';
import Machines from './components/Machines.jsx';
import Benefits from './components/Benefits.jsx';
import Service from './components/Service.jsx';
import Coverage from './components/Coverage.jsx';
import Faq from './components/Faq.jsx';
import ContactPanel from './components/ContactPanel.jsx';
import Footer from './components/Footer.jsx';
import { useReveals } from './hooks/useReveals.js';

/**
 * Static trust site following the leaflet order:
 * cover → introduction → vending offering (range + machines) → workplace
 * benefits → service & coverage → questions → contact.
 */
export default function App() {
  useReveals();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Range />
        <Machines />
        <Benefits />
        <Service />
        <Coverage />
        <Faq />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
