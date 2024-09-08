import React, { useState, useEffect } from 'react';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) =>{
        switch(type) {
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === ""){
                    setError("no se indico un Email")
                }
                break;
            case "password":
                setError("");
                setPassword(e.target.value);
                if (e.target.value === ""){
                    setError("no se indico una contraseña")
                }
                break;
            default:

        }
    }
    console.log('Email:', email);
    console.log('Contraseña:', password);
    }

    function loginSubmit(){
        if(email !== "" && password != ""){ 
            var url = "http://localhost/react/login.php"
        }
        else{
            setError("")
        }
    }

    return (
    <div className='form'>
        <p>
            {
                error !== "" ?
                <span className='error'>{error}</span> :
                <span className='success'>{msg}</span>
            }
        </p>
        <h2>Inicio de Sesion</h2>
        <div>
            <label>Email:</label>
            <input 
            type='email' 
            value={email} 
            onChange={(e) => handleInputChange(e, "email")} 
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input 
            type='password' 
            value={password} 
            onChange={(e) => handleInputChange(e, "password")} 
            />
        </div>
        <div>
            <label></label>
            <input
                type='submit'
                defaultValue="Login"
                className='button'
                onClick={loginSubmit}
                />
        </div>
    </div>
    );


export default LoginPage;
