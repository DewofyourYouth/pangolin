import "./Home.css";

import { Col, Container, Row } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { ContactForm } from "../../components/ContactForm";
import { SiteNavBar } from "../../components/SiteNavBar";
import logo from "../../pangolin_logo.png";

export function Home() {
  return (
    <div className="App">
      <SiteNavBar />
      <Container>
        <Row>
          <Col>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title pb-5" data-cy="site-title">
                Pangolin Software Solutions
              </h1>
              <Button href="#contact" variant="outline-success" size="lg">
                CONTACT PANGOLIN
              </Button>
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
