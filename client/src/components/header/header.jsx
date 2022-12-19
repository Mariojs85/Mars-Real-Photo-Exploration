import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [date, setDate]= useState()
  useEffect(()=> {
    let sec =setInterval(() => {
      let date  = new Date();
      setDate(date.toString(sec).substring(0,date.toString().indexOf("GMT")))
    },1000)
  })
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="header-container">
        <Navbar.Brand>
          <div>
            <div  className="d-flex align-items-center position-relative  ">
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
              <div className="time-div ">{date}</div>
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
              
              <Link to="/specials" className="custom-nav-link">
                Specials
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
