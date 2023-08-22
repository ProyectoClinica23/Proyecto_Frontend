import React from 'react'
import styles from "./Footer.module.css";

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={require("../assets/Logo.png")} alt="Logo"/>
            <div className={styles.links}>
                <img className={styles.icon} src={require("../assets/icons/icon _Facebook v1_.png")} alt="Logo Face"/>
                <img className={styles.icon} src={require("../assets/icons/icon _Instagram_.png")} alt="Logo Face"/>
                <img className={styles.icon} src={require("../assets/icons/icon _Twitter_.png")} alt="Logo Face"/>
            </div>
        </div>
    )
}
