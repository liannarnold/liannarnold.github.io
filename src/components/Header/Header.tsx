import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.siteHeader} aria-label="Site header">
      <div className={styles.headerContent} ref={menuRef}>
        
        <div className={styles.menuContainer}>
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav 
            className={`${styles.mainNav} ${isMenuOpen ? styles.menuOpen : ''}`} 
            id="main-navigation"
            aria-label="Main navigation"
          >
            <ul>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
