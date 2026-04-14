import { CtaImg } from "../assets/Images";
import "./home.style.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-section-holder">
        <div className="cta-section-text-holder">
          <h2 className="cta-section-title">
            Spremni napraviti sledeći korak?
          </h2>
          <p className="cta-section-text">
            Zakaži svoju konsultaciju i napravite prvi korak prema lakšem i
            uravnoteženom životu
          </p>
          <button className="hero-section-btn cta-section-btn">
            Zakaži konsultaciju
            <div className="hero-btn-icon-holder">
              {" "}
              <HiArrowNarrowRight className="hero-btn-icon" />
            </div>
          </button>
        </div>
        <div className="cta-img-wrapper">
          <CtaImg className="cta-section-img" />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
