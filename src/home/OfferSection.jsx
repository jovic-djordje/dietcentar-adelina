import "./home.style.css";
import { IoBody } from "react-icons/io5";
import { IoNutrition } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa6";
import { BsClipboard2HeartFill } from "react-icons/bs";

const OfferSection = () => {
  const carts = [
    {
      id: 1,
      icon: <IoBody className="offer-cart-icon" />,
      title: "Analiza sastava tijela",
      text: "Precizan uvid u stanje organizma osnova pristupa",
    },
    {
      id: 2,
      icon: <IoNutrition className="offer-cart-icon" />,
      title: "Nutricionističke konsultacije",
      text: "Stručno vođeno savjetovanje potpuno prilagođeno tebi",
    },
    {
      id: 3,
      icon: <FaClipboardList className="offer-cart-icon" />,
      title: "Smjernice za ishranu",
      text: "Praktičan vodič koji olakšava svakodnevnu ishranu",
    },
    {
      id: 4,
      icon: <BsClipboard2HeartFill className="offer-cart-icon" />,
      title: "Individualni planovi ishrane",
      text: "Potpuno personalizirani planovi prema tvojim ciljevima",
    },
  ];

  return (
    <section className="offer-section">
      <div className="offer-section-holder">
        <div className="offer-section-text-holder">
          <h2 className="offer-section-title">Odaberi svoj paket usluga</h2>
          <p className="offer-section-text">
            Usluge su formirane na osnovu individualnih potreba svakog klijenta
          </p>
        </div>
        <div className="offer-carts-holder">
          {carts.map((cart) => (
            <div className="offer-cart">
              <div className="offer-cart-width">
                {cart.icon}
                <div className="offer-cart-text-holder">
                  <h3 className="offer-cart-title">{cart.title}</h3>
                  <p className="offer-cart-text">{cart.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
