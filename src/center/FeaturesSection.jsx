import "./center.style.css";
import { GiLifeInTheBalance } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FeaturesImg } from "../assets/Images";
import { motion } from "motion/react";

const leftCardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <GiLifeInTheBalance className="features-icon" />,
      title: "Hormonske neravnoteže",
      text: "Štitna žlijezda, inzulinska rezistencija, kortizol i spolni hormoni zahtijevaju preciznu nutricionističku intervenciju.",
    },
    {
      id: 2,
      icon: <FaWeightScale className="features-icon" />,
      title: "Poremećaji tjelesne mase",
      text: "Gojaznost ili pothranjenost zahtijevaju individualiziran pristup s fokusom na dugoročne, održive promjene.",
    },
    {
      id: 3,
      icon: <MdBloodtype className="features-icon" />,
      title: "Metabolička oboljenja",
      text: "Autoimuna stanja i metabolički poremećaji mogu se značajno poboljšati kroz pravilno strukturirane planove ishrane.",
    },
    {
      id: 4,
      icon: <RiMentalHealthFill className="features-icon" />,
      title: "Mentalno zdravlje",
      text: "Stres, anksioznost i depresija mogu se ublažiti kroz nutritivnu podršku i pravilnu ishranu.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-section-holder">
        <motion.div
          className="features-section-text-holder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4>Specijalizacije</h4>
          <h2 className="features-section-title">
            Individualni pristup vašem zdravlju
          </h2>
          <p className="features-section-text">
            Svako zdravstveno stanje zahtijeva drugačiji pristup. Koristim
            znanstvene dokaze i klinički pristup da bi vam pružila terapiju koja
            je specifično dizajnirana za vaše potrebe.
          </p>
        </motion.div>

        <motion.div
          className="features-section-carts-holder"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Lijeve kartice */}
          {features.slice(0, 2).map((feature) => (
            <motion.div
              className="feature-cart"
              key={feature.id}
              variants={leftCardVariants}
            >
              <div className="feature-cart-width">
                {feature.icon}
                <div className="features-cart-text-holder">
                  <h3 className="feature-cart-title">{feature.title}</h3>
                  <p className="feature-cart-text">{feature.text}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Slika u sredini */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="features-img-wrapper"
          >
            <FeaturesImg className="features-img" />
          </motion.div>

          {/* Desne kartice */}
          {features.slice(2).map((feature) => (
            <motion.div
              className="feature-cart"
              key={feature.id}
              variants={rightCardVariants}
            >
              <div className="feature-cart-width">
                {feature.icon}
                <div className="features-cart-text-holder">
                  <h3 className="feature-cart-title">{feature.title}</h3>
                  <p className="feature-cart-text">{feature.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
