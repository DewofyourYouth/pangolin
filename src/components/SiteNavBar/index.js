import "bootstrap/dist/css/bootstrap.min.css";

import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function SiteNavBar() {
  return (
    <Navbar
      collapseOnSelect
      className="bg-dark-theme"
      variant="dark"
      fixed="top"
      expand="lg"
    >
      <LinkContainer exact to="/">
        <Navbar.Brand variant="dark" data-cy="home-link">
          Pangolin
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/about">
            <Nav.Link data-cy="about-link">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link data-cy="services-link">Services</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
