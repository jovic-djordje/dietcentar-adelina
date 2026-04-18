import { WaveLight } from "../assets/Images";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OfferHero = () => {
  return (
    <section className="center-hero-section offer-hero-section">
      <WaveLight className="hero-bg-shape" />
      <div className="center-hero-section-holder offer-hero-section-holder">
        <div className="center-hero-section-text-holder offer-hero-section-text-holder">
          <motion.h1
            className="hero-section-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Odaberi svoj paket usluga
          </motion.h1>

          <motion.p
            className="hero-section-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Svaka usluga je osmišljena kao samostalan korak ili dio dugoročnog
            procesa — birajte ono što odgovara vašim potrebama.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default OfferHero;
