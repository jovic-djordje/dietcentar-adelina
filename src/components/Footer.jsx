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
          <Link to="#top" className="footer-nav-item-link">
            <FooterLogo className="footer-logo" />
          </Link>

          <nav className="footer-nav">
            <ul className="footer-nav-item-holder">
              <Link to="/" className="footer-nav-item-link">
                <li className="footer-nav-item">Početna</li>
              </Link>
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
            <Link
              to="https://www.instagram.com/dietcentar/"
              className="footer-icon-link"
              target="_blank"
            >
              <FaInstagram className="footer-social-icon" />
            </Link>
            <a
              href="mailto:adelina.tabakovic25@gmail.com"
              className="footer-icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail className="footer-social-icon" />
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
          <p className="prod">Design&Code by Adiho & Djordje</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
