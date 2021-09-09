import React from "react";
import styles from "../styles/HomeContentAreas.module.css";

const HomeContentAreas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer} data-aos="fade-right" data-aos-duration='2500'>
        <h3 id={styles.firstTitle}>Content Areas</h3>
        <h5 id={styles.secondTitle}>FOR AREAS THAT NEED MORE SPACE</h5>
        <h3 id={styles.thirdTitle}>
          We took into consideration multiple use cases and came up with some specific elements for you. If you need elements such as tables, comments, description areas, tabs and many others, we've got you covered. They're beautiful and easy to use for the end user navigating your website.
        </h3>
      </div>
      <div className={styles.laptopContainer} data-aos="flip-left" data-aos-duration='2500'></div>
    </div>
  );
};

export default HomeContentAreas;
