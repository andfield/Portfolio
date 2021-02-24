import React from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar'
import MainCarousel from './components/Carousel/Caruosel'
import Title from './components/StyledHeading/title'
import About from './pages/aboutPage/about'
import Skills from './pages/skillsPage/skills.js'
import Experience from './pages/expreriencePage/experience'
import TimeLine from './pages/projectPage/TimeLine'
import ContactForm from './pages/contactPage/contactForm'
import aboutParallax from './assets/img/parallex/background.webp'
import {Container} from 'react-bootstrap'
import {Parallax} from 'react-parallax'
import {Fade, Slide} from 'react-reveal'



const App=() => {
  return (

    <div className="App" style={{position: "relative"}}>
      <MainCarousel />
      <Title />
      <Navbar />
      <div  >
        <Parallax
          blur={{min: -30, max: 30}}
          bgImage={aboutParallax}
          bgImageAlt=""
          strength={-300}
        >
          {/* About section */}
          <div>
            <Container className="container-box rounded">
              <Fade top duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/* Skills section */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr style={{backgroundColor: "#ffe673"}} />
          <Skills />
        </Slide>
      </Container>

      {/* Experience section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr style={{backgroundColor: "#ffe673"}} />
            <Experience />
          </Fade>
        </Container>
      </div>

      {/* Projects Timeline */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr style={{backgroundColor: "#ffe673"}} />
          <TimeLine />
        </Slide>
      </Container>

      {/* Contact form */}
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
    </div>




  )
}

export default App
