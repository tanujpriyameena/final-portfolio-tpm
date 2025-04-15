import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

// Once more, I will keep this less comment-heavy
// The navbar will be useful to navigate between different pages
function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Filepaths lead to the other pages, appropriately. */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;