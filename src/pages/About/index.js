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
          <Col>
            <h4 className="p-4">
              Here at Pangolin, we have some assumptions about what you want.
            </h4>
          </Col>
          <Col>
            <h4 className="p-4">We strive to deliver this through:</h4>
          </Col>
        </Row>
        <Row>
          <Col className="list-column assumptions pb-5">
            <ParsedMarkdown file={assumptionsList} />
          </Col>
          <Col className="list-column achieve">
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
