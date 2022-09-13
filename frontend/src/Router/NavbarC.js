import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import routes from "./config";



export const NavbarC = () => {

  return (
    <Router>
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Container >
             <Navbar.Brand href="/">SWE-Uyghur</Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                 {/* <Nav.Link as={Link} to={"/"}>Home</Nav.Link> */}
                 <Nav.Link href="/album">Pictures</Nav.Link>
                 <Nav.Link href="/about">About</Nav.Link>
                 <NavDropdown title="Products" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="/football">Fotball</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Kläder
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">
                     Skor
                   </NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                     Allt Annat
                   </NavDropdown.Item>
                 </NavDropdown>
               </Nav>
               <Nav>
                 <Nav.Link href="/login">
                   <i className="fa fa-light fa-user"> Login</i>
                 </Nav.Link>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>

      </div>
      <div>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};
