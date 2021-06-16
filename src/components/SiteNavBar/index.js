import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router } from "react-router-dom";

export function SiteNavBar() {
  return (
    <Navbar bg="transparent" variant="dark" fixed="top">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link variant="dark" data-cy="home-link">
            Home
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/services">
          <Nav.Link data-cy="services-link">Services</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
