import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // These icons appear down below
import styles from '../App.module.css';

function Contact() {
  // useState will be in place to check inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // A duplicate, but for errors!
  const [userErrors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Forces the need for a name
    if (!formData.name) {
      newErrors.name = 'Enter a name!';
      isValid = false;
    }

    // Forces for an email!
    if (!formData.email) {
      newErrors.email = 'A valid email is required!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Logic - non-whitespace characters, @, domain, dot, and then the final non-whitespace(like, com)
      // Also, it mandates valid addresses too via regex.
      newErrors.email = 'Enter a valid email address!';
      isValid = false;
    }

    // Forces for a message, as well
    if (!formData.message) {
      newErrors.message = 'Do not forget, message is needed!';
      isValid = false;
    }

    // Our update
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data is valid:', formData);
      // I'm not  using a directory to handle the form submission.
      // So this will be a stand in for it, to simulate.
    }
  };

  return (
    <div className={styles.contactBackground}>
      <div className={styles.contactBox}>
        <h2>Contact Me</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          {/* Then, a series of input areas for name, email, and message */}
          <input
            type="text"
            placeholder="Your Name" // This will appear before a user types
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Updating with new values
          />
          {/* Then, we're handling error display, if applicable */}
          {userErrors.name && <div className={styles.errorMessage}>{userErrors.name}</div>}

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {userErrors.email && <div className={styles.errorMessage}>{userErrors.email}</div>}

          {/* Slightly unique tag, since it's for longer messages. */}
          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {userErrors.message && <div className={styles.errorMessage}>{userErrors.message}</div>}

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* This, I modeled after many popular sites. */}
      {/* Social links represented by icons! */}
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/tanuj-priyameena-7725b528a/" className={styles.socialIcon}><FaLinkedin /></a>
        <a href="https://github.com/tanujpriyameena" className={styles.socialIcon}><FaGithub /></a>
        <a href="https://www.instagram.com/tanujpriyameena/" className={styles.socialIcon}><FaInstagram /></a>
      </div>
    </div>
  );
}

export default Contact;
