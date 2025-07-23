import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Liane Arnold</title>
      </Helmet>
      <main className={`home-container ${styles.contactContainer}`} aria-label="Contact page">
        <section className="intro-section">
          <h1 className="name" tabIndex={0}>Contact</h1>
          {submitted ? (
            <div className={styles.contactSuccess} role="status">Thank you for reaching out!</div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit} autoComplete="off" aria-label="Contact form">
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Name"
              />
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="Email"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="cta-btn">Send Message</button>
            </form>
          )}
        </section>
      </main>
    </>
  );
};

export default Contact;