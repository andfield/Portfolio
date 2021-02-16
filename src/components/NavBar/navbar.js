import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/icons/S.png'
import './styles.css'

const NavBar=() => {
    return (
        <div>
            <Navbar fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                {/* Brand Logo */}
                <div>
                    <Navbar.Brand href="#home">
                        <img src={logo} />
                    </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Experience">Experience</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
