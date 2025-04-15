// Home.js
import React from 'react';
import mainImage from '../assets/newyork_one.jpg';
import styles from '../App.module.css';
// We'll be using the below for animation.
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className={styles.homeSection}>
      {/* I have introduced several classes just to manage styling. */}
      {/* The background image will come into play - same for the whole site */}
      <div
        className={styles.homeBackground}
        style={{ backgroundImage: `url(${mainImage})` }}
      ></div>

      {/* Trying out framer motion - where you will see this with my short intro! */}
      {/* So originally, it's hidden, then it fades in and slides from below. Also slow, to ensure the animation works */}
      <motion.div
        className={styles.homeContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* The display I present */}
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Tanuj Priyameena, a visual designer and artist, from UCF.</p>
      </motion.div>
    </div>
  );
}

export default Home;
