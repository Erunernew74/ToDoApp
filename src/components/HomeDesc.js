import React from "react";
import styles from "../styles/HomeDesc.module.css";
import { AiFillHdd, AiFillLayout, AiFillProject } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeDesc = () => {
  AOS.init(
    {once: true}
  )
  return (
    <>
      <h1 className={styles.titleDesc} data-aos="fade-down" data-aos-duration='1500'>OUR DESCRIPTION</h1>
      <div className={styles.container} data-aos="fade-up" data-aos-duration='3000'>
        <div className={styles.containerItems}>
          <div className={styles.itemIcon}>
            <AiFillHdd />
          </div>
          <div className={styles.itemTitle}>
            <h1>Huge Number of Components</h1>
          </div>
          <div className={styles.itemText}>
            <h4>
              The kit comes with components designed to look perfect together.
              All components fit perfectly with each other
            </h4>
          </div>
          <div className={styles.itemButton}>
            <input
              type="button"
              value="DETTAGLI"
              className={styles.itemDettagli}
            />
          </div>
        </div>
        <div className={styles.containerItems}>
          <div className={styles.itemIcon}>
            <AiFillLayout />
          </div>
          <div className={styles.itemTitle}>
            <h1>Multi-Purpose Sections</h1>
          </div>
          <div className={styles.itemText}>
            <h4>
              The sections will help you generate pages in no time. From team
              presentation to pricing options.
            </h4>
          </div>
          <div className={styles.itemButton}>
            <input
              type="button"
              value="DETTAGLI"
              className={styles.itemDettagli}
            />
          </div>
        </div>
        <div className={styles.containerItems}>
          <div className={styles.itemIcon}>
            <AiFillProject />
          </div>
          <div className={styles.itemTitle}>
            <h1>Example Pages</h1>
          </div>
          <div className={styles.itemText}>
            <h4>
              Speed up your development time or get inspired with the large
              number of example pages.
            </h4>
          </div>
          <div className={styles.itemButton}>
            <input
              type="button"
              value="DETTAGLI"
              className={styles.itemDettagli}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDesc;
