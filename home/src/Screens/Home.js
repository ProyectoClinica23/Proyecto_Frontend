import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Inicio" className={styles.home}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>
          Banner - Carrousel
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contacto"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          SACAR TURNO
        </Link>
        <Link
          to="Contacto"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          VER RESULTADOS
        </Link>
      </div>
    </div>
  );
};

export default Home;