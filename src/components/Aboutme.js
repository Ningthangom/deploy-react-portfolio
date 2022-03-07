import React from "react";
import me from "../me2.jpg";

const Services_3 = () => {
  return (
    <div id="aboutme" className="aboutme-container bg-dark  ">
      <div className="card aboutme-card bg-dark text-white">
        <img src={me} alt="Person" className="card__image" />
        <p className="card__name" style={{ color: "white" }}>
          About Me
        </p>
        <div style={{ textAlign: "center", marginRight: "5%", marginLeft: "5%"}}> <p>
              Hello there! My name is Angelo. I am a full stack web developer. I
              just finised studying and excited to apply my knowledge in real
              world applications. The technologies I haved used are :
            </p></div>
        <div className="grid-container" style={{ marginLeft: '2rem', marginRight: '2rem', alignItems: "center",}}>
          {/* <h1 className="meHeading"> About Me </h1>  */}
          <ul className="aboutMe-text" style={{ color: "white", marginLeft: "10%", alignItems: "center"}}>
           
            <li>- MERN (MongoDB, Express, React, Nodejs)</li>
            <li> - API Interaction (api, json, ajax)</li>
            <li> - HTML</li>
            <li> - CSS </li>
            <li> - bootstrap</li>
            <li> - Responsive Design </li>
            <li> - handlebars</li>
            <li> - firebase (database and authentication)</li>
            <li> - socketio </li>
            <li> - authentication </li>
            <li> - antdesign </li>
            <li> - MySQL</li>
            <li> - digital Ocean</li>
            <li> - Json </li>
            <li> - Redux </li>
            <li> - api testing (postman) </li>
            <li> - Cloudinary </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services_3;
