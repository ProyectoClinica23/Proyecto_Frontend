import React from 'react'
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from '../../Components/Navbar';
// import Estudios from '../Estudios/Estudios';
// import Institucion from '../Institucional/Institucion';
// import Usuario from '../Usuarios/Usuario';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div>
            <div className={styles.container}>
                <section name='Inicio' className={styles.banner}>
                <div className={styles.banner_carrousel}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={require("../../Assets/img1.png")} alt='foto'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("../../Assets/img2.png")} alt='foto'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("../../Assets/img3.png")} alt='foto'/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={styles.buttons}>
                    <Button className={styles.button_uno}>SACAR TURNO</Button>
                    <Button className={styles.button_dos}>VER RESULTADOS</Button>
                </div>
                </section>
                <section name='Servicios' className={styles.servicios}>
                <div className={styles.opciones}>
                    <img className={styles.img_banner} src={require("../../Assets/Frame 29.png")} alt='foto'/>
                    <img className={styles.img_banner} src={require("../../Assets/Frame 30.png")} alt='foto'/>
                    <img className={styles.img_banner} src={require("../../Assets/Frame 31.png")} alt='foto'/>
                </div>
                </section>
                <section name='Preguntas' className={styles.acordion}>
                    <h3 className={styles.titulo}>PREGUNTAS FRECUENTES</h3>
                    <div className={styles.preguntas}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Pregunta 1
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Pregunta 2
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Pregunta 3
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Pregunta 4
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;