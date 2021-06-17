import { Form, Button, Col } from "react-bootstrap";
export function ContactForm() {
  return (
    <Form variant="dark" className="text-white mb-5" netlify>
      <h2 className="title line-break-dark-bg">Contact Pangolin</h2>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="Joe" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Pangolin" />
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="Message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
