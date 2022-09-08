import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
// import "../Modules/navbar.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faBag } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Home } from "../views/Home";
import { Album } from "../views/Album";
import { Products } from "../views/Products";
import { About } from "../views/About";

export const NavbarComponent = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">SWE-Uyghur</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/album"}>Album</Nav.Link>
                <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                <FontAwesomeIcon icon={faCoffee} />

                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <i className="fa fa-light fa-user"> Login</i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};
