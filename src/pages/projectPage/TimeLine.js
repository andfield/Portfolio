import React from 'react'
import {Col, Button, Row} from 'react-bootstrap'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

import react from "../../assets/img/skills/react.svg"
import mongo from "../../assets/img/skills/mongodb.svg"

import './styles.css'



const ProjectPage=() => {
    return (
        <div id="Projects">
            <div className="project">
                <h1 className="text-center text-white">My Work</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgba(0, 0, 0, 0.8)', color: '#fff', boxShadow: '0 4px 8px 0 rgba(255, 187, 0, 0.13), 0 6px 20px 0 rgba(255, 174, 0, 0.123)'}}
                        contentArrowStyle={{borderRight: '15px solid  yellow', marginLeft: '5px'}}
                        date="2020"
                        dateClassName="date"
                        iconStyle={{background: 'black', color: '#fff'}}

                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div className="justify-content-center">

                                <Row className="r">

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>React</Button>

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>Mongo</Button>

                                    <Button variant="secondary " size="sm" disabled>express</Button>
                                </Row>

                                <Row className="r">
                                    <strong className="title">Social Mittens</strong>
                                    <p className="sub-title">A social media platform similar to instagram, developed using MERN stack</p>

                                </Row>

                                <Row className="r">
                                    <Button
                                        size="sm"
                                        variant="outline-dark"
                                        className="mobile-button link-btn "
                                        href="https://akjha96.github.io/Todo-List-React/"
                                        target="_blank"
                                    >
                                        See Live
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="outline-dark link-btn"
                                        className="ml-5 mt-2 mobile-button"
                                        href="https://github.com/akjha96/Todo-List-React"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Button>
                                </Row>

                            </div>
                        </div>



                    </VerticalTimelineElement>
                </VerticalTimeline>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgba(0, 0, 0, 0.8)', color: '#fff', boxShadow: '0 4px 8px 0 rgba(255, 187, 0, 0.13), 0 6px 20px 0 rgba(255, 174, 0, 0.123)'}}
                        contentArrowStyle={{borderRight: '15px solid  yellow', marginLeft: '5px'}}
                        date="2021"
                        dateClassName="date"
                        iconStyle={{background: 'black', color: '#fff'}}
                        position="right"

                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div className="justify-content-center">

                                <Row className="r">

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>HTML5</Button>

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>CSS3</Button>

                                    <Button variant="secondary " size="sm" disabled>Node.JS</Button>
                                </Row>

                                <Row className="r">
                                    <strong className="title">Photographer's Portfolio</strong>
                                    <p className="sub-title">A simple yet beautiful portfolio website designed for an amature photographer using html and css3.</p>

                                </Row>

                                <Row className="r">
                                    <Button
                                        size="sm"
                                        variant="outline-dark"
                                        className="mobile-button link-btn "
                                        href="https://akjha96.github.io/Todo-List-React/"
                                        target="_blank"
                                    >
                                        See Live
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="outline-dark link-btn"
                                        className="ml-5 mt-2 mobile-button"
                                        href="https://github.com/akjha96/Todo-List-React"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Button>
                                </Row>

                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgba(0, 0, 0, 0.8)', color: '#fff', boxShadow: '0 4px 8px 0 rgba(255, 187, 0, 0.13), 0 6px 20px 0 rgba(255, 174, 0, 0.123)'}}
                        contentArrowStyle={{borderRight: '15px solid  yellow', marginLeft: '5px'}}
                        date="2019"
                        dateClassName="date"
                        iconStyle={{background: 'black', color: '#fff'}}

                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div className="justify-content-center">

                                <Row className="r">

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>Vue.JS</Button>

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>Firebase</Button>

                                    <Button variant="secondary " size="sm" disabled>Vuetify</Button>
                                </Row>

                                <Row className="r">
                                    <strong className="title">Smartware Store</strong>
                                    <p className="sub-title">A fully functioning e-commerce store with admin controls. Designed using Vuetify and developed using Vue and Firebase</p>

                                </Row>

                                <Row className="r">
                                    <Button
                                        size="sm"
                                        variant="outline-dark"
                                        className="mobile-button link-btn "
                                        href="https://akjha96.github.io/Todo-List-React/"
                                        target="_blank"
                                    >
                                        See Live
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="outline-dark link-btn"
                                        className="ml-5 mt-2 mobile-button"
                                        href="https://github.com/akjha96/Todo-List-React"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Button>
                                </Row>

                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgba(0, 0, 0, 0.8)', color: '#fff', boxShadow: '0 4px 8px 0 rgba(255, 187, 0, 0.13), 0 6px 20px 0 rgba(255, 174, 0, 0.123)'}}
                        contentArrowStyle={{borderRight: '15px solid  yellow', marginLeft: '5px'}}
                        date="2021"
                        dateClassName="date"
                        iconStyle={{background: 'black', color: '#fff'}}
                        position="right"

                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div className="justify-content-center">

                                <Row className="r">

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>React</Button>

                                    <Button className="mr-3 " variant="secondary" size="sm" disabled>Mongo</Button>

                                    <Button variant="secondary " size="sm" disabled>express</Button>
                                </Row>

                                <Row className="r">
                                    <strong className="title">TCG Dungeon</strong>
                                    <p className="sub-title">A modern e-commerce store designed using material ui and developed using MERN stack.</p>

                                </Row>

                                <Row className="r">
                                    <Button
                                        size="sm"
                                        variant="outline-dark"
                                        className="mobile-button link-btn "
                                        href="https://akjha96.github.io/Todo-List-React/"
                                        target="_blank"
                                    >
                                        See Live
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="outline-dark link-btn"
                                        className="ml-5 mt-2 mobile-button"
                                        href="https://github.com/akjha96/Todo-List-React"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Button>
                                </Row>

                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>

        </div>
    )
}
export default ProjectPage