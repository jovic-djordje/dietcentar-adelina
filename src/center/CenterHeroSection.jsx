import { Wave } from "../assets/Images";
import "./center.style.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CenterHeroSection = () => {
  return (
    <section className="center-hero-section">
      <Wave className="hero-bg-shape" />
      <div className="center-hero-section-holder">
        <div className="center-hero-section-text-holder">
          <motion.h1
            className="center-hero-title hero-section-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            O Centru Adelina Tabaković
          </motion.h1>

          <motion.p
            className="center-hero-text hero-section-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Stručna podrška zasnovana na nauci, iskustvu i vašim jedinstvenim
            potrebama za dugoročno zdravlje
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
    </section>
  );
};

export default CenterHeroSection;
