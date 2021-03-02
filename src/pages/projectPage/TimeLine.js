import React from 'react'
import {Accordion, Card, Image} from 'react-bootstrap'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

import html from "../../assets/img/skills/html-5.svg"
import css3 from "../../assets/img/skills/css3.svg"
import react from "../../assets/img/skills/react.svg"

import './styles.css'

const ProjectPage=() => {

    return (
        <div id="Projects">
            <div className="project">
                <h1 className="text-center text-white">Hello</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element-work"
                        contentStyle={{background: 'rgba(0, 0, 0, 0.5)', color: '#fff', boxShadow: '0 4px 8px 0 rgba(255, 187, 0, 0.13), 0 6px 20px 0 rgba(255, 174, 0, 0.123)'}}
                        contentArrowStyle={{borderRight: '15px solid  yellow', marginLeft: '5px'}}
                        date="2011 - present"
                        iconStyle={{background: '', color: '#ffff'}}
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            Project Details
                                        </Accordion.Toggle>


                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Powered by React and Material UI</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={html}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                              HTML5
                                                         </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={css3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={react}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>


                                    </Card>
                                </Accordion>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <a
                                        href="https://akjha96.github.io/Todo-List-React/"
                                        target="_blank"
                                    >
                                        SEE LIVE
                </a>
                                    <a
                                        href="https://github.com/akjha96/Todo-List-React"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                </a>
                                    <a
                                        href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                                        target="_blank"
                                    >
                                        WATCH VIDEO
                </a>
                                </div>
                            </div>
                        </div>



                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </div>
    )
}
export default ProjectPage