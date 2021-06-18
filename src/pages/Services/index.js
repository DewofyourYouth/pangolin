import { Col, Container, Row } from "react-bootstrap";

import { Header } from "../../components/Header";
import services from "../../content/services/services.json";

export function Services() {
  return (
    <div>
      <Header title="Services" />
      <Container fluid>
        {services.map((service, i) => (
          <Row>
            <Col
              className={
                i % 2 === 0
                  ? "text-left bg-light p-5"
                  : "text-right bg-secondary text-white p-5"
              }
            >
              <h2 className="display-5">{service.title}</h2>
              <p>{service.description}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
