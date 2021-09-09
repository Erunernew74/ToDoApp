import React, { useState } from "react";
import styles from "../styles/HomeFooter.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaVimeoV,
  FaPinterest
} from "react-icons/fa";
import { GiGhost } from "react-icons/gi";

const HomeFooter = () => {
  // const handleAlert = () => {
  //   alert('ciao')
  // };

  
  const partiAlert = () => {
    const btn = document.querySelector('.alert');
    const handleAlert = (e) => {
      e.preventDefault()
      alert('ciao')
    }
    btn.addEventListener('click', handleAlert);
    
  }
  

  return (
    <>
      <div className={styles.container}>
        <h1>Inserisci le tue toDo</h1>
        <h4 id={styles.textFooter}>
          Lorem Ipsum è un testo segnaposto utilizzato nel settore della
          tipografia e della stampa. Lorem Ipsum è considerato il testo
          segnaposto standard sin dal sedicesimo secolo, quando un anonimo
          tipografo prese una cassetta di caratteri e li assemblò per preparare
          un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
          anche al passaggio alla videoimpaginazione, pervenendoci
          sostanzialmente inalterato.
        </h4>
        <Link to="/inserimento">
          <input type="button" value="INSERISCI" ID={styles.btnFooter} />
        </Link>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.footerContainer1}>
            <Link to='/'><GiGhost className={styles.brandIcon}/></Link>
          <h1 id={styles.footerBrand}> GHOST TODOLIST APP</h1>
          <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione.
          </p>
          <div className={styles.iconFooter}>
            <FaTwitter id={styles.iconFooterTwitter}/>
            <FaFacebook id={styles.iconFooterFacebook} />
            <FaInstagramSquare />
            <FaVimeoV />
            <FaPinterest />
          </div>
        </div>
        <div className={styles.footerContainer2}>
          <div>
            <h2 id={styles.h2TitleFooter}>SHOP</h2>
            <h4>For front-end developper</h4>
            <h4>For back-end developper</h4>
            <h4>For full-stuck developper</h4>
          </div>
        </div>
        <div className={styles.footerContainer2}>
          <div>
            <h2 id={styles.h2TitleFooter}>COMPANY</h2>
            <h4>Login</h4>
            <h4>Register</h4>
            <h4>Wishlist</h4>
            <h4>Our project</h4>
          </div>
        </div>
        <div className={styles.footerContainer2} id={styles.container4}>
          <div>
            <h2 id={styles.h2TitleFooter}>Newsletter</h2>
            <p>
              Lorem Ipsum è un testo segnaposto utilizzato nel settore della
              tipografia e della stampa.
            </p>
            <div className={styles.inputBtn}>
              <input
                type="text"
                placeholder="Here your email"
                style={{ width: "270px" }}
              />
              <input
                type="button"
                value="Submit"
                className={styles.btnFooterSubmit}
              />
              <button className={alert} onClick={partiAlert}>ALERT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
