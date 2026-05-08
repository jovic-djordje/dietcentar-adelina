import { StoryImg } from "../assets/Images";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./about.style.css";

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

const Story = () => {
  return (
    <section className="about-section mission-section">
      <div className="about-section-holder">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <StoryImg className="about-section-img" />
        </motion.div>

        <motion.div
          className="about-section-text-holder"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="about-section-title mission-section-title"
            variants={textItemVariants}
          >
            Priča koja je oblikovala moj poziv
          </motion.h3>

          <motion.p
            className="about-section-text story-section-text"
            variants={textItemVariants}
          >
            Moja odluka da se posvetim nutricionizmu nije nastala slučajno.
            Nastala je iz ličnog iskustva i dubokog uvjerenja da pravilna
            ishrana i dijetoterapija mogu imati ključnu ulogu u procesu
            ozdravljenja, oporavka i očuvanja zdravlja. Upravo ta spoznaja
            usmjerila me ka putu na kojem danas spajam znanje, praksu i
            individualan pristup svakom klijentu.
          </motion.p>

          <motion.p
            className="about-section-text story-section-text"
            variants={textItemVariants}
          >
            Danas svoj rad temeljim na stručnom znanju, kliničkom pristupu i
            preporukama prilagođenim stvarnim potrebama svakog klijenta.
          </motion.p>

          <motion.p
            className="about-section-text story-section-text"
            variants={textItemVariants}
          >
            Moj fokus nije na kratkoročnim promjenama, već na održivim
            rezultatima, zdravijem odnosu prema tijelu i dugoročnoj podršci kroz
            nutricionizam i dijetoterapiju.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
