import { SiteNavBar } from "../../components/SiteNavBar";
import { Container, Col, Row } from "react-bootstrap";

const services = [
  { title: "Develop A Web Solution", description: "placeholder text" },
  { title: "Develop a Native App Solution", description: "placeholder text" },
  { title: "Quality Assurance & Testing", description: "placeholder text" },
];

export function Services() {
  return (
    <div>
      <SiteNavBar />
      <Container fluid>
        <Row>
          <Col className="text-center bg-dark text-white p-5">
            <h1 className="display-3 title">Services</h1>
          </Col>
        </Row>
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
