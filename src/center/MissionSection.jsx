import { MissionImg } from "../assets/Images";
import "./center.style.css";
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

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-section-holder">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ height: "100%" }}
        >
          <MissionImg className="mission-img" />
        </motion.div>

        <motion.div
          className="mission-section-text-holder"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mission-section-title"
            variants={textItemVariants}
          >
            Nauka, iskustvo i vaše jedinstvene potrebe
          </motion.h2>

          <motion.p
            className="mission-section-text"
            variants={textItemVariants}
          >
            Centar je osnovan s ciljem da pruži stručnu, individualnu i
            dugoročno održivu podršku osobama koje žele unaprijediti zdravlje
            kroz pravilnu ishranu. Pristup je zasnovan isključivo na naučnim
            dokazima, kliničkoj praksi i individualnoj procjeni.
          </motion.p>

          <motion.div
            className="mission-section-approach-text-holder"
            variants={textItemVariants}
          >
            <div className="approach">
              <h3 className="approach-title">Naučni pristup</h3>
              <p className="approach-text mission-section-text">
                Svaki plan ishrane je izgrađen na kliničkim dokazima i
                prilagođen vašim jedinstvenim potrebama.
              </p>
            </div>

            <div className="results approach">
              <h3 className="results-title approach-title">Rezultati</h3>
              <p className="results-text mission-section-text approach-text">
                Strukturirane konsultacije i follow-up sistemi osiguravaju
                održive promjene u vašem zdravlju.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
