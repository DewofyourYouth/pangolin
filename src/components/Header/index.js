import { Col, Container, Row } from "react-bootstrap";

import { SiteNavBar } from "../SiteNavBar";

export function Header({ title }) {
  return (
    <header>
      <SiteNavBar />
      <Container fluid>
        <Row>
          <Col className="text-center bg-dark text-white p-5">
            <h1 className="display-3 title" data-cy="page-title">
              {title}
            </h1>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
