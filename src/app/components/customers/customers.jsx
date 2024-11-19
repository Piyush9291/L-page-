import React from 'react';
import styles from "./customers.module.css"

const customers = () => {
  return (
    <>
    <div className={styles.customerSection}>
      <p className={styles.title}>We Win When Our Customers Win</p>
      <div className={styles.logoContainer}>
        <img src="demo-image1.png" alt="Customer Logo 1" className={styles.customerLogo} />
        <img src="demo-image2.png" alt="Customer Logo 2" className={styles.customerLogo} />
        <img src="demo-image3.png" alt="Customer Logo 3" className={styles.customerLogo} />
        <img src="demo-image4.png" alt="Customer Logo 4" className={styles.customerLogo} />
        <img src="demo-image5.png" alt="Customer Logo 5" className={styles.customerLogo} />
        <img src="demo-image6.png" alt="Customer Logo 6" className={styles.customerLogo} />
        <img src="demo-image7.png" alt="Customer Logo 7" className={styles.customerLogo} />
        <img src="demo-image8.png" alt="Customer Logo 8" className={styles.customerLogo} />
      </div>
    </div>

    </>
  )
}

export default customers