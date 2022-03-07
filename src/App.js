
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
// import Services2 from "./components/Services_2"
import Services from "./components/Services"
import Projects from "./components/Project" 
import Aboutme from "./components/Aboutme"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
            params={{
              particles: {
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 600
                    }
                  },
                  shape: {
                    type: "star",
                    stroke: {
                      width: 7,
                      color: "#B22222"
                    }
                  }
                }
            }}
    
    />
        <Navbar/>
        <div className= "">
        <Header/>
        <div style={{marginBottom:'8rem'}}><Aboutme/></div>
        
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
        
    </>
  );
}

export default App;
