import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Padho And Bado</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tests</Nav.Link>
            <NavDropdown title="Faculty" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sumit Yadab</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Abhishar Sharma</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">RD Sharma</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
  }
  
export default CustomNavbar;