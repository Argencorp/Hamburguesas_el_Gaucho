import React from 'react'

function Register() {
    const [nombre, setNombre] = useState("");
    const [emal, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mostrarDatos = () =>{
        alert()
    }

    return (
    <div className='datos'>
        <label>Nombre: <input 
        onChange={(event) => {
            setNombre(event.target.value);
        }}
        type='text'/></label>

        <label>Email: <input 
        onChange={(event) => {
            setEmail(event.target.value);
        }}
        type='text'
        /></label>

        <label>Contraseña: <input 
        onChange={(event) => {
            setPassword(event.target.value);
        }}
        type='number'/></label>

        <button onClick={mostrarDatos}>Registrarse</button>
    </div>
    )
}

export default Register