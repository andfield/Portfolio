import React from 'react'
import {CardDeck, Row, Col, Card, Image} from "react-bootstrap"
import './styles.css'


import {skills} from './skillsData.js'

const Skills=() => {
    return (
        <div className="pt-3 pb-3 skill-container" id="Skills">
            <h1 className="text-center font-details-b pb-4">Dev Skills</h1>
            <CardDeck>
                <Row className="d-flex justify-content-aroundv row" style={{width: '100%'}}>

                    {/* Frontend Skills */}
                    <Col md={4} >
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title  ">
                                    Frontend 
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start skill-box">
                                    <Row>
                                        {skills.frontend.map((skill, index) => (
                                            <Col xs={4}>
                                                <span className="p-2" key={index}>
                                                    <a className="text-white" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                        <p>{skill.skillName}</p>
                                                    </a>
                                                </span>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Version Control */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title  ">
                                    Version Control
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start skill-box">

                                    {skills.versionControl.map((skill, index) => (

                                        <span className="p-2" key={index}>
                                            <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>

                                    ))}

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Programming languages */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title  ">
                                    Languages
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start skill-box">
                                    <Row>
                                        {skills.programmingLanguages.map((skill, index) => (
                                            <Col xs={4}>
                                                <span className="p-2" key={index}>
                                                    <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                        <p>{skill.skillName}</p>
                                                    </a>
                                                </span>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>


                        {/* Databases */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title  ">
                                    Databases
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex skill-box">
                                    <Row>
                                        {skills.databases.map((skill, index) => (
                                            <Col xs={4}>
                                                <span className="p-2" key={index}>
                                                    <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                        {
                                                            skill.skillName==='Mongo'||skill.skillName==='MS-SQL'?

                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" style={{background: 'rgba(255,255,255,0.7315301120448179)'}}></Image>
                                                                :
                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                        }

                                                        <p style={{padding: '10px 10px'}}>{skill.skillName}</p>
                                                    </a>
                                                </span>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Backend Skills */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Backend 
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex skill-box">

                                    <Row>
                                        {skills.backend.map((skill, index) => (
                                            <Col xs={4}>
                                                <span className="p-2" key={index}>
                                                    <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                        {
                                                            skill.skillName==='Express'||skill.skillName==='Flask'?

                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" style={{background: 'white'}}></Image>
                                                                :
                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                        }
                                                        <p style={{padding: '10px 10px'}}>{skill.skillName}</p>
                                                    </a>
                                                </span>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Hosting Platforms */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title  ">
                                    Hosting Platforms
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start skill-box">
                                    <Row >
                                        {skills.hosting.map((skill, index) => (

                                            <Col xs={4}>
                                                <span className="p-2" key={index}>
                                                    <a className="text-white text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                        {
                                                            skill.skillName==='GitHub Pages'?

                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" style={{background: 'rgba(255,255,255,0.7315301120448179)'}}></Image>
                                                                :
                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                        }
                                                        <p style={{padding: '10px 10px'}}>{skill.skillName}</p>
                                                    </a>
                                                </span>
                                            </Col>


                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </CardDeck>
        </div>
    )
}

export default Skills
