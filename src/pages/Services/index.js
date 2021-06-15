import { SiteNavBar } from "../../components/SiteNavBar";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";

const services = [
  {
    title: "Quality Testing & Assurance",
    description:
      "Eu labore amet magna officia tempor ullamco proident nisi consequat. Eiusmod ea qui ex adipisicing. Commodo ad irure nisi qui dolore sunt dolore dolor nulla. Laboris in dolore voluptate laboris occaecat ea amet non voluptate. Officia culpa sit eu ad veniam sit dolore qui eu aliquip veniam. Ullamco consectetur ex consequat adipisicing adipisicing magna. Aliqua proident aute deserunt ullamco tempor dolore.",
  },
  {
    title: "Develop A Web Solution",
    description:
      "Sunt nulla qui laboris et eu dolore. Eu consequat deserunt nulla labore eiusmod veniam Lorem. Officia cillum do sit eiusmod nostrud culpa fugiat dolor consectetur minim sint incididunt. Irure culpa minim sunt culpa quis ipsum reprehenderit consectetur cillum Lorem. Culpa laborum ea sint laboris deserunt fugiat ad irure culpa mollit velit magna commodo sit. Laborum irure pariatur labore ullamco enim culpa. \rIpsum eiusmod anim duis voluptate irure quis cupidatat cillum dolor est nulla velit aliquip do. Cillum incididunt deserunt laborum qui ut sint commodo. Magna ea excepteur laboris ex incididunt culpa incididunt amet sint occaecat amet id irure adipisicing. Laboris enim ex laboris commodo deserunt. Non non Lorem elit officia laborum aute enim et. Magna tempor cillum aliquip elit minim minim quis elit culpa magna enim consectetur.",
  },
  {
    title: "Develop a Native App Solution",
    description:
      "Do ex minim non esse sunt. Ipsum proident magna est elit excepteur aliqua consequat incididunt irure aliquip ea sunt ad ad. Aliquip duis deserunt qui consectetur anim eu ea consectetur ad aliquip cupidatat. Laboris elit labore qui esse Lorem enim. Lorem non exercitation et est occaecat officia laborum eiusmod laborum ut enim eu nisi ut.",
  },
  {
    title: "Develop a Blockchain Solution",
    description:
      "Sint culpa nulla in ipsum. Aliqua et est et cupidatat consectetur minim culpa ullamco Lorem aliqua magna. Mollit aute quis sit deserunt amet aliquip sunt veniam. Irure cillum ad proident nisi proident commodo elit.",
  },
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
              <h1 className="display-5 mb-4 section-title">{service.title}</h1>
              <div className="description text-justify">
                {service.description.split("\r").map((paragraph) => (
                  <p className="m-4">{paragraph}</p>
                ))}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
