import React from "react";
import cardgame from "../images/parttime.png";
import freshVeg from "../images/freshveg.png";
import teamBuilder from "../images/teambuilder.png";
import SimpleImageSlider from "react-simple-image-slider";


const Projects = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/ningthangom/image/upload/v1646628265/portfolio/react/4_srjbqp.png",
    },
    {
      url: "https://res.cloudinary.com/ningthangom/image/upload/v1646628261/portfolio/react/3_ejhcle.png",
    },
    {
      url: "https://res.cloudinary.com/ningthangom/image/upload/v1646628258/portfolio/react/2_tniaoi.png",
    },
    {
      url: "https://res.cloudinary.com/ningthangom/image/upload/v1646628248/portfolio/react/1_qyev6r.png",
    },
  ];
  return (
    <div id="projects" classNameName="projects">
      <div className="py-5">
        <h1
          className="projects-heading"
          style={{
            margin: "1rem",
            display: "flex",
            color: "white",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: "0.2rem solid red",
          }}
        >
          Projects
        </h1>
        <div
          className="row projects-row"
          style={
            {
              // alignItems:"center"
            }
          }
        >
          <div className="col-md-4 col-sm-6">
            <div
              className="card bg-dark projects-cards"
              style={{marginLeft: '4vw', marginBottom: '2vh', marginRight: '4vw'}}
            >
              {/* <img className="img img-thumbnail cardgame" src={cardgame} alt="" style={{
                                        height:"15rem",
                                         width:"30rem"

                                 }}/>  */}
              <SimpleImageSlider
                width={"95%"}
                height={"40%"}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <div
                className="card-body"
                style={
                  {
                    // background:"grey"
                  }
                }
              >
                <h4>Ecommerce site (MERN STACK) </h4>
                <p>
                  This is a full MERN stack website with payment system
                  integrated. It also features full admin panel where products
                  can be added,updated and deleted. 
                </p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Ningthangom/shoppingEcommerce"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://chinhillshop.herokuapp.com/"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  live page
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div
              className="card bg-dark projects-cards"
               style={{marginLeft: '4vw', marginBottom: '2vh', marginRight: '4vw'}}
            >
              <img
                className="img img-thumbnail cardgame"
                src={cardgame}
                alt=""
                style={{
                  height: "15rem",
                  width: "30rem",
                }}
              />
              <div
                className="card-body"
                style={
                  {
                    // background:"grey"
                  }
                }
              >
                <h4>Card Games</h4>
                <p>
                  This is a memory card game where people can match cards. The
                  unique feature of the game is all the cards are made up of
                  gif-memes instead of the tranditional picture cards.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Ningthangom/project1parttimerugbugs"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://ningthangom.github.io/project1parttimerugbugs/"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  live page
                </a>
              </div>
            </div>
          </div>
          {/*second card  */}
          <div className="col-md-4 col-sm-8">
            <div
              className="card bg-dark projects-cards"
              style={{marginLeft: '4vw', marginBottom: '2vh', marginRight: '4vw'}}
            >
              <img
                className="img img-thumbnail cardgame"
                src={freshVeg}
                alt=""
                style={{
                  height: "15rem",
                  width: "30rem",
                }}
              />
              <div
                className="card-body"
                style={
                  {
                    // background:"grey"
                  }
                }
              >
                <h4>Fresh Veg</h4>
                <p>
                  {" "}
                  Fresh Veg is a website for connecting consumers and growers
                  directly. The consumers will be able to order their fresh
                  vegetables from the farmers. 
                </p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Ningthangom/project1parttimerugbugs"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://ningthangom.github.io/project1parttimerugbugs/"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  live page
                </a>
              </div>
            </div>
          </div>
          {/* third card */}
          <div className="col-md-4 col-sm-6">
            <div
              className="card bg-dark projects-cards"
              style={{marginLeft: '4vw', marginBottom: '2vh', marginRight: '4vw'}}
            >
              <img
                className="img img-thumbnail cardgame"
                src={teamBuilder}
                alt=""
                style={{
                  height: "15rem",
                  width: "30rem",
                }}
              />
              <div
                className="card-body"
                style={
                  {
                    // background:"grey"
                  }
                }
              >
                <h4>Team Builder</h4>
                <p>
                  This application is a terminal based teambuilder. The user
                  will prompted with different roles in a team and the team
                  members will be displayed in a webpage in card form.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Ningthangom/project1parttimerugbugs"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://ningthangom.github.io/project1parttimerugbugs/"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  live page
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4 col-sm-6">
            <div
              className="card bg-dark projects-cards"
              style={{marginLeft: '4vw', marginBottom: '2vh', marginRight: '4vw'}}
            >
              <img
                className="img img-thumbnail cardgame"
                src={cardgame}
                alt=""
                style={{
                  height: "15rem",
                  width: "30rem",
                }}
              />
              <div
                className="card-body"
                style={
                  {
                    // background:"grey"
                  }
                }
              >
                <h4>Card Games</h4>
                <p>
                  This is a memory card game where people can match cards. The
                  unique feature of the game is all the cards are made up of
                  gif-memes instead of the tranditional picture cards.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Ningthangom/project1parttimerugbugs"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://ningthangom.github.io/project1parttimerugbugs/"
                  role="button"
                  style={{
                    margin: "0.3rem",
                  }}
                >
                  live page
                </a>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
