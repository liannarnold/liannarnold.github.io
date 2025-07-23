import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./About.module.css";
import { FaAndroid, FaReact, FaPhp, FaDocker } from "react-icons/fa";
import { SiReact, SiGo, SiKotlin, SiJavascript, SiTypescript, SiRancher, SiPostgresql, SiPostman } from "react-icons/si";
import { MdSmartphone } from "react-icons/md";

const skills = [
  { name: "Android", icon: <FaAndroid title="Android" /> },
  { name: "React Native", icon: <MdSmartphone title="React Native" /> },
  { name: "React", icon: <FaReact title="React" /> },
  { name: "Go", icon: <SiGo title="Go" /> },
  { name: "Kotlin", icon: <SiKotlin title="Kotlin" /> },
  { name: "PHP", icon: <FaPhp title="PHP" /> },
  { name: "JavaScript", icon: <SiJavascript title="JavaScript" /> },
  { name: "TypeScript", icon: <SiTypescript title="TypeScript" /> },
  { name: "Docker", icon: <FaDocker title="Docker" /> },
  { name: "Rancher", icon: <SiRancher title="Rancher" /> },
  { name: "PostgreSQL", icon: <SiPostgresql title="PostgreSQL" /> },
  { name: "Postman", icon: <SiPostman title="Postman" /> }
];

const hobbies = [
  { name: "Reading", icon: "📚" },
  { name: "Mountain Biking", icon: "🚵‍♀️" },
  { name: "Kayaking", icon: "🛶" },
  { name: "Board Games", icon: "🎲" },
  { name: "Scrapbooking", icon: "📒" }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Liane Arnold</title>
      </Helmet>
      <main className={styles.aboutContainer} aria-label="About page">
        <h1>About Me</h1>
        <section className="about-section">
          <p className={styles.aboutParagraph}>
            I'm a senior software developer with 8 years of full-stack experience, based in Bossier City, Louisiana. I love solving complex problems, writing clean and efficient code, and building solutions that make a real impact.<br /><br />
            I'm always learning—whether it's a new framework, tool, or approach—and I thrive on collaborating with others to bring ideas to life. My background spans both frontend and backend, and I'm comfortable owning projects from concept to deployment. If you're working on something interesting or just want to connect, feel free to reach out!
          </p>
        </section>
        <section className={styles.skillsSection} aria-label="Skills">
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill.name} className={styles.skillItem}>
                <span className={styles.skillIcon} aria-hidden="true">{skill.icon}</span>
                <span className="skill-label">{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.hobbiesSection} aria-label="Hobbies">
          <h2>Hobbies</h2>
          <ul className={styles.hobbiesList}>
            {hobbies.map((hobby) => (
              <li key={hobby.name} className={styles.hobbyItem}>
                <span className={styles.hobbyIcon} aria-hidden="true">{hobby.icon}</span>
                <span className="hobby-label">{hobby.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;