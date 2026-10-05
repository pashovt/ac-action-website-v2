import { brand, contact, contactSection } from '../content/site.js';
import { trackEvent } from '../lib/analytics.js';
import PanelHead from './PanelHead.jsx';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import Stripes from './Stripes.jsx';

/** Contact details only (no enquiry form, per the client). */
export default function ContactPanel() {
  const rows = [
    {
      icon: 'phone',
      label: 'Call us',
      value: contact.phone ? (
        <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} onClick={() => trackEvent('contact_phone_click')}>
          {contact.phone}
        </a>
      ) : (
        <span className="tbc">Number to be confirmed</span>
      ),
    },
    {
      icon: 'mail',
      label: 'Email',
      value: contact.email ? (
        <a href={`mailto:${contact.email}`} onClick={() => trackEvent('contact_email_click')}>
          {contact.email}
        </a>
      ) : (
        <span className="tbc">Address to be confirmed</span>
      ),
    },
    { icon: 'pin', label: 'Area we serve', value: <span>{contact.area}</span> },
    { icon: 'building', label: 'Business', value: <span>{brand.legalName}</span> },
  ];
  return (
    <section id={contactSection.id} className="section contact-v2" aria-labelledby="contact-title">
      <Stripes corner="tr" className="section__stripes" />
      <div className="container contact-v2__grid">
        <div>
          <PanelHead id="contact-title" eyebrow={contactSection.eyebrow} heading={contactSection.heading} intro={contactSection.intro} />
          <div className="contact-v2__logo" data-reveal>
            <Logo />
            <p>{brand.tagline}</p>
          </div>
        </div>
        <ul className="contact-v2__rows" data-reveal>
          {rows.map((r) => (
            <li key={r.label}>
              <span className="contact-v2__icon" aria-hidden="true">
                <Icon name={r.icon} />
              </span>
              <span className="contact-v2__label">{r.label}</span>
              <span className="contact-v2__value">{r.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
