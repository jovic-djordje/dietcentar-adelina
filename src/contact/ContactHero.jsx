import { WaveLight } from "../assets/Images";
import "./contact.style.css";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactHero = () => {
  return (
    <section className="contact-hero-section center-hero-section">
      <WaveLight className="hero-bg-shape" />
      <div className="contact-section-hero-holder">
        <div className="contact-hero-text-holder center-hero-section-text-holder">
          <motion.h1
            className="contact-section-title hero-section-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Javite nam se
          </motion.h1>

          <motion.p
            className="contact-section-text hero-section-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Dostupni smo za konsultacije uživo i online, gdje god da se
            nalazite.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
