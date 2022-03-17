import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navlink.css"

const Navigation = () => {
  const navigate = useNavigate()
  const goHome = ()=>{
    navigate("/home")
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >X-SpeedStudio</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="navLink" to="/table"><b>Table</b></NavLink>
            <NavLink className="navLink" to="/getForm"><b>GetForm</b></NavLink>
            {/* <NavLink className="navLink" to="/updateForm/:id"><b>UpdateForm</b></NavLink> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
