import React from 'react'

function Header() {
    return (
        <div>
            <nav>
            <ul className="navbar">
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#news">News</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
            <li className="navbar-item" style={{float: "right"}} ><a className="active" href="#about">About</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Header
