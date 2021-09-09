import React from 'react';
import styles from '../styles/Output.module.css';
import { Link } from 'react-router-dom'

const Output = ( { data }) => {
    return (
        <div className={styles.container}>
            <h1>Nota inserita con successo</h1>
            <a href='/lista'><button id={styles.btnLista}>TORNA ALLA LISTA</button></a>
            <a href='/inserimento'><button id={styles.btnInserimento}>INSERISCI UNA NUOVA LISTA</button></a>
        </div>
    )
}

export default Output
