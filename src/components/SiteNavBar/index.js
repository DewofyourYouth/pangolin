import "bootstrap/dist/css/bootstrap.min.css";

import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function SiteNavBar() {
  return (
    <Navbar bg="transparent" variant="dark" fixed="top">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link variant="dark" data-cy="home-link">
            Home
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link data-cy="about-link">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/services">
          <Nav.Link data-cy="services-link">Services</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
