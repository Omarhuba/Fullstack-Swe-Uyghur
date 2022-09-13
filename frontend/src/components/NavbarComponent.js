import React,{useContext} from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Home } from "../views/Home";
import { Album } from "../views/Album";
import { Products } from "../views/Products";
import { About } from "../views/About";
import { LoginView } from "../views/auth/LoginView";


import AuthContext from "../context/AuthProvider";

export const NavbarComponent = () => {
  const {auth} = useContext(AuthContext)
console.log('hellllooooo'+AuthContext);
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">SWE-Uyghur</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
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
                <Nav.Link as={Link} to={'/login'}>
                  <i className="fa fa-light fa-user"> Login</i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </div>
    </Router>
  );
};
