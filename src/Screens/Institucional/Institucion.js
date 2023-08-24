import React from 'react'
import styles from "./Institucion.module.css"

import Carousel from 'react-bootstrap/Carousel';


const Institucion = () => {
    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <div className={styles.img_principal}>
                    <div className={styles.img}>
                        
                    </div>
                </div>
            </section>
            <section className={styles.texto}>
                <div className={styles.historia}>
                    <h3 className={styles.titulo}>HISTORIA</h3>
                    <p className={styles.texto_historia}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={styles.costado}>
                    <div className={styles.mini_foto}>
                        <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
                    </div>
                    <div className={styles.descripcion}>
                        <h4 className={styles.subtitulo}>QUIENES SOMOS</h4>
                        <p className={styles.nombre}><b>NOMBRE 1:</b> dolor sit amet, consectetur.</p>
                        <p className={styles.nombre}><b>NOMBRE 2:</b> dolor sit amet, consectetur.</p>
                        <p className={styles.nombre}><b>NOMBRE 3:</b> dolor sit amet, consectetur.</p>
                        <p className={styles.nombre}><b>NOMBRE 4:</b> dolor sit amet, consectetur.</p>
                    </div>
                </div>
            </section>
            <section className={styles.equipamiento}>
                <h2>EQUIPAMIENTO</h2>
                <div className={styles.banner_carrousel}>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <section className={styles.politicas}>
                <div className={styles.texto_politica}>
                    <h2>POLITICA DE CALIDAD.</h2>
                    <p>
                        En el Laboratorio de Análisis Clínicos  todos los integrantes asumimos el compromiso y la responsabilidad por:
                    </p>
                </div>
                <div className={styles.puntos}>
                    <div className={styles.uno}>
                        <p>
                            Brindar cordialidad y eficacia en la atención personalizada.
                        </p>
                        <border className={styles.border}></border>
                    </div>
                    <div className={styles.dos}>
                        <p>
                            Garantizar la realización de los análisis clínicos solicitados.
                        </p>
                        <border className={styles.border}></border>
                    </div>
                    <div className={styles.tres}>
                        <p>
                            Entregar resultados confiables en el tiempo y la forma acordada.
                        </p>
                            <border className={styles.border}></border>
                    </div>
                    <div className={styles.cuatro}>
                        <p>
                            Asegurar el liderazgo profesional.
                        </p>
                        <border className={styles.border}></border>
                    </div>
                    <div className={styles.cinco}>
                        <p>
                            Lograr la satisfacción de nuestros pacientes y de las Instituciones que remiten muestras a nuestro laboratorio.
                        </p>
                        <border className={styles.border}></border>
                    </div>
                </div>
                <div className={styles.texto_politica_fin}>
                    <p>
                        En cumplimiento de lo exigido por la Norma ISO 9001:2008 en el LAC nos comprometemos a la mejora continua de nuestros procesos.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Institucion;