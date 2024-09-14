import React, { useState, useEffect } from 'react';

function LoginRegister() {
    const [link, setLink] = useState("");

    const clickear = (url) =>{
        setLink(url);
    };

    useEffect(()=>{
        if (link) {
            window.location.href = link;
        };
    }, [link]);


    return (
    <div>
        <button onClick={() => clickear("./")}>Iniciar Sesion</button>
        <button onClick={() => clickear("")}>Registrarse</button>
    </div>
    )
}

export default LoginRegister