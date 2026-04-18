import { useState } from "react";
import "./contact.style.css";
import { HiArrowNarrowDown } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    id: 1,
    question: "Kako funkcionira konsultacija?",
    answer:
      "Početna konsultacija traje oko sat vremena i uključuje detaljnu procjenu vašeg zdravlja, navika i ciljeva. Adelina će sa vama razgovarati o vašoj medicinskoj istoriji, prehrani i životnom stilu kako bi razumjela vašu situaciju. Na kraju ćete dobiti personalizovani plan.",
  },
  {
    id: 2,
    question: "Mogu li se konsultovati online?",
    answer:
      "Da, sve konsultacije su dostupne online kroz sigurnu video konekciju. Ovo je idealno za klijente koji žive daleko ili preferiraju fleksibilnost rada iz kuće. Kvaliteta usluge je ista kao i pri konsultacijama uživo.",
  },
  {
    id: 3,
    question: "Koliko košta inicijalna konsultacija?",
    answer:
      "Inicijalna konsultacija je potpuno besplatna. To je odličan način da se upoznate sa Adelinom i da vidite da li je centar pravi izbor za vas. Nema obaveze nakon tog razgovora.",
  },
  {
    id: 4,
    question: "Koliko dugo traje tretman?",
    answer:
      "Dužina tretmana zavisi od vaših ciljeva i potreba. Neki klijenti vide rezultate za nekoliko mjeseci, dok drugi trebaju duže vrijeme. Adelina će sa vama dogovoriti realan vremenski okvir tokom prve konsultacije.",
  },
  {
    id: 5,
    question: "Radite li sa specifičnim zdravstvenim stanjima?",
    answer:
      "Centar radi sa različitim zdravstvenim stanjima i dijetetskim potrebama. Adelina ima iskustvo sa dijabetesom, srčanim bolestima, probavnim problemima i mnogim drugim stanjima. Kontaktirajte nas da vidite da li možemo pomoći vašoj specifičnoj situaciji.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-section-holder">
        <motion.div
          className="faq-section-text-holder offer-section-text-holder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="faq-section-title offer-section-title">
            Česta pitanja
          </h2>
          <p className="faq-section-text offer-section-text">
            Odgovori na pitanja koja često čujemo od novih klijenata.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {faqs.map((faq) => (
            <motion.div
              className={`faq-item ${openId === faq.id ? "faq-item--open" : ""}`}
              key={faq.id}
              onClick={() => toggle(faq.id)}
              variants={itemVariants}
            >
              <div className="faq-item-header">
                <h3 className="faq-item-question">{faq.question}</h3>
                <motion.div
                  className="faq-item-icon-holder"
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <HiArrowNarrowDown className="faq-item-icon" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.p
                    className="faq-item-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
