import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.siteFooter} aria-label="Site footer">
    <div className={styles.footerContent}>
      <small>&copy; {new Date().getFullYear()} Liane Arnold. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;