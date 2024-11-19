"use client"
import React, { useEffect, useState } from "react";
import styles from "./StatsSection.module.css";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const section = document.getElementById("statsSection");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { id: 1, value: 350, suffix: "+", label: "Clients" },
    { id: 2, value: 6, suffix: "+", label: "Countries" },
    { id: 3, value: 93, suffix: "%", label: "Repeat Business" },
    { id: 4, value: 29000, suffix: "+", label: "Hours of Code" },
  ];

  return (
    <div id="statsSection" className={styles.statsSection}>
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};

const StatCard = ({ value, suffix, label, isVisible }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const increment = value / 100; // Animation steps
      let count = 0;

      const timer = setInterval(() => {
        count += increment;
        if (count >= value) {
          setCurrentValue(value);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.ceil(count));
        }
      }, 20); // Animation speed

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <>
    <div className={styles.statCard}>
      <p className={styles.value}>
        {currentValue}
        {suffix}
      </p>
      <p className={styles.label}>{label}</p>
    </div>
        
    </>
  );
};

export default StatsSection;
