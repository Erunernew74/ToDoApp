import React from "react";
import styles from "../styles/Navbar.module.css";
import { GiGhost } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/" className={styles.logoContainer} >
          <GiGhost id={styles.logo} />
          <h1 id={styles.logoBrand}>ToDo GHOST</h1>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <Link to="/" className={styles.linkItem}>
            <li>Home</li>
          </Link>
          <Link to="/about" className={styles.linkItem}>
            <li>About</li>
          </Link>
          <Link to="/inserimento" className={styles.linkItem}>
            <li>Inserimento</li>
          </Link>
          <Link to="/lista" className={styles.linkItem}>
            <li>Lista completa</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
