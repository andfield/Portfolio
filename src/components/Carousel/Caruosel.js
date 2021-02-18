import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import Slide1 from '../../assets/img/carousal/slide1.webp'
import Slide2 from '../../assets/img/carousal/slide2.webp'
import './styles.css'

const MainCarousel=() => {
    return (
        <div id="home" className="carousel">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 silde-image"
                        src={Slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 silde-image"
                        src={Slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 silde-image"
                        src={Slide2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainCarousel