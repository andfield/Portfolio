import React from 'react'
import {Container, Row, Col, Image, Button} from "react-bootstrap"
import myImg from '../../assets/img/profile/myImg.jpg'
import './styles.css'

const About=() => {

    const resume="https://drive.google.com/file/d/1ohyP1tGYMInbUHdS-Md-vU60wQAzwctK/view?usp=sharing"
    const linkdin="https://www.linkedin.com/in/siddharth-thakur-161308199/"
    const github="https://github.com/andfield"

    return (
        <div id="About">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">A little About me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile Image */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2">
                                <Image className="myImg justify-content-end" alt="profile Image" src={myImg} thumbnail fluid />
                            </Row>
                        </Col>
                        {/* About me Section */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                {/* About me description */}
                                Hello fellow tech enthusiasts! I am <strong>&nbsp;Siddharth Thakur</strong>
                                <br/>Full stack software developer based in Wellington region, specializing in JavaScript and currently exploring the NERDS stack
                                <br/>( Node.js, Express, React, Database using SQL, Mongo )
                                <br/><br/>My journey in tech began way back in 2015 by writing a script to automate downloading pirated games.I further realized
                                            that I could automate other day to day tasks and save people from tedious and error-prone activities.
                                <br/><br/>Relocating to New Zealand was the perfect opportunity to start my career in IT. I thought the fastest way to
                                            get started as a developer was to graduate from WelTec with Bachelor's in IT.
                                <br/><br/>I love learning new things, flex my creativity, strong tech culture and even stronger coffee.
                                <br/><br/>

                                {/* About me Buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's Chat
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={resume} target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={github} target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={linkdin} target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About