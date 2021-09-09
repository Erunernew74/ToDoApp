import React from 'react';
import styles from '../styles/DeleteSuccess.module.css';


const DeleteSuccess = () => {
    return (
        <div className={styles.container}>
            <h1>Nota cancellata con successo</h1>
            <a href='/lista'><button id={styles.btnLista}>TORNA ALLA LISTA</button></a>
            <a href='/inserimento'><button id={styles.btnInserimento}>INSERISCI UNA NUOVA LISTA</button></a>
        </div>
    )
}

export default DeleteSuccess
