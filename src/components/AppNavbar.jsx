import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import miLogo2 from '../assets/miLogo2.png'

const AppNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='home'  fixed='top'>
            <Container >
            <Navbar.Brand > <img src={miLogo2} className='logo' alt="" /></Navbar.Brand>
                <Navbar.Brand href="/" ><h1 className='home-name'>Home</h1> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#about"> <h5 className='home-items'>About Me</h5></Nav.Link>
                        <Nav.Link eventKey={2} href="#skill"> <h5 className='home-items'>Skills</h5></Nav.Link>
                        <Nav.Link href="#project"> <h5 className='home-items'>Projects</h5></Nav.Link>
                        <Nav.Link href="#contact"> <h5 className='home-items'>Contact Me</h5></Nav.Link>
                        <Nav.Link href="#cv"> <h5 className='home-items'>Cv</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
                }

export default AppNavbar;