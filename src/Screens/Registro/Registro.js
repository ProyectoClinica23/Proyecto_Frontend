import React, { useRef } from 'react';
import {useForm} from 'react-hook-form';
import './Registro.module.css';
//import styles from "./Registro.module.css"

const Registro = () => {

    /* The code is using the `useForm` hook from the `react-hook-form` library to handle form validation
    and submission in a React component. */
    const {register, formState: {errors}, handleSubmit , watch, reset} = useForm({
        defaultValues: {
            name:'',
            dni:'',
            email:'',
            password:'',
            confirmPass:'',
            phone:'',
            adress:'',
            user:'',
            date:'',
            city:'',
            last_name:'',
            more_info: false,
        }
    });

    /* The code is creating a reference to the password input field using the `useRef` hook. The
    `password` variable is initialized with a value of `null`. Then, the `current` property of the
    `password` reference is set to the value of the watched "password" field using the `watch`
    function from the `react-hook-form` library. This allows the code to access the current value of
    the password field and compare it with the confirm password field to validate if they match. */
    const password = useRef(null);
    password.current = watch("password", "");

    /* The `const onSubmit` variable is a function that is called when the form is submitted. It uses the
    `handleSubmit` function from the `react-hook-form` library to handle form submission. */
    const onSubmit = handleSubmit((data) =>{
        console.log(data);
        reset(); 
    });


    return (
        <div className="container">
            <div className='register'>
                <form onSubmit={onSubmit} className='form_register'>
                    <h1 className="titleRegister">Formulario de registro</h1>
                    <div className='sd'>
                        <div className='form_div'>
                            <div>
                                <label>Nombre(s)</label>
                            </div>
                            <div>
                                <input type="text" className="input" name='name' {...register('name', {
                                required: true,
                                })}/>
                                {errors.name?.type === "required" && <p>Nombre requerido</p>}
                            </div>
                            <div>
                                <label>DNI</label>   
                            </div>
                            <div>
                                <input type="text" className="input" name='dni' {...register('dni', {
                                required: true,
                                })}/>
                                {errors.dni?.type === "required" && <p>DNI requerido</p>}
                            </div>
                            <div>
                                <label>Teléfono</label>
                            </div>
                            <div>
                                <input type="tel" className="input" name='phone' {...register('phone', {
                                required: true
                                })}/>
                                {errors.phone?.type === "required" && <p>Teléfono requerido</p>}
                            </div>
                            <div>
                                <label>Domicilio</label>
                            </div>
                            <div>
                                <input type="text" className="input" name='adress' {...register('adress', {
                                required: true
                                })}/>
                                {errors.adress?.type === "required" && <p>Domicilio requerido</p>}
                            </div>
                            <div>
                                <label>Usuario</label>
                            </div>
                            <div>
                                <input type="text" className="input_data" name='user' {...register('user' , {
                                required: true,
                                minLength: 4
                                })}/>
                                {errors.user?.type === "required" && <p>Nombre de usuario requerido</p>}
                                {errors.user?.type === "minLength" && (<p>Nombre debe ser mayor a 3 caracteres</p>)}
                            </div>
                            <div>
                                <label>Contraseña</label>
                            </div>
                            <div>
                                <input type="password" className="input_data" name='password' {...register('password', {
                                required: {
                                value: true,
                                },
                                minLength: {
                                value: 8,
                                message: "Contraseña debe ser mayor a 8 caracteres",
                                }, 
                                })}/>
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                        </div>
                        <div className='form_div_div'>
                            <div>
                                <label>Apellido(s)</label>
                            </div>
                            <div>
                                <input type="text" className="input" name='last_name' {...register('last_name', {
                                required: {
                                value: true,
                                }
                                })}/>
                                {errors.last_name?.type === "required" && <p>Apellido requerido</p>}
                            </div>
                            <div>
                                <label>E-mail</label>
                            </div>
                            <div>
                                <input type="email" className="input" name='email' {...register('email', {
                                required: {
                                value: true,
                                menssage: "Email requerido",
                                },
                                pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                },
                                })}/>
                                {errors.email?.type === "required" && <p>Email requerido</p>}
                            </div>
                            <div>
                                <label>Fecha de Nacimiento</label>
                            </div>
                            <div>
                                <input type="date" className='input' name='date' {...register('date', {
                                required: {
                                value: true,
                                }
                                })}/>
                                {errors.date?.type === "required" && <p>Fecha requerida</p>}
                            </div>
                            <div>
                                <label>Localidad/Provincia</label>
                            </div>
                            <div>
                                <input type="text" className='input' name='city' {...register('city', {
                                required: {
                                value: true,
                                }
                                })}/>
                                {errors.city?.type === "required" && <p>Campo requerido</p>}
                            </div>
                            <div className='pass'>
                                <label>Confirmar contraseña</label>  
                            </div>
                            <div>
                                <input type="confirmPass" className="input_data" {...register('confirmPass', {
                                required: {
                                value: true,
                                },
                                validate: (value) =>
                                value === password.current || "Las contraseñas no coinciden",
                                })} />
                                {errors.confirmPass && (<p>{errors.confirmPass.message}</p>)}
                            </div>   
                        </div>
                    </div>
                    <div className='div_end'>
                        <input type="checkbox" name='checkbox' {...register('more_info')}/>
                        <label className='info'>Desea recibir mensajes al mail notificaciones sobre su cuenta</label>
                    </div>
                    <div>
                        <button type="submit" className='send'>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Registro;