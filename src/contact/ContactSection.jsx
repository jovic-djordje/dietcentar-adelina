import "./contact.style.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-holder">
        {/* Forma */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="firstName">Ime</label>
                <input type="text" id="firstName" placeholder="Ime" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName">Prezime</label>
                <input type="text" id="lastName" placeholder="Prezime" />
              </div>
            </div>

            <div className="contact-form-row">
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
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Poruka</label>
              <textarea
                id="message"
                placeholder="Napišite vašu poruku..."
                rows={6}
              />
            </div>

            <div className="contact-form-btn-holder">
              <button
                type="submit"
                className="contact-form-btn hero-section-btn"
              >
                Pošalji poruku
                <div className="hero-btn-icon-holder contact-btn-icon-holder">
                  <HiArrowNarrowRight className="hero-btn-icon contact-form-btn-icon" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
