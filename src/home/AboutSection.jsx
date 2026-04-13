import { AboutSectionImage } from "../assets/Images";
import { HiArrowNarrowRight } from "react-icons/hi";

import "./home.style.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section-holder">
        <AboutSectionImage className="about-section-img" />
        <div className="about-section-text-holder">
          <h3 className="about-section-title">Tko je Adelina Tabaković?</h3>
          <p className="about-section-text">
            Moj profesionalni put započeo je prije više od deset godina kada sam
            svjedočila snazi pravilne ishrane u procesu ozdravljenja bliske
            osobe.
          </p>
          <p className="about-section-text">
            Dio sam prve generacije diplomiranih zdravstvenih
            nutricionista-dijetetičara u BiH, sa međunarodnim iskustvom i
            klijentima širom svijeta.
          </p>
          <p className="about-section-text">
            Danas vodim vlastiti centar — stručna i dugoročna podrška kroz
            nutricionizam, uz potpunu brigu o zdravlju svakog klijenta.
          </p>
          <button className="about-section-btn hero-section-btn">
            Saznaj više o meni{" "}
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

export default AboutSection;
