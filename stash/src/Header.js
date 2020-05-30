import React from 'react'
import './Header.css'
import logo from './resources/logo.png'

function Header() {
    return (
        <header className = "Header">
            <img src={logo} className = "Header-logo"></img>
            <div className = "Button-container">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </header>
    )
}

export default Header