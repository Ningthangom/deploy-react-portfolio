import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faReact } from '@fortawesome/free-solid-svg-icons'
import { FaReact } from 'react-icons/fa';
import webdesign from "../images/webdesign.png"
import mernstack from "../images/mernstack.png"

const Services = () => {
    return (
        <div id="services" className="services">
            <div  className="py-5">
                <h1 className="services-heading"style={{
                    margin:"1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderBottom: "0.2rem solid yellow"
                    }}>Services</h1>
                <div className="row" style={{
                    alignItems:"center"
                }}>
                    <div className="col-md-6 col-sm-6">
                        <div className="card" style={{width: "23rem", marginLeft:"0.7rem"}}>
                            <img className="card-img-top" src={mernstack} style={{height:"23rem"}}alt="Card image cap"/>
                            <div className="card-body" style={{
                                background:"grey"
                            }}>
                                <h5 className="card-title">Fullstack Development <FaReact size="2rem" style={{margin:"0.2rem",color:"orange"}}/></h5>
                                <p className="card-text"> Your website will be build with new proven technologies.</p>
                            </div>
                            </div>
                        </div>
                    {/*  */}
                    <div className="col-md-6 col-sm-6">
                        <div className="card" style={{width: "23rem", margin:"0.7rem"}}>
                            <img className="card-img-top" src={webdesign} alt="Card image cap"/>
                            <div className="card-body" style={{
                                background:"grey"
                            }}>
                                <h5 className="card-title" style={{
                                    fontWeight:"0.2rem"
                                }}> Web Design  <FontAwesomeIcon icon={faDesktop} size="2x" style={{
                                    margin:"0.2rem",
                                    color: "red", /* For browsers that do not support gradients */
                                  
                                    }}/></h5>
                                <p className="card-text">I approach each project individually and focus on the end result. That end result being the reaction of not "yes", not "no", but "wow"</p>
                            </div>
                            </div>
                        </div>
                    {/*  */}
                    {/* <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="circle">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x"/>
                            </div> 
                            <h3>
                                facebook Ads
                            </h3>
                        </div>
                    </div> */}
                    {/*  */}
                    {/* <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="circle">
                                    <FontAwesomeIcon icon={faGoogle} size="2x"/>
                            </div> 
                            <h3>
                                google
                            </h3>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Services
