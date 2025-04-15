import React from 'react';
import styles from '../App.module.css';

function Footer() {
  return (
    // Ultimately, the footer, with a styling of its own.
    <footer className={styles.footer}>
      {/* Mimics popular sites with the symbol, year and then name. All display! */}
      <p>&copy; {new Date().getFullYear()} Tanuj Priyameena. Thanks for viewing.</p>
    </footer>
  );
}

export default Footer;
