import "./contact.style.css";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "motion/react";
import supabase from "../library/supabase";

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
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    const sanitizedValue =
      name === "phone" ? value.replace(/[^0-9+\s-]/g, "") : value;

    setInput((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!input.first_name.trim())
      newErrors.first_name = "Ovo polje je obavezno";
    if (!input.last_name.trim()) newErrors.last_name = "Ovo polje je obavezno";
    if (!input.email.trim()) newErrors.email = "Ovo polje je obavezno";
    if (!input.phone.trim()) newErrors.phone = "Ovo polje je obavezno";
    if (!input.message.trim()) newErrors.message = "Ovo polje je obavezno";

    if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Unesite važeću email adresu";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          first_name: input.first_name,
          last_name: input.last_name,
          email: input.email,
          phone: input.phone,
          message: input.message,
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setInput({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error saving contact message:", error);
      setErrors({ general: "Došlo je do greške. Pokušajte ponovo." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-section-holder">
        <motion.div
          className="contact-form-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {success ? (
            <div className="success-message">
              <h3>Poruka je uspješno poslana!</h3>
              <p>Hvala što ste nas kontaktirali. Javićemo vam se uskoro.</p>
              <button
                type="button"
                className="contact-form-btn hero-section-btn"
                onClick={() => {
                  setSuccess(false);
                  setErrors({});
                  setInput({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    message: "",
                  });
                }}
              >
                Pošalji novu poruku
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {errors.general && (
                <p style={{ color: "red", marginBottom: "1rem" }}>
                  {errors.general}
                </p>
              )}

              <motion.div className="contact-form-row" variants={itemVariants}>
                <div className="contact-form-group">
                  <label htmlFor="firstName">Ime</label>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    placeholder="Ime"
                    value={input.first_name}
                    onChange={handleInput}
                  />
                  {errors.first_name && (
                    <p style={{ color: "red" }}>{errors.first_name}</p>
                  )}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="lastName">Prezime</label>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Prezime"
                    value={input.last_name}
                    onChange={handleInput}
                  />
                  {errors.last_name && (
                    <p style={{ color: "red" }}>{errors.last_name}</p>
                  )}
                </div>
              </motion.div>

              <motion.div className="contact-form-row" variants={itemVariants}>
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={input.email}
                    onChange={handleInput}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">Broj telefona</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+387 61 000 000"
                    value={input.phone}
                    onChange={handleInput}
                    inputMode="tel"
                    pattern="[0-9+\s-]+"
                  />
                  {errors.phone && (
                    <p style={{ color: "red" }}>{errors.phone}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="contact-form-group"
                variants={itemVariants}
              >
                <label htmlFor="message">Poruka</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Napišite vašu poruku..."
                  rows={6}
                  value={input.message}
                  onChange={handleInput}
                />
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message}</p>
                )}
              </motion.div>

              <motion.div
                className="contact-form-btn-holder"
                variants={itemVariants}
              >
                <button
                  type="submit"
                  className="contact-form-btn hero-section-btn"
                  disabled={loading}
                >
                  {loading ? "Šalje se..." : "Pošalji poruku"}
                  <div className="hero-btn-icon-holder contact-btn-icon-holder">
                    <HiArrowNarrowRight className="hero-btn-icon contact-form-btn-icon" />
                  </div>
                </button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
