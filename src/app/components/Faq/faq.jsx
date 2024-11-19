"use client";
import { useState } from "react";
import styles from "./Faq.module.css";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the selected item
    }
  };

  return (
    <div className={styles.faqContainer}>
      <p className={styles.faqTitle}>Frequently Asked Questions</p>

      <div className={styles.faqItem}>
        <button className={styles.faqQuestion} onClick={() => toggleFaq(0)}>
          Q. What are the industries that INT. mainly works with?
          <span
            className={`${styles.arrow} ${openIndex === 0 ? styles.open : ""}`}
          >
            &#x25BA;
          </span>
        </button>
        <div
          className={`${styles.faqAnswer} ${
            openIndex === 0 ? styles.show : ""
          }`}
        >
          <p>
            A. INT. mainly works with the real estate, ed-tech, food &
            beverages, hospitality and recreation industries. However, we don’t
            limit ourselves to these sectors alone. Being a reputable product
            engineering firm, if we think we can add value to your project, then
            we’ll work with you regardless of what industry your business is in.
            Our portfolio should give you a good idea of the types of industries
            we’ve worked with before. So, whether you want enterprise
            application development or want to develop your website or
            application or any other customised digital solutions, INT. is the
            best digital product design agency.
          </p>
        </div>
      </div>

      <div className={styles.faqItem}>
        <button className={styles.faqQuestion} onClick={() => toggleFaq(1)}>
          Q. What is the project management style of INT.?
          <span
            className={`${styles.arrow} ${openIndex === 1 ? styles.open : ""}`}
          >
            &#x25BA;
          </span>
        </button>
        <div
          className={`${styles.faqAnswer} ${
            openIndex === 1 ? styles.show : ""
          }`}
        >
          <p>
            A. Well, INT. has an Agile development team so that the clients can
            give their valuable feedback throughout the project. Also, with
            Agile methodology, testing happens regularly through the whole
            process and the developers can focus on client satisfaction.
          </p>
        </div>
      </div>

      <div className={styles.faqItem}>
        <button className={styles.faqQuestion} onClick={() => toggleFaq(2)}>
          Q. How much do I need to pay for availing the services of INT.?
          <span
            className={`${styles.arrow} ${openIndex === 2 ? styles.open : ""}`}
          >
            &#x25BA;
          </span>
        </button>
        <div
          className={`${styles.faqAnswer} ${
            openIndex === 2 ? styles.show : ""
          }`}
        >
          <p>
            A. At INT., you can find the best talent for technology outsourcing
            services. Let’s say, you want to build a website for better client
            engagement and more traffic. Being a website development firm having
            more than 24 years of experience, we have a team of information
            architects for better customer experience and reduction of dropout
            rate. We cater to individual requests depending on your exact skill
            requirement. Contact us to get the customised quotation for your
            requirements and drive your business revenue.
          </p>
        </div>
      </div>

      <div className={styles.faqItem}>
        <button className={styles.faqQuestion} onClick={() => toggleFaq(3)}>
          Q. Does INT. provide any project timelines?
          <span
            className={`${styles.arrow} ${openIndex === 3 ? styles.open : ""}`}
          >
            &#x25BA;
          </span>
        </button>
        <div
          className={`${styles.faqAnswer} ${
            openIndex === 3 ? styles.show : ""
          }`}
        >
          <p>
            A. Project timelines vary with the type of projects and the type of
            industries we serve. We can provide you with the project timeline
            once we get detailed information about your requirements. INT. is a
            top-rated IT solution provider company and has great expertise in
            serving a wide range of reputable industries for more than two
            decades. So, you can expect complete transparency about the
            timelines from the very beginning and get custom software
            development solutions from expert developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
