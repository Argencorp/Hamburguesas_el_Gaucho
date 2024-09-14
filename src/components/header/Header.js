import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
    <header>
        <a href='#'>
            <div className='logo'>
                <img/>
            </div>
        </a>
        <ul>
            <li>
                <Link to="/iniciar-sesion">Iniciar Sesion</Link>
            </li>
            <li>
                <a href=''>Registrarse</a>
            </li>
            <div className='carrito'>
                <img/>
                <span className='item_total'>0</span>
            </div>
        </ul>
    </header>
    )
}

export default Header