import "./center.style.css";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ExpertiseSection = () => {
  const expertises = [
    {
      id: 1,
      num: "01",
      title: "Medicinska nutricionistička terapija",
      text: "Klinički dokazani planovi ishrane za različita stanja",
    },
    {
      id: 2,
      num: "02",
      title: "Žensko zdravlje tijekom trudnoće i nakon poroda",
      text: "Specijalizirana podrška za sve faze ženskog zdravlja",
    },
    {
      id: 3,
      num: "03",
      title: "Edukacija i savjetovanje za dugoročne promjene",
      text: "Učite kako pravilna ishrana mijenja vaš kvalitet života",
    },
    {
      id: 4,
      num: "04",
      title: "Kontrola tjelesne mase i metaboličko zdravlje",
      text: "Dugoročne strategije za održavanje zdrave tjelesne mase",
    },
    {
      id: 5,
      num: "05",
      title: "Nutritivna podrška za mentalno zdravlje",
      text: "Ishrana kao alat za ublažavanje anksioznosti i stresa",
    },
    {
      id: 6,
      num: "06",
      title: "Online konsultacije bez granica",
      text: "Gdje god se nalazili, možete računati na našu podršku",
    },
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-section-holder features-section-holder">
        <motion.div
          className="expertise-section-text-holder features-section-text-holder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4>Stručnost</h4>
          <h2 className="expertise-section-title features-section-title">
            Na koji način vas podržavamo
          </h2>
          <p className="expertise-section-text features-section-text">
            Pored kliničkog rada, Centar pruža i stručnu podršku u svim ključnim
            oblastima
          </p>
        </motion.div>

        <motion.div
          className="expertise-section-carts-holder"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {expertises.map((expertise) => (
            <motion.div
              className="expertise-cart"
              key={expertise.id}
              variants={cardVariants}
            >
              <div className="expertise-cart-width">
                <span>{expertise.num}</span>
                <div className="exeprtise-cart-text-holder">
                  <h3 className="expertise-cart-title">{expertise.title}</h3>
                  <p className="expertise-cart-text">{expertise.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
