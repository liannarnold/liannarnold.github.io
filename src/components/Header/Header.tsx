import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.siteHeader} aria-label="Site header">
    <div className={styles.headerContent}>
      <Link to="/" className={styles.siteLogo} aria-label="Liane Arnold Home">Liane Arnold</Link>
      <nav className={styles.mainNav} aria-label="Main navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
