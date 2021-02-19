import React from 'react'
import cardgame from "../images/parttime.png";
import freshVeg from "../images/freshveg.png";
import teamBuilder from "../images/teambuilder.png"

const Projects = () => {
    return (
    
        <div id = "projects" classNameName="projects">
            <div  className="py-5">
                <h1 className="projects-heading"style={{
                    margin:"1rem",
                    display: "flex",
                    color:"white",
                    flexDirection: "column",
                    alignItems: "center",
                    borderBottom: "0.2rem solid red"
                    }}>Projects</h1>
                <div className="row projects-row" style={{
                    // alignItems:"center"
                }}>
                    <div className="col-md-4 col-sm-6">
                        <div className="card bg-dark projects-cards" style={{margin:"0.7rem"}}>
                                 <img className="img img-thumbnail cardgame" src={cardgame} alt="" style={{
                                        height:"15rem",
                                         width:"30rem"

                                 }}/>  
                                <div className="card-body" style={{
                                    // background:"grey"
                                }}>
                                <h4>Card Games</h4>
                                <p>This is a memory card game where people can match cards. The unique feature of the game is all the cards are made up of gif-memes
                                    instead of the tranditional picture cards.The game has different levels.</p>
                                    <a className="btn btn-primary" href="https://github.com/Ningthangom/project1parttimerugbugs" role="button" style={{
                                        margin:"0.3rem"
                                    }}>github</a>
                                    <a className="btn btn-primary" href="https://ningthangom.github.io/project1parttimerugbugs/" role="button" style={{
                                        margin:"0.3rem"
                                    }}>live  page</a>
                                </div>
                        </div>
                    </div>
                    {/*second card  */}
                    <div className="col-md-4 col-sm-8">
                        <div className="card bg-dark projects-cards" style={{margin:"0.7rem"}}>
                                 <img className="img img-thumbnail cardgame" src={freshVeg} alt="" style={{
                                        height:"15rem",
                                         width:"30rem"

                                 }}/>  
                                <div className="card-body" style={{
                                    // background:"grey"
                                }}>
                                <h4>Fresh Veg</h4>
                                <p>   Fresh Veg is a website for connecting consumers and growers directly. The consumers will be able to order their fresh vegetables from the farmers. This way, the
                                           consumers will be able to get better price but also better quality vegetables
                                           as they will be freshly picked.</p>
                                    <a className="btn btn-primary" href="https://github.com/Ningthangom/project1parttimerugbugs" role="button" style={{
                                        margin:"0.3rem"
                                    }}>github</a>
                                    <a className="btn btn-primary" href="https://ningthangom.github.io/project1parttimerugbugs/" role="button" style={{
                                        margin:"0.3rem"
                                    }}>live  page</a>
                                </div>
                        </div>
                    </div>
                        {/* third card */}
                        <div className="col-md-4 col-sm-6">
                        <div className="card bg-dark projects-cards" style={{margin:"0.7rem"}}>
                                 <img className="img img-thumbnail cardgame" src={teamBuilder} alt="" style={{
                                        height:"15rem",
                                         width:"30rem"

                                 }}/>  
                                <div className="card-body" style={{
                                    // background:"grey"
                                }}>
                                <h4>Team Builder</h4>
                                <p>This application is a terminal based teambuilder. 
                                       The user will prompted with different roles in a team 
                                      and the team members will be displayed in a webpage in  card form
                                            with different colour based on their role in the team.</p>
                                    <a className="btn btn-primary" href="https://github.com/Ningthangom/project1parttimerugbugs" role="button" style={{
                                        margin:"0.3rem"
                                    }}>github</a>
                                    <a className="btn btn-primary" href="https://ningthangom.github.io/project1parttimerugbugs/" role="button" style={{
                                        margin:"0.3rem"
                                    }}>live  page</a>
                                </div>
                        </div>
                    </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-6">
                        <div className="card bg-dark projects-cards" style={{margin:"0.7rem"}}>
                                 <img className="img img-thumbnail cardgame" src={cardgame} alt="" style={{
                                        height:"15rem",
                                         width:"30rem"

                                 }}/>  
                                <div className="card-body" style={{
                                    // background:"grey"
                                }}>
                                <h4>Card Games</h4>
                                <p>This is a memory card game where people can match cards. The unique feature of the game is all the cards are made up of gif-memes
                                    instead of the tranditional picture cards.The game has different levels.</p>
                                    <a className="btn btn-primary" href="https://github.com/Ningthangom/project1parttimerugbugs" role="button" style={{
                                        margin:"0.3rem"
                                    }}>github</a>
                                    <a className="btn btn-primary" href="https://ningthangom.github.io/project1parttimerugbugs/" role="button" style={{
                                        margin:"0.3rem"
                                    }}>live  page</a>
                                </div>
                        </div>
                    </div>
                        {/*  */}
                </div>
            </div>
        </div>
    )
}

export default Projects
