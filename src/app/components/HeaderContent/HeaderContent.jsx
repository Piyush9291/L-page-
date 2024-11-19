"use client";
import React, { useState } from "react";
import styles from "./HeaderContent.module.css";

const HeaderContent = () => {
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "" ? "This field is required" : "",
    }));
  };

  return (
    <div className={styles.headerContent}>
      <div className={styles.leftSide}>
        <h1 className={styles.headerTitle}>
          Smart Digital Solutions for Growing SMEs & MSMEs
        </h1>
        <p className={styles.subTitle}>
          Trusted by over 1,000 ambitious brands
        </p>
      </div>

      <div className={styles.rightSide}>
        <p className={styles.queryText}>
          For all job-related queries, please click here
        </p>
        <h2 className={styles.getStarted}>Let’s Get Started</h2>
        <form className={styles.contactForm}>
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onBlur={handleBlur}
              required
            />
            {errors.fullname && (
              <p className={styles.error}>{errors.fullname}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Company Email"
              onBlur={handleBlur}
              required
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div>
            <select name="service" onBlur={handleBlur} required>
              <option value="">Select a Service</option>
              <option value="service1">Website Infrastructure</option>
              <option value="service2">
                Application & Software Development
              </option>
              <option value="service3">Ecommerce Marketing</option>
              <option value="service4">PR Marketing</option>
            </select>
            {errors.service && <p className={styles.error}>{errors.service}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onBlur={handleBlur}
              required
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>
          <div className={styles.budgetOptions}>
            <label>What is your budget?</label>
            <br />
            <input type="radio" name="budget" value="$5000-$20000" /> $5,000 to
            $25,000
            <br />
            <input type="radio" name="budget" value="$20000-$50000" /> $20,000
            to $55,000
            <br />
            <input type="radio" name="budget" value="$50000+" /> $55,000 and
            above
          </div>
          <p className={styles.about}>
            Timidlly is committed to protecting and respecting your privacy, and
            we’ll only use your personal information to administer your account
            and to provide the products and services you requested from us.
          </p>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="privacy-policy" />
            <label htmlFor="privacy-policy">
              I agree to receive other communications from Indus Net
              Technologies.
            </label>
          </div>
          <div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderContent;
