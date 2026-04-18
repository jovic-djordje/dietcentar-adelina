import { CtaImg } from "../assets/Images";
import "./home.style.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const textVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-section-holder">
        <motion.div
          className="cta-section-text-holder"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="cta-section-title" variants={textItemVariants}>
            Spremni napraviti sledeći korak?
          </motion.h2>

          <motion.p className="cta-section-text" variants={textItemVariants}>
            Zakaži svoju konsultaciju i napravite prvi korak prema lakšem i
            uravnoteženom životu
          </motion.p>

          <motion.div
            variants={textItemVariants}
            style={{ maxWidth: "185px", width: "100%" }}
          >
            <Link to="/kontakt" className="btn-link">
              <button className="hero-section-btn cta-section-btn">
                Zakaži konsultaciju
                <div className="hero-btn-icon-holder">
                  <HiArrowNarrowRight className="hero-btn-icon" />
                </div>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="cta-img-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <CtaImg className="cta-section-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
