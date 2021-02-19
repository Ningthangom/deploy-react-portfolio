import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
         <footer className="footer" style={{ position:"sticky", bottom:"0"}}>
         <ul className="social-icons">
                        <li><SocialIcon url="https://www.linkedin.com/in/ningthangom-shwebeth-angelo-709b45123/" target="_blank" rel="noreferrer"/></li>
                        <li><SocialIcon url="https://github.com/Ningthangom"  target="_blank" rel="noreferrer"/></li>
                </ul>
       </footer>
    )
}

export default Footer
