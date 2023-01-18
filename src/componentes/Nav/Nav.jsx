import React from 'react'
import "../Nav/nav.css"
function Nav() {
    return (
    <>
    <header className='nav'>
        <div className="nav-logo"><a href="www.google.com">LOGO</a></div>
        <div className="nav-enlaces">
            <ul><a href="www.google.com">Ropa</a></ul>
            <ul><a href="www.google.com">Zapatillas</a></ul>
            <ul><a href="www.google.com">Conjuntos</a></ul>
        </div>
        <div className="nav-carrito"> <a href="www.google.com">🛒</a> </div>
    </header>
    </>
    )
}
export default Nav;