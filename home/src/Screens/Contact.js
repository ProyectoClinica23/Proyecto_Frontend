import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contacto" className={styles.contact}>
      <h2>Contacto</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/761932ec-15d6-43f9-8a7d-7d317e0e0de6"
        >
        <label for="Name">Nombre:</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email:</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Mensaje:</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact;