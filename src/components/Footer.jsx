import { FooterLogo, LogoLight } from "../assets/Images";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./nav.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-nav-holder">
          <Link to="/" className="footer-nav-item-link">
            <FooterLogo className="footer-logo" />
          </Link>
          <nav className="footer-nav">
            <ul className="footer-nav-item-holder">
              <Link to="/ocentru" className="footer-nav-item-link">
                <li className="footer-nav-item">O centru</li>
              </Link>

              <li className="footer-nav-item">O meni</li>
              <Link to="/usluge" className="footer-nav-item-link">
                <li className="footer-nav-item">Usluge</li>
              </Link>
              <Link to="/kontakt" className="footer-nav-item-link">
                <li className="footer-nav-item">Kontakt</li>
              </Link>
            </ul>
          </nav>
          <div className="footer-socials-holder">
            <FaInstagram className="footer-social-icon" />
            <BiLogoGmail className="footer-social-icon" />
          </div>
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
