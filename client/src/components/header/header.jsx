import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="header-container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/Photos/images.png"
            width="50"
            height="40"
            className=" header-logo d-inline-block align-top"
          />{" "}
          {""} Amazing Mars Rovers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="custom-nav-link">
              Home
            </Link>
            <Link to="/roverPhoto" className="custom-nav-link">
              Rover Photos
            </Link>
            <Link to="/specials" className="custom-nav-link">
              Specials
            </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
