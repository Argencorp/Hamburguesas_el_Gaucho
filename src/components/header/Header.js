import React from 'react'

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
                <a href='#' >Iniciar Sesion</a>
            </li>
            <li>
                <a href='#' >Registrarse</a>
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