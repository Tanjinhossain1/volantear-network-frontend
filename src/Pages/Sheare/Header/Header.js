import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../../logos/Group 1329.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" className='text-black'>
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <img width={150} src={headerLogo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">               
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/event">Events</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link className='border py-2 px-3 bg-primary rounded-3 text-white' as={Link} to="/register">Register</Nav.Link>  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;