import { WaveLight } from "../assets/Images";
import "./contact.style.css";

const ContactHero = () => {
  return (
    <section className="contact-hero-section center-hero-section">
      <WaveLight className="hero-bg-shape" />
      <div className="contact-section-hero-holder">
        <div className="contact-hero-text-holder center-hero-section-text-holder">
          <h1 className="contact-section-title hero-section-title">
            Javite nam se
          </h1>
          <p className="contact-section-text hero-section-text">
            Dostupni smo za konsultacije uživo i online, gdje god da se
            nalazite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
