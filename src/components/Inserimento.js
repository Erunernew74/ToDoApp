import React from "react";
import styles from "../styles/Inserimento.module.css";
import { useState, useRef } from "react";
import Output from "./Output";

const Inserimento = () => {
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");

  const reset = () => {
    setInput("");
    setArea("");
  };


//   Da qui il codice per inserire i dati nel db
  const titolo = useRef('');
  const descrizione = useRef('');
  const form = useRef('')

  //Questo state mi serve per fare il passaggio condizionale ad un altro componente
  const [data, setData] = useState(false);
  const handleSubmit = async(e) => {
      e.preventDefault();
      const res = await fetch("http://localhost:3030/inserimento", {
          method:"POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({titolo: titolo.current.value, descrizione: descrizione.current.value})
      })

      setData(await res.json())
  }

  if(data) 
    return <Output data = {data} />
 
  


  return (
    <div className={styles.container}>   
      <h1>Inserimento nuova lista</h1>
      <form onSubmit={handleSubmit} ref={form}>
        <div className={styles.insertContainer}>
          <label>Titolo</label>
          <input
            ref={titolo}
            type="text"
            id={styles.titolo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <label id={styles.areaContainer}>Descrizione</label>
          <textarea
            ref={descrizione}
            name=""
            id=""
            cols="30"
            rows="10"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.btn}>
          <button id={styles.submitBtn} className={styles.btnInsert}>
            INVIA
          </button>
          <button
            type="reset"
            onClick={reset}
            id={styles.resetBtn}
            className={styles.btnInsert}
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inserimento;
