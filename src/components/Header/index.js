import "./header.css";

import { Col, Container, Row } from "react-bootstrap";

import { SiteNavBar } from "../SiteNavBar";

export function Header({ title }) {
  return (
    <header>
      <Container fluid>
        <SiteNavBar />
        <Row>
          <Col className="text-center bg-dark-theme text-white p-5">
            <h1 className="title" data-cy="page-title">
              {title}
            </h1>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
