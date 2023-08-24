import React, { useState } from 'react';
import styles from "./Accede.module.css"
import '../Registro/Registro';
import { Link } from 'react-router-dom';


const Accede = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    /**
        * The handleSubmit function prevents the default form submission behavior.
    */
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.sign_in}>
            <form className={styles.form_login} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Tu cuenta</h1>
                <div className={styles.login}>
                    <div>
                        <label>Usuario</label>
                    </div>
                    <div>
                        <input type="text" value={user} className={styles.in} onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div>
                        <label>Contraseña</label>
                    </div>
                    <div>
                        <input type="password" className={styles.in} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>  
                </div>
                <div>
                    <button className={styles.sesion} type='submit'>Iniciar sesión</button>
                </div>
                <div>
                    <a href="/"><Link to='/registro'>¿No estás registrado? Regístrate</Link></a>
                </div>
            </form>
        </div>
    )
}

export default Accede