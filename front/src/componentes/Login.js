import React, { useState } from 'react';
import axios from 'axios'


function Login() {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Ingrese su Email'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' placeholder='Ingrese su Contraseña'
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <button>Iniciar Sesion</button>
            </form>
        </div>
    </div>
    )
}

export default Login