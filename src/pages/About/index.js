import "./about.css";

import { Col, Container, Row } from "react-bootstrap";

import { Header } from "../../components/Header";
import { ParsedMarkdown } from "../../components/ParsedMarkdown";
import aboutText from "../../content/about/about.mdx";
import acheiveList from "../../content/about/acheive.md";
import assumptionsList from "../../content/about/assumptions.md";

export function About() {
  return (
    <div>
      <Header title="About" />
      <Container>
        <Row>
          <Col className="text-center p-5">
            <ParsedMarkdown file={aboutText} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="list-column assumptions pb-5">
            <h4 className="p-4 text-center" style={{ minHeight: "130px" }}>
              Here at Pangolin, we have some assumptions about what you want.
            </h4>
            <ParsedMarkdown file={assumptionsList} />
          </Col>
          <Col xs={12} md={6} className="list-column achieve">
            <h4 className="p-4 text-center" style={{ minHeight: "130px" }}>
              We strive to deliver this through:
            </h4>
            <ParsedMarkdown file={acheiveList} />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
