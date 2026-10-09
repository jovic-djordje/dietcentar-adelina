import { FooterLogo } from "../assets/Images";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./nav.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <motion.div
          className="footer-nav-holder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            to="#top"
            className="footer-nav-item-link"
            aria-label="Diet centar Adelina — vrh stranice"
          >
            <FooterLogo className="footer-logo" />
          </Link>

          <nav className="footer-nav" aria-label="Footer navigacija">
            <ul className="footer-nav-item-holder">
              <li className="footer-nav-item">
                <Link to="/" className="footer-nav-item-link">
                  Početna
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link to="/ocentru" className="footer-nav-item-link">
                  O centru
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link to="/omeni" className="footer-nav-item-link">
                  O meni
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link to="/usluge" className="footer-nav-item-link">
                  Usluge
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link to="/kontakt" className="footer-nav-item-link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer-socials-holder">
            <a
              href="https://www.instagram.com/dietcentar/"
              className="footer-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Posjetite Instagram profil Diet centra Adelina"
            >
              <FaInstagram className="footer-social-icon" aria-hidden="true" />
            </a>

            <a
              href="mailto:adelina.tabakovic25@gmail.com"
              className="footer-icon-link"
              aria-label="Pošaljite email Diet centru Adelina"
            >
              <BiLogoGmail className="footer-social-icon" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="footer-attribute"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="footer-rights">
            © 2026 Centar za nutricionizam i dijetetiku Adelina Tabaković. Sva
            prava zadržana.
          </p>

          <p className="prod">Design & Code by Adiho & Djordje</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
