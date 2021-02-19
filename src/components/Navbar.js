import React from "react";
import Om from "../logocircle.png";
import {Link} from "react-scroll";
//import react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{
          position:"sticky",
          top:"0"

        }}>
        <div className="container-fluid">
            
         <Link smooth={true} to="home" className="navbar-brand" href="#"> 
            <img className="logo" src={Om} alt="logo no go">
            </img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbaritems" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                       <Link smooth={true} to="projects" className="nav-link" href="#">projects</Link>
                    </li>
                    <li className="nav-item">
                   <Link smooth={true}  to ="aboutme" className="nav-link" href="#">About Me</Link>
                    </li>
                    <li className="nav-item">
                   <Link smooth={true} to ="services" className="nav-link" href="#">Services</Link>
                    </li>
                    <li className="nav-item">
                   <Link  smooth={true} to= "contact"className="nav-link" href="#">contact</Link>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
