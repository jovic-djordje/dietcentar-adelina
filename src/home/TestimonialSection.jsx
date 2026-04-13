import {
  TestimonialImgFive,
  TestimonialImgFour,
  TestimonialImgOne,
  TestimonialImgSix,
  TestimonialImgThree,
  TestimonialImgTwo,
} from "../assets/Images";
import "./home.style.css";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      icon: <FaStar />,
      text: "' Adelina je detaljna i ozbiljna doktorica, spremna tražiti srž problema. Topla preporuka svakome ko se bori sa viškom kilograma, a obične dijete ne djeluju. '",
      profileImg: <TestimonialImgOne />,
      name: "Hanna Tafro",
    },
    {
      id: 2,
      icon: <FaStar />,
      text: "' Plan je prilagođen mojim navikama, komunikacija i podrška su odlični. Prezadovoljna sam rezultatima i osjećajem od kada pratim njihove savjete. '",
      profileImg: <TestimonialImgTwo />,
      name: "Elma Nazifović",
    },
    {
      id: 3,
      icon: <FaStar />,
      text: "' Pristup je izuzetno profesionalan, planovi prilagođeni stvarnim potrebama. Osjećam se mnogo zdravije i energičnije. Čista petica! '",
      profileImg: <TestimonialImgThree />,
      name: "Matej Kale",
    },
    {
      id: 4,
      icon: <FaStar />,
      text: "' Adelina detaljno objašnjava sve i ništa ne prepušta slučaju. Plan je realan, lako se prati i daje rezultate. Svaka preporuka! '",
      profileImg: <TestimonialImgFour />,
      name: "Kenan Hodžić",
    },
    {
      id: 5,
      icon: <FaStar />,
      text: "' Najbolje mjesto za sve koji žele zdravlje, ravnotežu i osmijeh! Adelina pristupa svima sa iskrenom pažnjom i ljubavlju ❤️ '",
      profileImg: <TestimonialImgFive />,
      name: "Irma Hajdarević",
    },
    {
      id: 6,
      icon: <FaStar />,
      text: "' Zahvaljujući njenom stručnom vođenju uspio sam smršati 7kg za samo mjesec dana — bez gladovanja, bez stresa, uz osjećaj da zaista brinem o svom zdravlju.'",
      profileImg: <TestimonialImgSix />,
      name: "Nedim",
    },
  ];

  return (
    <section className="test-section">
      <div className="test-section-holder">
        <div className="test-section-text-holder">
          <h3 className="test-section-title">Iskustva klijenata</h3>
          <p className="test-section-text">
            Saznajte što kažu oni koji su već transformisali svoje zdravlje
          </p>
        </div>
        <div className="test-marquee-wrapper">
          <div className="test-marquee-track">
            {[...testimonials, ...testimonials].map((test, index) => (
              <div className="testimonial-cart" key={index}>
                <div className="offer-cart-width test-cart-width">
                  <div className="test-cart-rating-holder">
                    <span>{test.icon}</span>
                    <span>{test.icon}</span>
                    <span>{test.icon}</span>
                    <span>{test.icon}</span>
                    <span>{test.icon}</span>
                  </div>
                  <p className="test-cart-text">{test.text}</p>
                  <div className="test-cart-profile-holder">
                    {test.profileImg}
                    <span className="test-cart-name">{test.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
