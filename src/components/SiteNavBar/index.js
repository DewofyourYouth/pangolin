import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router } from "react-router-dom";

export function SiteNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link variant="dark">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/services">
          <Nav.Link>Services</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
