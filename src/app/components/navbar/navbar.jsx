"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.css'; 
import HeaderContent from '../HeaderContent/HeaderContent';
import Vision from '../vision/vision';
import Customers from '../customers/customers';
import TechStack from '../TechStack/techStack';
import StatsSection from '../Stats/StatsSection';
import Faq from '../Faq/faq';
import Footer from '../footer/footer';
import Link from 'next/link';
import OurServices from '../OurServices/OurServices';

const Navbar = () => {
  // State to track whether the navbar should have the 'scrolled' class
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to check if page is scrolled
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run only on component mount/unmount

  return (
    <>
    <div className={styles.top}>
    <header className={`${styles.header}`}>
      <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <Image src="/timidllyLogo.jpg" alt="Logo" width={80} height={80} />
        </div>

        <Link href="https://www.timidlly.com/build-together"><button className={styles.contactButton}>Contact Us</button></Link>
      </div>
    </header>
    <HeaderContent />
    </div>
    <Vision />
    <OurServices />
    <Customers />
    <TechStack />
    <StatsSection />
    <Faq />
    <Footer />
    </>
  );
};

export default Navbar;
