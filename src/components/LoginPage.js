import React, { useState, useEffect } from 'react';

function LoginPage() {
    const [user, setUser] = useState("");
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
            case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === ""){
                    setError("no se indicó un user");
                }
                break;
            case "password":
                setError("");
                setPassword(e.target.value);
                if (e.target.value === ""){
                    setError("no se indicó una contraseña");
                }
                break;
            default:
                break;
        }
    }

    const loginSubmit = () => {
        if(user !== "" && password !== ""){ 
            const url = "http://localhost/react/login.php";
            const headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            const Data = {
                user: user,
                password: password
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) => {
                setError(err);
                console.log(err);
            });
        }
        else{
            setError("Todos los campos son requeridos");
        }
    }

    return (
        <div className='form'>
            <p>
                { error !== "" ? <span className='error'>{error}</span> : <span className='success'>{msg}</span> }
            </p>
            <h2>Inicio de Sesión</h2>
            <div>
                <label>user:</label>
                <input 
                    type='user' 
                    value={user} 
                    onChange={(e) => handleInputChange(e, "user")} 
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
}

export default LoginPage;
