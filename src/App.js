import React from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar'
import MainCarousel from './components/Carousel/Caruosel'
import Title from './components/StyledHeading/title'
import About from './pages/aboutPage/about'
import aboutParallax from './assets/img/parallex/background.webp'
import {Container} from 'react-bootstrap'
import {Parallax} from 'react-parallax'
import Fade from 'react-reveal/Fade'


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
          <div>
            <Container className="container-box rounded">
              <Fade top duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>

  )
}

export default App
