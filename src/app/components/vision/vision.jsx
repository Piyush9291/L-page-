import React from "react";
import styles from "./vision.module.css";

const vision = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.vision}>Our Vision</p>
        <p className={styles.desc}>
          We enable SMEs in making the best use of emerging digital technologies
          to build stronger capabilities & seize growth opportunities in today’s
          ever-evolving digital economy.
        </p>
        <button type="submit" className={styles.submitButton}>
          LET'S TALK
        </button>
      </div>
    </div>
  );
};

export default vision;
