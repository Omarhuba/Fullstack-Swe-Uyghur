import { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./config";

import AuthContext from "../context/AuthProvider";
import { AuthProvider } from "../context/AuthProvider";

import "../App.scss";
import { useContext } from "react";

export const NavbarC = () => {
  const { auth, setAuth, accessToken } = useContext(AuthContext);
  const [button, setButton] = useState(true);
  const [success, setSuccsess] = useState(false);

  // console.log('hello' + auth.name);

  const loginHandler = () => {
    localStorage.getItem("adminToken", accessToken);
    setButton(true);
    setAuth({});
  };

  const logoutHandler = () => {
    localStorage.removeItem("adminToken", accessToken);
    setButton(false);
    setAuth("");
    console.log("logout");
  };

  return (
    <Router>
      <div>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              SWE-Uyghur
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/album">
                  Pictures
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                {!button ? (
                  <Nav.Link as={Link} to="/login" onClick={loginHandler}>
                    <i className="far fa-light fa-user"> Login </i>
                  </Nav.Link>
                ) : (
                  <NavDropdown title={auth.name} id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      onClick={logoutHandler}
                      as={Link}
                      to="/login"
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};
