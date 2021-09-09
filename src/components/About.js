import React from "react";
import styles from "../styles/About.module.css";
import HomeFooter from "./HomeFooter";

const About = () => {
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.containerItems}>
        <div className={styles.itemText}>
          <h2>Our Mission</h2>
          <p>
            Duis tincidunt non tellus ut auctor. In vitae eros turpis. Curabitur
            eu venenatis magna, vitae lobortis nulla. Pellentesque quis diam
            dolor. Quisque quis justo ut ipsum ornare consequat. Nullam congue
            tristique lacinia. Praesent libero sapien, mattis quis elit sit
            amet, accumsan congue
          </p>
          <h2>Our Value</h2>
          <h2>Our Business</h2>
          <h2>Our Philosophy</h2>
        </div>

        <div className={styles.itemImage}>

        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default About;
