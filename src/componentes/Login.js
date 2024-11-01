import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    }) 
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    useEffect(() => {
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Exito") {
                        navigate('/home');
                    } else {
                        alert("No existe record");
                    }
                })
                .catch(err => console.log(err));
        }
    }, [errors]);

    return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Iniciar Sesion</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Ingrese su Email' name='email'
                    onChange={handleInput}
                    className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor='password'><strong>Contraseña</strong></label>
                    <input type='password' placeholder='Ingrese su Contraseña' name='password'
                    onChange={handleInput}
                    className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Iniciar Sesion</strong></button>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Crear Cuenta</strong></Link>
            </form>
        </div>
    </div>
    )
}

export default Login