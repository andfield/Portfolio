import React from 'react'
import {Container, Card, Jumbotron} from "react-bootstrap"
import Tilt from 'react-tilt'
import spark from '../../assets/img/experience/spark.svg'
import './styles.css'

const Experience=() => {

    return (
        <div id="Experience">
            <h1 className="pt-3 text-center font-details-b pb-3">Current Work</h1>
            <Jumbotron className="jumbo-style">
                <Container >
                    <Tilt options={{max: 25}} className="tilt">
                        <Card>
                            <Card.Header as="h5" className="d-flex al flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={spark} alt="Spark logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">Information Technology Auditor</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">

                                        <strong>Duration:</strong> December 2020 - Present
                                        <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Completed &amp; enhanced</strong> all paperwork, recognizing any discrepancies and addressing
                                                them in a timely fashion.
                                            </li>
                                            <li><strong>Created plans</strong> and communicated deadlines to ensure projects were
                                                completed on time.
                                            </li>
                                            <li><strong>Worked closely with</strong> IT managers to maintain optimum levels of
                                                communication to effectively and efficiently complete projects.
                                            </li>
                                            <li><strong>Quickly learned</strong> new skills and applied them to daily tasks, improving
                                                efficiency and productivity.
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )

}

export default Experience