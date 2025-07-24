import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred. Please try again later.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className={styles.contactSuccess} role="status">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <>
            {error && <div className={styles.errorMessage} role="alert">{error}</div>}
            <form 
              className={styles.contactForm} 
              onSubmit={handleSubmit} 
              autoComplete="off" 
              aria-label="Contact form"
            >
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className={`${styles.input} ${styles.textarea}`}
                rows={5}
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className={styles.ctaBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
};

export default Contact;