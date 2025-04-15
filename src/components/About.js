import React from 'react';
import styles from '../App.module.css';

function About() {
  return (
    // Ultimately, pageBackground handles the background appearing.
    // 'about' is the entirety of content. It will handle the fade in, and so forth.
    // By grouping it up, I can individually target elements within that specific style!
    <div className={styles.pageBackground}>
      {/* Won't delve too much into this page... in essence, it's an introduction, and lists of mine.*/}
      <div className={styles.about}>
        <h2>About Me</h2>
        <p>I'm Tanuj, an undergraduate student at UCF, in the Digital Media major. I have a passion for visual design and web design, and fine art! My ambition is to play a role in a team environment, collaborate, and build upon existing websites visually. Additionally, I am writing a fictional book which I intend to publish someday. I plan to play a role in a comic series as well!</p>
        <h3>Skills</h3>
        <ul>
          <li>HTML and CSS</li>
          <li>C language, JavaScript</li>
          <li>React</li>
          <li>Adobe Photoshop, Illustrator</li>
          <li>Fine Art, 2D Art, Character Art</li>
        </ul>
        {/* Now, we dive into interests. */}
        <h3>Interests</h3>
        <ul>
          <li>Character Design and Comic Art</li>
          <li>UI and UX design</li>
          <li>Website visuals</li>
          <li>Fiction books</li>
          <li>Small animations, rotoscoping</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
