import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Lista.module.css";
import axios from 'axios';
import DeleteSuccess from './DeleteSuccess'
import { Link } from 'react-router-dom'
import { GiConsoleController } from "react-icons/gi";
import AggiornaContatto from "./AggiornaContatto";


const Lista = () => {
  const [listaTodo, setListaTodo] = useState([]);
  
  //Questo state mi serve per fare il passaggio condizionale ad un altro componente
  const [risUpdate, setRisUpdate] = useState(false);
  
  const [contatto, setContatto] = useState({})

  const [risCanc, setRisCanc] = useState(false)

//   Questo codice mi fa vedere l'elenco completo della lista
  useEffect(() => {
    const getListaTodo = async () => {
      const res = await fetch("http://localhost:3030/lista");

      const data = await res.json();

      setListaTodo(data);
    };
    getListaTodo();
  }, []);


  //Codice per cancellare un elemento => FUNZIONA SENZA FINESTRA DI ALLARME
  // const deleteTodo = async (id) => {
  //   axios.delete(`http://localhost:3030/delete/${id}`);
  // }

  //Codice per cancellare un elemento => FUNZIONA CON FINESTRA DI ALLARME E REINDIRIZZAMENTO
  const deleteTodo = async(id) => {
    if(window.confirm('Vuoi cancellare la nota?')) {
      const res = axios.delete(`http://localhost:3030/delete/${id}`);

      setRisCanc(true);
    }
  }

  // const deleteTodo = async(id) => {
  //   if(window.confirm('Vuoi cancellare la nota)')) {
  //     const res = await fetch('http://localhost:3030/delete', {
  //       method: 'DELETE',
  //       headers: {
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify({id})
  //     })
  //     const { status } = await res.json();
  //     setRisCanc(status);
  //   }
  // }


  // DELETE senza axios => FUNZIONA CON FINESTRA DI ALLARME MA NON REINDIRIZZA
  // const deleteTodo = async(id) => {
  //   if(window.confirm(`Vuoi davvero cancellare la nota?`)) {

  //     const res = await fetch(`http://localhost:3030/delete/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //           "Content-type": "application/json"
  //       },
  //       body: JSON.stringify({ id })
  //     });

  //     // const { status } = await res.json();
  //     setRisCanc(await res.json());
  //   }
  // }

   if(risCanc) return(
     <div>
       {/* <h1>Nota eliminata</h1> */}
       <DeleteSuccess />
     </div>
   )

  

if(risUpdate) return <AggiornaContatto contatto = {contatto} />

  if (listaTodo)
    return (
      <div className={styles.containerTable}>
        <table className={styles.tabella}>
          <tr>
            <th id={styles.thTitolo}>Titolo</th>
            <th id={styles.thDescrizione}>Descrizione</th>
            <th id={styles.thAction}>Action</th>
          </tr>
          {listaTodo.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.titolo}</td>
                <td>{e.descrizione}</td>
                <td>
                    <div className={styles.containerBtn}>
                        <button id={styles.btnUpdate} onClick={() => {setRisUpdate(true); setContatto(e)}} className={styles.btnAction}>UPDATE </button>
                        <button id={styles.btnDelete} className={styles.btnAction} onClick = {() => {deleteTodo(e.id)}}>DELETE</button>
                    </div>
                </td>   
              </tr>
            );
            
          })}
        </table>
      </div>
    );

  return (
    <div>
      <h1>Nessuna lista disponibile....</h1>
    </div>
  );
};

export default Lista;
