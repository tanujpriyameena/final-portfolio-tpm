import React from 'react';
import styles from '../App.module.css';
// The following are images... I simply import them since my images originally didn't appear
import exerciseImage1 from '../assets/exercises_ongh.jpg';
import figmaDesign1 from '../assets/figma_redesign.jpg';
import charArt1 from '../assets/characters_one.jpg';

//Like the previous pages, this will once more be display focused.
function Projects() {
  return (
    <div className={styles.projectsBackground}>
      <div className={styles.projects}>
        <div className={styles.projectsIntro}>
          {/* The following classes are intentional - created for the background, projects, and the intro message up top*/}
          <h2>My Projects</h2>
          <p>Here are some works I have made during my Mobile Development, and Game Art courses.</p>
          <p>*DIG4639 and DIG2783, respectively.</p>
        </div>

        {/* The logic here is for the display of the cards over a grid. Their layout is important */}
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            {/* Notice that we're using the import like a variable, while targeting the image too */}
            <img src={exerciseImage1} alt="Exercises on GH pages" />
            <h3>The 'Updated' Exercise App</h3>
            <p>For this, I devised two essential exercise options - a timer (as pictured), and a repetition exercise component, via react and GH pages.</p>
            <p>Apprioriately, this tracks laps for anyone doing exercise, while utilizing states, and GitHub to make this public.</p>
            <a href="https://tanujpriyameena.github.io/new-exercise-update/">See the project on GH pages!</a>
          </div>
          <div className={styles.projectCard}>
            <img src={figmaDesign1} alt="Figma Design" />
            <h3>The "Instagram Story" Redesign</h3>
            <p>This project entailed a change to the usual Instagram story service - to make it more accessible, while also maintaining the core process. This included a change to the 'next' option, pausing stories, mini-displays, and important information based on post and user.</p>
            <p>The prototype was entirely done on Figma, to replicate Instagram's layout and to make necessary changes.</p>
            <a href="https://www.figma.com/design/fKxhkkQ03LPSuIO7okmyhe/Redesign-Feature-TP?node-id=0-1&t=UloWideFq5Sae7E0-1">Check out the Design!</a>
          </div>
          {/* We do this thrice, for each card we need.*/}
          <div className={styles.projectCard}>
            <img src={charArt1} alt="Character Sketches" />
            <h3>Character sketches for "Escape from the Venerator"</h3>
            <p>The character sketches, are depicting Darrin, Niya, and Oswald, from my "Escape the Venerator" game design. Made for my game art course, this project was meant to depict a diversity of characters, personalities, and to assist in the worldbuilding for a game. In essence, it is to expand on some of my work, beyond React or visual design.</p>
            <p>These sketches are direct examples of fine art that I frequently practice. Publicly displayed on my own account, in Instagram.</p>
            <a href="https://www.instagram.com/p/DHelw-2Ru7g/">Meet the Characters!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
