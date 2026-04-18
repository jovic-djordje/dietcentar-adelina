import "./home.style.css";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const LocationSection = () => {
  return (
    <section className="location">
      <div className="location-section-holder">
        <motion.div
          className="location-text-holder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="location-title">Kako do nas?</h2>
          <p className="location-text">
            Objekat se nalazi u neposrednoj blizini glavne autobuske stanice u
            naselju Stup
          </p>
        </motion.div>

        <motion.div
          className="location-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="location-info-holder">
            <div className="location-icon-holder">
              <FaLocationDot className="location-section-icon" />
            </div>
            <div className="address-info-holder">
              <p className="address">Džemala Bijedića 160B, Sarajevo 71000</p>
              <p className="work-hours">Pon - Pet : 09:00 - 20:00</p>
            </div>
          </div>
          <Link to="/ocentru" className="btn-link">
            <button className="hero-section-btn location-section-btn">
              Saznaj više o centru
              <div className="hero-btn-icon-holder">
                <HiArrowNarrowRight className="hero-btn-icon" />
              </div>
            </button>
          </Link>
        </motion.div>

        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.3793270856345!2d18.35467817602293!3d43.8506375710934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c99fa02aabb7%3A0x2c966ff4b62ce3e2!2sCentar%20za%20nutricionizam%20i%20dijetetiku%20Adelina%20Tabakovic!5e1!3m2!1sbs!2sba!4v1776162196229!5m2!1sbs!2sba"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokacija Diet centra"
          className="map"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default LocationSection;
