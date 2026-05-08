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

const FoundationSection = () => {
  const expertises = [
    {
      id: 1,
      num: "01",
      title: "Akademsko obrazovanje",
      text: "Obrazovanje iz oblasti zdravstvenog nutricionizma i dijetetike predstavlja temelj mog profesionalnog rada",
    },
    {
      id: 2,
      num: "02",
      title: "Klinički i individualni pristup",
      text: "Svakom klijentu pristupam individualno, uzimajući u obzir zdravstveno stanje, ciljeve i životne navike",
    },
    {
      id: 3,
      num: "03",
      title: "Kontinuirano usavršavanje",
      text: "Redovno ulažem u nova znanja kroz stručne edukacije, seminare i profesionalne programe",
    },
    {
      id: 4,
      num: "04",
      title: "Iskustvo u radu s klijentima",
      text: "Kroz rad sa različitim profilima klijenata razvila sam pristup koji je stručan, realan i održiv",
    },
    {
      id: 5,
      num: "05",
      title: "Međunarodna perspektiva",
      text: "Iskustva iz inostranstva proširila su moje vidike i omogućila mi rad sa klijentima širom svijeta",
    },
    {
      id: 6,
      num: "06",
      title: "Vlastiti profesionalni centar",
      text: "Edukacija Start Your Business omogućila mi je da svoje znanje, iskustvo i viziju pretočim u vlastiti profesionalni centar",
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
            Temelji mog rada
          </h2>
          <p className="expertise-section-text features-section-text">
            Nakon formalnog obrazovanja nastavila sam intenzivno ulagati u
            dodatne edukacije i stručno usavršavanje, kako bih svojim klijentima
            pružila još kvalitetniju, stručniju i dugoročnu podršku.
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

export default FoundationSection;
