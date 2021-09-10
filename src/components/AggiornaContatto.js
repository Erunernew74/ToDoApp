import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/AggiornaContatto.module.css';
import UpdateSuccess from './UpdateSuccess';

const AggiornaContatto = ({ contatto }) => {
    const [titolo, setTitolo] = useState(contatto.titolo);
    const [descrizione, setDescrizione] = useState(contatto.descrizione);

    const [data, setData] = useState(false)

    const aggiornaContatto = async (id) => {
        const res = await fetch(`http://localhost:3030/aggiornaNota/${id}`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({ titolo, descrizione })

        })
        setData(true)

    }

    /*`const aggiornaContatto = async (id) => {
        const res = axios.post(`http://localhost:3030/aggiornaNota/${id}`);
        setData(true)
    }*/

    if (data) {
        return <UpdateSuccess />
    }

    return (
        <>
            <div className={styles.bigContainer}>
                <h1>Aggiornamento nota</h1>
                <div className={styles.container}>
                    <input type='text' value={titolo} onChange={(e) => setTitolo(e.target.value)} />
                    <textarea value={descrizione} onChange={(e) => setDescrizione(e.target.value)} ></textarea>

                    <button className={styles.btnInsert} onClick={() => aggiornaContatto(contatto.id)}>AGGIORNA</button>
                    <Link to='/'><button className={styles.btnInsert}>HOME PAGE</button></Link>
                </div>
            </div>
        </>
    )
}


export default AggiornaContatto
