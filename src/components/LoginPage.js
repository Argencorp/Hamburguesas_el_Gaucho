import React, {useState} from 'react';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const envio = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Contraseña:', password);
    }

    return (
    <div>
        <h2>Inicio de Sesion</h2>
        <form onSubmit={envio}>
            <div>
                <label>Email:</label>
                <input type='email' value={"email"} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label>Contraseña:</label>
                <input type='password' value={"password"} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type='submit'>Ingresar</button>
        </form>
    </div>
    )
}

export default LoginPage