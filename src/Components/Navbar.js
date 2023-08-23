import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className={styles.container}>
            <nav class="navbar navbar-expand-lg">
                <div class={styles.container_fluid}>
                    <Link to="/"><img src={require("../Assets/Logo.png")} className={styles.img} alt='Logo'/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class={styles.navbar_nav}>
                            <Link className={styles.link} to="/">Home</Link>
                            <Link className={styles.link} to="/usuarios">Usuarios</Link>
                            <Link className={styles.link} to="/estudios">Estudios</Link>
                            <Link className={styles.link} to="/institucional">Institucional</Link>
                            <button className={styles.button}><Link to={"/contacto"}>Contacto</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar