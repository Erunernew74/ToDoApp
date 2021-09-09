import React from 'react';
import styles from '../styles/UpdateSuccess.module.css';


const UpdateSuccess = () => {
    return (
        <div className={styles.container}>
            <h1>Update success</h1>
            <a href='/lista'><button className={styles.btn}>VAI ALLA LISTA</button></a>
        </div>
    )
}

export default UpdateSuccess
