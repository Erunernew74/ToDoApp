import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import HomeDesc from "./HomeDesc";
import HomeComponent from "./HomeComponent";
import HomeContentAreas from "./HomeContentAreas";
import HomeParallax from "./HomeParallax";
import HomeCustomIcon from "./HomeCustomIcon";
import HomeFooter from "./HomeFooter";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  AOS.init()
  return (
    <>
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}  data-aos="fade-up" data-aos-duration='3000'>ToDo Ghost</h1>
        <h2 className={styles.sottoTitolo} data-aos='fade-left' data-aos-delay='550' data-aos-duration='3000'>
          La ToDo app più bella mai costruita nella storia della programmazione
          react
        </h2>
        <div data-aos='fade-right' data-aos-delay='550' data-aos-duration='3000'>
          <Link to="/inserimento" className={styles.btnDettagli}>
            <input value="INSERISCI" type="button" id={styles.inputDettagli} style={{fontFamily: 'montserrat'}}/>
            <AiOutlineArrowRight className={styles.iconDettagli} />
          </Link>
        </div>
      </div>
      
    </div>
    <HomeDesc />
    <HomeComponent />
    <HomeContentAreas />
    <HomeParallax />
    <HomeCustomIcon />
    <HomeFooter />
    </>
  );
};

export default Home;
