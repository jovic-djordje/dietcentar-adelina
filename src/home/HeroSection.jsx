import { HiArrowNarrowRight } from "react-icons/hi";
import "./home.style.css";
import { HeroImage, HeroMobileImage } from "../assets/Images";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-section-holder">
        <HeroImage className="hero-desktop-img" />
        <HeroMobileImage className="hero-mobile-img" />
        <div className="hero-inner">
          <div className="hero-section-text-holder">
            <h1 className="hero-section-title">
              Nutricionistička podrška zasnovana na nauci
            </h1>
            <p className="hero-section-text">
              Dobrodošli u Centar za nutricionizam i dijetetiku Adelina
              Tabaković. Pružamo individualizovanu, dugotrajnu podršku za vašu
              zdravstvenu transformaciju kroz stručnost i naučne dokaze.
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
      </div>
    </section>
  );
};

export default HeroSection;
