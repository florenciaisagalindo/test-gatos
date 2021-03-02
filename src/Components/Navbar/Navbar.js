import React from "react";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navb = () => {
  return (
    <Navbar expand='lg' bg='light' variant='light' fixed='top'>
      <img
        className='logo'
        style={{
          width: "55px",
          margin: "auto 30px",
          padding: "auto 10px",
          borderRadius: "100%"
        }}
        src=''
        alt=''
      ></img>
      <Nav>
        <NavLink
          className='link-nav'
          to='/nosotros'
          eventKey={2}
          style={{ paddingTop: "16px" }}
        >
          Nosotros
        </NavLink>
        <NavLink
          className='link-nav'
          to='/patrocinadores'
          eventKey={2}
          style={{ paddingTop: "16px" }}
        >
          Patrocinadores
        </NavLink>
        <NavLink
          className='link-nav'
          to='/regalanos-un-cafe'
          eventKey={2}
          style={{ paddingTop: "16px" }}
        >
          Regalanos un café ☕️
        </NavLink>

      </Nav>
    </Navbar>
  );
};

export default Navb;