import { motion } from "motion/react";
import {
  LuGraduationCap,
  LuPresentation,
  LuUniversity,
  LuGlobe,
} from "react-icons/lu";

const TimelineSection = () => {
  const features = [
    {
      id: 1,
      icon: <LuGraduationCap className="features-icon" />,
      title: "2016 - Početak obrazovanja",
      text: "Godine 2016. upisujem Srednju školu poljoprivrede, prehrane, veterine i uslužnih djelatnosti u Sarajevu, smjer nutricionizam, gdje postajem dio druge generacije nutricionista u Bosni i Hercegovini.",
    },
    {
      id: 2,
      icon: <LuPresentation className="features-icon" />,
      title: "Kongresi, edukacije i prvi rezultati",
      text: "Kao odličan učenik, paralelno sa školovanjem aktivno učestvujem na kongresima, edukacijama i stručnim skupovima, a prvi klijenti i njihovi rezultati potvrđuju mi da sam na pravom putu.",
    },
    {
      id: 3,
      icon: <LuUniversity className="features-icon" />,
      title: "Fakultet i akademski temelji",
      text: "Posebno sam ponosna na činjenicu da sam dio prve generacije diplomiranih zdravstvenih nutricionista–dijetetičara u Bosni i Hercegovini, nakon završenog studija na Fakultetu zdravstvenih studija u Sarajevu.",
    },
    {
      id: 4,
      icon: <LuGlobe className="features-icon" />,
      title: "Internacionalno iskustvo",
      text: "Tokom studija imala sam priliku učestvovati u studentskom programu u Sjedinjenim Američkim Državama, gdje sam stekla vrijedna internacionalna iskustva, ostvarila prve saradnje i započela rad sa klijentima iz inostranstva.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="timeline expertise-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="timeline-section-holder">
        <motion.div
          className="timeline-text-holder features-section-text-holder"
          variants={textVariants}
        >
          <h2 className="timeline-title features-section-title">
            Moj put kroz nutricionizam
          </h2>
          <p className="timeline-text features-section-text">
            Svaki korak mog obrazovanja i profesionalnog razvoja dodatno je
            oblikovao moj pristup radu - spoj nauke, iskustva, odgovornosti i
            individualne brige o zdravlju.
          </p>
        </motion.div>

        <motion.div
          className="features-section-carts-holder timeline-section-cards-holder"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              className="feature-cart timeline-cart"
              key={feature.id}
              variants={cardVariants}
              custom={index}
            >
              <div className="feature-cart-width timeline-cart-width">
                {feature.icon}
                <div className="features-cart-text-holder timeline-cart-text-holder">
                  <h3 className="feature-cart-title timeline-cart-title">
                    {feature.title}
                  </h3>
                  <p className="feature-cart-text timeline-cart-text">
                    {feature.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TimelineSection;
