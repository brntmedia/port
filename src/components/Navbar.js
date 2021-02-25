import React from 'react';
import "./navbar.css"

function Navbar(){
    return(
        <div>
            <div>
            <nav className= "navbar">
                <h1 className="log"><i class="fas fa-burn"></i></h1>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
            </div>
        </div>
    )
}

export default Navbar