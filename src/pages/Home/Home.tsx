import { useEffect } from "react";
import styles from "./Home.module.css";

const GITHUB_URL = "https://github.com/liannarnold";
const LINKEDIN_URL = "https://www.linkedin.com/in/liannarnold/";

const Home = () => {
  // Update the title when the component mounts
  useEffect(() => {
    document.title = "Home | Liane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Liane Arnold - Senior Software Developer');
    }
  }, []);

  return (
    <main className={styles.homeContainer} aria-label="Home page">
      <section className={styles.introSection}>
        <h1 className={styles.name} tabIndex={0}>Liane Arnold</h1>
        <div className={styles.socialIcons} aria-label="Social links">
          <a href={GITHUB_URL} className="github-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
          </a>
          <a href={LINKEDIN_URL} className="linkedin-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z"/><circle cx="8" cy="8" r="2"/></svg>
          </a>
        </div>
        <p className={styles.titleLocation} tabIndex={0}>
          Senior Software Developer · Haughton, LA
        </p>
      </section>
    </main>
  );
};

export default Home;