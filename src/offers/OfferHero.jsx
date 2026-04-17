import { HiArrowNarrowRight } from "react-icons/hi";

const OfferHero = () => {
  return (
    <section className="center-hero-section offer-hero-section">
      <div className="center-hero-section-holder offer-hero-section-holder">
        <div className="center-hero-section-text-holder offer-hero-section-text-holder">
          <h1 className="hero-section-title">Odaberi svoj paket usluga</h1>
          <p className="hero-section-text">
            Svaki program je jedinstven — kao i ti.
          </p>
          <button className="hero-section-btn">
            Zakaži besplatnu inicijalnu konsultaciju
            <div className="hero-btn-icon-holder">
              {" "}
              <HiArrowNarrowRight className="hero-btn-icon" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferHero;
