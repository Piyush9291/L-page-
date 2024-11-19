import React from 'react';
import styles from "./footer.module.css"

const footer = () => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.leftSide}>
        <h1 className={styles.headerTitle}>Let’s Get Started</h1>
        <p className={styles.subTitle}>We offer full-cycle technology solutions that streamline your digital transformation journey. With cutting-edge technical expertise, INT. simplifies complex business challenges with innovative solutions for 100+ fastest-growing enterprises.</p>
      </div>

      <div className={styles.rightSide}>
        <p className={styles.queryText}>For all job-related queries, please click here</p>
        <h2 className={styles.getStarted}>Let’s Get Started</h2>
        <form className={styles.contactForm}>
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Company Email" required />
          <select name="service" required>
            <option value="service1">Website Infrastructure</option>
            <option value="service2">Application & Software Development</option>
            <option value="service3">Ecommerce Marketing</option>
            <option value="service3">PR Marketing</option>
          </select>
          <input type="tel" name="phone" placeholder="Phone Number" required />
          
          <div className={styles.budgetOptions}>
            <label>What is your budget?</label><br />
            <input type="radio" name="budget" value="$5000-$20000" /> $5,000 to $25,000<br />
            <input type="radio" name="budget" value="$20000-$50000" /> $20,000 to $55,000<br />
            <input type="radio" name="budget" value="$50000+" /> $55,000 and above
          </div>

          <p className={styles.about}>Timidlly is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. </p>

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="privacy-policy" /> 
            <label htmlFor="privacy-policy">I agree to receive other communications from Indus Net Technologies.</label>
          </div>
          <div >
          <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default footer;
