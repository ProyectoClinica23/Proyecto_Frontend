import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
      <div name="Servicios" className={styles.services}>
          <section>
            <p>ANALISIS</p>
            <img
            className={styles.webImage}
            src={require("../assets/maquina.jpg")}
            alt="Foto base de datos"/>
          </section>
          <section>
            <p>PROFESIONALES</p>
            <img
            className={styles.webImage}
            src={require("../assets/doctores.jpg")}
            alt="Foto doctores"/>
          </section>
          <section>
            <p>INSTITUCION</p>
            <img
            className={styles.webImage}
            src={require("../assets/institucion.jpg")}
            alt="Foto"/>
          </section>
      </div>
  );
};

export default Services;