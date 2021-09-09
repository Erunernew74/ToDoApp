import React from 'react';
import styles from '../styles/HomeParallax.module.css';
import { Link } from 'react-router-dom'

const HomeParallax = () => {
    return (
        <div className={styles.container}>
            <h1>INSERISCI UNA TUA LISTA</h1>
            <Link to='/inserimento'><input type='button' value='INSERISCI' id={styles.btnInserisci}/></Link>
        </div>
    )
}

export default HomeParallax
