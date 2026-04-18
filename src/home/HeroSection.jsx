import { HiArrowNarrowRight } from "react-icons/hi";
import "./home.style.css";
import { HeroImage, HeroMobileImage } from "../assets/Images";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// Reusable varijante za fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-section-holder">
        <HeroImage className="hero-desktop-img" />
        <HeroMobileImage className="hero-mobile-img" />

        <div className="hero-inner">
          <div className="hero-section-text-holder">
            <motion.h1
              className="hero-section-title"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Nutricionistička podrška zasnovana na nauci
            </motion.h1>

            <motion.p
              className="hero-section-text"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Dobrodošli u Centar za nutricionizam i dijetetiku Adelina
              Tabaković. Pružamo individualizovanu, dugotrajnu podršku za vašu
              zdravstvenu transformaciju kroz stručnost i naučne dokaze.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              style={{ maxWidth: "310px", width: "100%" }}
            >
              <Link to="/kontakt" className="hero-btn-link">
                <button className="hero-section-btn">
                  Zakaži besplatnu inicijalnu konsultaciju
                  <div className="hero-btn-icon-holder">
                    <HiArrowNarrowRight className="hero-btn-icon" />
                  </div>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
