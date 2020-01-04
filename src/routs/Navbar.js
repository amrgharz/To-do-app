import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper blue darken-3 ">
            <div className="container">
                <a href="/" className="brand-logo">ToDoApp:)</a>
                <ul className="right">
                    <li> <Link to="/"> Home</Link></li>
                    <li> <NavLink to="/about"> About</NavLink></li> {/*this will add class 'active' to the element clicked*/}
                    <li> <Link to="/contact"> Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;