import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div class={styles.container}>
            <div className={styles.container_img}>
                <img src={require("../Assets/Logo.png")} className={styles.img} alt='Logo'/>
            </div>
            <div className={styles.footer}>
                <div className={styles.sede}>
                    <p>SEDES</p>
                    <p>José Baigorrí 111</p>
                    <p>Av. General Paz 222</p>
                </div>
                <div className={styles.contacto}>
                    <p>CONTACTO</p>
                    <p>0810 222 2563 (5223)</p>
                    <p>info@laboratotioanalisisclinicos.com</p>
                </div>
                <div className={styles.horario}>
                    <p>HORARIO</p>
                    <p>Lunes a viernes de 7.00 h a 19.00 h. <br/>
                        Sábados de 7.00 h a 10.30 h. <br/>
                        Domingos de 8.00 a 11.30 h.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer