import "./center.style.css";
import { GiLifeInTheBalance } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FeaturesImg } from "../assets/Images";

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
        <div className="features-section-text-holder">
          <h2 className="features-section-title">
            Individualni pristup vašem zdravlju
          </h2>
          <p className="features-section-text">
            Svako zdravstveno stanje zahtijeva drugačiji pristup. Koristim
            znanstvene dokaze i klinički pristup da bi vam pružila terapiju koja
            je specifično dizajnirana za vaše potrebe.
          </p>
        </div>

        <div className="features-section-carts-holder">
          {features.slice(0, 2).map((feature) => (
            <div className="feature-cart" key={feature.id}>
              <div className="feature-cart-width">
                {feature.icon}
                <div className="features-cart-text-holder">
                  <h3 className="feature-cart-title">{feature.title}</h3>
                  <p className="feature-cart-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
          <FeaturesImg className="features-img" />
          {features.slice(2).map((feature) => (
            <div className="feature-cart" key={feature.id}>
              <div className="feature-cart-width">
                {feature.icon}
                <div className="features-cart-text-holder">
                  <h3 className="feature-cart-title">{feature.title}</h3>
                  <p className="feature-cart-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
