import React from 'react'
import { Link } from 'react-router-dom';
import "../Nav/nav.css"
function Nav() {
    return (
    <>
    <header className='nav'>
        <div className="nav-logo">
            <Link to="/">LOGO</Link>
        </div>
        <div className="nav-enlaces">
            <ul>
                <Link to={"/category/ropa"}>Ropa</Link>
            </ul>
            <ul>
                <Link to={"/category/zapatillas"}>Zapatillas</Link>
            </ul>
            <ul>
                <Link to={"/category/pelotas"}>Pelotas</Link>
            </ul>
        </div>
        <div className="nav-carrito"> 
            <Link to="/">🛒</Link> 
        </div>
    </header>
    </>
    )
}
export default Nav;