import React from 'react';
import styles from '../styles/HomeComponent.module.css';

const HomeComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.laptopContainer} data-aos="flip-right" data-aos-duration='2500'>

            </div>
            <div className={styles.textContainer} data-aos="fade-left" data-aos-duration='2500'>
                <h2 id={styles.firstTitle}>Basic Components</h2>
                <h4 id={styles.secondTitle}>THE CORE ELEMENTS OF YOUR WEBSITE</h4>
                <h3 id={styles.thirdTitle}>We re-styled every Bootstrap 4 element to match the Paper Kit style. All the Bootstrap 4 components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.</h3>
            </div>
        </div>
    )
}

export default HomeComponent
