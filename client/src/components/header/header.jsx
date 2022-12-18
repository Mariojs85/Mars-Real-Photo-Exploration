import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [date, setDate]= useState()
  useEffect(( )=> {
    let sec =setInterval(() => {
      let date  = new Date();
      setDate(date.toString().substring(0,date.toString().indexOf("GMT")))
    },1000)
  })
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="header-container">
        <Navbar.Brand>
          <div>
            <div  className="d-flex align-items-center  ">
              <div>
                <Link to="/">
                  <img
                    alt=""
                    src="/Photos/images.png"
                    width="50"
                    height="40"
                    // className=" header-logo d-inline-block align-top"
                    className=" header-logo "
                  />
                </Link>
              </div>
              <Link style={{ color: "white", textDecoration: "none", }} to="/">
                <div className="header-title"> Amazing Mars Rovers</div>
              </Link>              
              <div className="time-div">{date}</div>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="links d-flex">
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Link to="/" className="custom-nav-link">
                Home
              </Link>
              {/* <Link to="/roverPhoto" className="custom-nav-link">
                Rover Photos
              </Link> */}
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
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
