import React from "react";
import Logo from '../asset/portfolio-icon.webp';
// import ProfileLogo from '../asset/kn-profile.webp';
import { NavLink } from 'react-router-dom';

const Header = () => {
    function closeOffCanvas() {
        if(window.outerWidth < 768){
            document.querySelector("button.navbar-toggler").click();
        }
    }

    return(
        <header>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbar-style fixed-top">
                <div className="container navbar-custom-container">
                    <NavLink className="navbar-brand" to="/" style={{display:"flex", gap:"5px", alignItems:"center"}}>
                        <img src={Logo} alt="Avatar Logo" style={{width:"40px"}} className="rounded-pill"/> 
                        Portfolio
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-desktop-style" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="" onClick={closeOffCanvas}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-me" onClick={closeOffCanvas}>About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/skill-and-experience" onClick={closeOffCanvas}>Skills & Experience</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-me" onClick={closeOffCanvas}>Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header