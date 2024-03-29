import React from "react"
import Typed from "react-typed";
import {Link} from "react-scroll";
const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info"> 
                <h1 className="welcome">Welcome and Thank you for visiting</h1>
                <Typed
                className="typed-text"
                strings={["web design", "MERN stack web development", "MySQL","API Interaction"]}
            //    this speed is for when writing up
                typeSpeed={30}
                // speed for deleting 
                backSpeed={40}
                // this will loop the array without stoping
                loop
                
                />
                <Link  smooth={true} to="contact" href="#" className="contact-button"> contact me</Link>
                <a href="https://docs.google.com/document/d/1L5Qgic54Fk9C3YoFxUSVYf7SGQHl6n5KBJW3qJCb5To/edit?usp=sharing" target="_blank" rel="noreferrer" className="contact-button"> Resume </a>
            </div>
        </div>
    )
}

export default Header
