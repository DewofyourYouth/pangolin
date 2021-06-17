import logo from "../../pangolin_logo.png";
import { SiteNavBar } from "../../components/SiteNavBar";
import "./Home.css";
import { ContactForm } from "../../components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";

export function Home() {
  return (
    <div className="App">
      <SiteNavBar />
      <Container>
        <Row>
          <Col>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title" data-cy="site-title">
                Pangolin Software Solutions
              </h1>
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
