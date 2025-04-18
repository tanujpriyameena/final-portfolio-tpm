import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './App.module.css';
// This won't be too comment heavy. Very few changes.

function App() {
  return (
    <Router>
      {/* Router will with help with this */}
      <div className={styles.appWrapper}>
        <Navbar />
        <main className={styles.mainContent}>
          <Routes>
            {/* Using routes for this assignment - with paths*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;