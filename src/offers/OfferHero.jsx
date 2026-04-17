import { WaveLight } from "../assets/Images";

const OfferHero = () => {
  return (
    <section className="center-hero-section offer-hero-section">
      <WaveLight className="hero-bg-shape" />
      <div className="center-hero-section-holder offer-hero-section-holder">
        <div className="center-hero-section-text-holder offer-hero-section-text-holder">
          <h1 className="hero-section-title">Odaberi svoj paket usluga</h1>
          <p className="hero-section-text">
            Svaka usluga je osmišljena kao samostalan korak ili dio dugoročnog
            procesa — birajte ono što odgovara vašim potrebama.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferHero;
