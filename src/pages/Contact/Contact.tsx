import { useState, useEffect } from "react";
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

  // Update the title when the component mounts
  useEffect(() => {
    document.title = "Contact | Liane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Liane Arnold, Senior Software Developer');
    }
  }, []);

  return (
    <main className={`${styles.contactContainer} container container--narrow`} aria-label="Contact page">
      <section className={styles.introSection}>
        <h1 className={styles.name} tabIndex={0}>Contact</h1>
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
              className={styles.input}
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
              className={styles.input}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
            <button type="submit" className={styles.ctaBtn}>Send Message</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Contact;