import { LogoLight } from "../assets/Images";
import "./nav.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-nav-holder">
          <LogoLight className="footer-logo" />
          <nav className="footer-nav">
            <ul className="footer-nav-item-holder">
              <li className="footer-nav-item">O centru</li>
              <li className="footer-nav-item">O meni</li>
              <li className="footer-nav-item">Usluge</li>
              <li className="footer-nav-item">Kontakt</li>
            </ul>
          </nav>
        </div>
        <div className="footer-attribute">
          <p className="footer-rights">
            © 2026 Centar za nutricionizam i dijetetiku Adelina Tabaković. Sva
            prava zadržana.
          </p>
          <p className="prod">Design&Code by Adiho & Djordje</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
