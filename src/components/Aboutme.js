import React from 'react'
import me from "../me2.jpg"

const Services_3 = () => {
    return (
        <div id="aboutme" className="aboutme-container">
        <div  className="card aboutme-card bg-dark text-white">
            <img src={me} alt="Person" className="card__image"/>
            <p className="card__name" style={{color:"white"}}>About Me</p>
            <div className="grid-container">
        
           {/* <h1 className="meHeading"> About Me </h1>  */}
                    <ul className="aboutMe-text" style={{color:"white"}}>
                    <p>
                        Hello there! My name is Angelo. I am a full stack web developer. I just finised studying and excited to apply my knowledge 
                        in real world applications. 
                        The technologies I haved used are : 
                        </p>
                                    <li>- MERN (MongoDB, Express, React, Nodejs)</li>
                                    <li> - API Interaction (api, json, ajax)</li>
                                    <li>  - HTML</li>
                                    <li> - CSS </li>
                                    <li> - bootstrap</li>
                                    <li> - Responsive Design </li>
                                    <li> - handlebars</li>  
                        </ul>
          
        </div>
    </div>
       
</div>


    )
}

export default Services_3
