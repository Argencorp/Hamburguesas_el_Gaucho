import React from 'react'

function Login() {
    const [emal, setEmail] = 

    return (
    <div>
        <h2>Inicio de Sesion</h2>
        <form onSubmit={envio}>
            <div>
                <label>Email:</label>
                <input type='email'/>
            </div>
            <div>
                <label>Contraseña:</label>
                <input type='password'/>
            </div>
            <button type='submit'>Ingresar</button>
        </form>
    </div>
    )
}

export default Login