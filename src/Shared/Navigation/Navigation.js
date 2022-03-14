import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navlink.css"

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">X-SpeedStudio</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="navLink" to="/table">Table</NavLink>
            <NavLink className="navLink" to="/getForm">GetForm</NavLink>
            <NavLink className="navLink" to="/updateForm">UpdateForm</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
