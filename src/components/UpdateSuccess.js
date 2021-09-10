import { useState } from 'react';
import Lista from "./Lista"
import styles from '../styles/UpdateSuccess.module.css';


const UpdateSuccess = () => {

    const [lista, setLista] = useState(false)
    if (lista)
        return <Lista />
    return (
        <div className={styles.container}>
            <h1>Update success senza alcun problema</h1>
            <button className={styles.btn} onClick={() => setLista(true)}>VAI ALLA LISTA</button>
        </div>
    )
}

export default UpdateSuccess
