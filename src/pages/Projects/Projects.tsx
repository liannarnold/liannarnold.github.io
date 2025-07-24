import { useState, useEffect } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "Portfolio Website",
    url: "https://github.com/liannarnold/liannarnold.github.io",
    description: "A minimalist, responsive portfolio built with React and Vite.",
    tech: ["React", "Vite", "CSS"]
  }
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Projects | Liane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View projects by Liane Arnold, a Senior Software Developer with expertise in full-stack development');
    }
  }, []);

  return (
    <main className={styles.projectsContainer} aria-label="Projects page">
      <h1 className={styles.projectsTitle}>Projects</h1>
      <section className={styles.projectsList} aria-label="Project list">
        {projects.map((project, idx) => (
          <div
            className={`${styles.projectCard}${openIndex === idx ? ` ${styles.open}` : ""}`}
            key={project.name}
            tabIndex={0}
            onMouseEnter={() => setOpenIndex(idx)}
            onMouseLeave={() => setOpenIndex(null)}
            onFocus={() => setOpenIndex(idx)}
            onBlur={() => setOpenIndex(null)}
            aria-expanded={openIndex === idx}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectName}
            >
              {project.name}
            </a>
            <div className={styles.projectDetails} aria-hidden={openIndex !== idx}>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.projectTech}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;