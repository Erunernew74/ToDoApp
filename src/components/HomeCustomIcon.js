import React from 'react';
import styles from '../styles/HomeCustomIcon.module.css'

const HomeCustomIcon = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer} data-aos="zoom-in" data-aos-duration='1800'>
                <h1>Custom Icons</h1>
                <h4 id={styles.textItem}>Paper Kit 2 PRO comes with 100 custom demo icons made by our friends from NucleoApp. The official package contains over 20.729 icons which are looking great in combination with Paper Kit 2 PRO. Make sure you check all of them and use those that you like the most.</h4>
                <div className={styles.btnContainer}>
                    <input type='button' value='VIEW DEMO ICON' className={styles.btnIcon} id={styles.demoIcon}/>
                    <input type='button' value='VIEW ALL ICONS' className={styles.btnIcon} id={styles.viewIcon}/>
                </div>
            </div>
        </div>
    )
}

export default HomeCustomIcon
