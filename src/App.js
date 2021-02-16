import React from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar'
import MainCarousel from './components/Carousel/Caruosel'
import Title from './components/StyledHeading/title'

const App=() => {
  return (
    
    <div>
    <MainCarousel /> 
      <Title />
      <Navbar /> 

    </div>
  )
}

export default App
