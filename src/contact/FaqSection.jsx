import { useState } from "react";
import "./contact.style.css";
import { HiArrowNarrowDown } from "react-icons/hi";

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

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-section-holder">
        <div className="faq-section-text-holder offer-section-text-holder">
          <h2 className="faq-section-title offer-section-title">
            Česta pitanja
          </h2>
          <p className="faq-section-text offer-section-text">
            Odgovori na pitanja koja često čujemo od novih klijenata.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              className={`faq-item ${openId === faq.id ? "faq-item--open" : ""}`}
              key={faq.id}
              onClick={() => toggle(faq.id)}
            >
              <div className="faq-item-header">
                <h3 className="faq-item-question">{faq.question}</h3>
                <div className="faq-item-icon-holder">
                  <HiArrowNarrowDown className="faq-item-icon" />
                </div>
              </div>
              {openId === faq.id && (
                <p className="faq-item-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
