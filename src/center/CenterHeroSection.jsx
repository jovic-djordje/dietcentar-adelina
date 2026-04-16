import { Wave } from "../assets/Images";
import "./center.style.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const CenterHeroSection = () => {
  return (
    <section className="center-hero-section">
      <Wave className="hero-bg-shape" />
      <div className="center-hero-section-holder">
        <div className="center-hero-section-text-holder">
          <h1 className="center-hero-title hero-section-title">
            O Centru Adelina Tabaković
          </h1>
          <p className="center-hero-text hero-section-text">
            Stručna podrška zasnovana na nauci, iskustvu i vašim jedinstvenim
            potrebama za dugoročno zdravlje
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

export default CenterHeroSection;
