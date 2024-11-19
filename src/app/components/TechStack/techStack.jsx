import React from "react";
import styles from "./techStack.module.css";

const techStack = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>Our Tech Stack</p>
        <p className={styles.desc}>
          We focus on emerging technologies for building high performing web &
          mobile products that can be securely deployed in the cloud.
        </p>
        <div className={styles.logoContainer}>
          <img
            src="https://www.indusnet.co.in/lp/emerge/assets/lib/images/tech-stacks/logo-reactjs.jpg"
            alt="Customer Logo 1"
            className={styles.customerLogo}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTGLpRQIfbiwGixMl9BWIePzWJN4yPc6kQA&s"
            alt="Customer Logo 2"
            className={styles.customerLogo}
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
            alt="Customer Logo 3"
            className={styles.customerLogo}
          />
          <img
            src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png"
            alt="Customer Logo 4"
            className={styles.customerLogo}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeB7gvtqoEnI9qlDXfXgit2BVfTudtfP9Zw&s"
            alt="Customer Logo 5"
            className={styles.customerLogo}
          />
          <img
            src="https://www.orientsoftware.com/Themes/Content/Images/technologies/laravel/laravel-thumb.jpg"
            alt="Customer Logo 6"
            className={styles.customerLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default techStack;
