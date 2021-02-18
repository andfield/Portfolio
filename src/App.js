import React from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar'
import MainCarousel from './components/Carousel/Caruosel'
import Title from './components/StyledHeading/title'
import About from './pages/aboutPage/about'

const App=() => {
  return (
    
    <div>
    <MainCarousel /> 
      <Title />
      <Navbar /> 
      <About />
    </div>
  )
}

export default App
