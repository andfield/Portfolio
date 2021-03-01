import React from 'react'
import {Jumbotron, Button, Col, Row} from 'react-bootstrap'
import "./styles.css"

const ContactForm=() => {
    return (
        <div id="Contact">
            <div className="contact">
                <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
                <Jumbotron className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div className="m-2">
                                <a href="mailto:siddharththakur76@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="siddharththakur76@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.linkedin.com/in/siddharth-thakur-161308199/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Visit my LinkenIn">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                                </a>
                            </div>

                            <div className="m-2">
                                <a href="https://github.com/andfield" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="My other projects">
                                        <i className="fab fa-github-square"></i> GitHub
                </Button>
                                </a>
                            </div>


                            <div className="m-2">
                                <a href="https://www.facebook.com/profile.php?id=100014260148743" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Say hello on FB">
                                        <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        </div>
    )
}

export default ContactForm
