import "./contact.style.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-holder">
        <motion.div
          className="contact-form-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <form className="contact-form">
            <motion.div className="contact-form-row" variants={itemVariants}>
              <div className="contact-form-group">
                <label htmlFor="firstName">Ime</label>
                <input type="text" id="firstName" placeholder="Ime" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName">Prezime</label>
                <input type="text" id="lastName" placeholder="Prezime" />
              </div>
            </motion.div>

            <motion.div className="contact-form-row" variants={itemVariants}>
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone">Broj telefona</label>
                <input type="tel" id="phone" placeholder="+387 61 000 000" />
              </div>
            </motion.div>

            <motion.div className="contact-form-group" variants={itemVariants}>
              <label htmlFor="message">Poruka</label>
              <textarea
                id="message"
                placeholder="Napišite vašu poruku..."
                rows={6}
              />
            </motion.div>

            <motion.div
              className="contact-form-btn-holder"
              variants={itemVariants}
            >
              <button
                type="submit"
                className="contact-form-btn hero-section-btn"
              >
                Pošalji poruku
                <div className="hero-btn-icon-holder contact-btn-icon-holder">
                  <HiArrowNarrowRight className="hero-btn-icon contact-form-btn-icon" />
                </div>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
