import { AboutSectionImage } from "../assets/Images";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./home.style.css";

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

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section-holder">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutSectionImage className="about-section-img" />
        </motion.div>

        <motion.div
          className="about-section-text-holder"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="about-section-title"
            variants={textItemVariants}
          >
            Tko je Adelina Tabaković?
          </motion.h3>

          <motion.p className="about-section-text" variants={textItemVariants}>
            Moj profesionalni put započeo je prije više od deset godina kada sam
            svjedočila snazi pravilne ishrane u procesu ozdravljenja bliske
            osobe.
          </motion.p>

          <motion.p className="about-section-text" variants={textItemVariants}>
            Dio sam prve generacije diplomiranih zdravstvenih
            nutricionista-dijetetičara u BiH, sa međunarodnim iskustvom i
            klijentima širom svijeta.
          </motion.p>

          <motion.p className="about-section-text" variants={textItemVariants}>
            Danas vodim vlastiti centar — stručna i dugoročna podrška kroz
            nutricionizam, uz potpunu brigu o zdravlju svakog klijenta.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            style={{ maxWidth: "185px", width: "100%" }}
          >
            <Link to="/omeni" className="btn-link">
              <button className="about-section-btn hero-section-btn">
                Saznaj više o meni{" "}
                <div className="hero-btn-icon-holder">
                  <HiArrowNarrowRight className="hero-btn-icon" />
                </div>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
