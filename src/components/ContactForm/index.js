import { Form, Button, Col } from "react-bootstrap";
export function ContactForm() {
  return (
    <Form
      variant="dark"
      className="text-white mb-5"
      method="post"
      data-netlify="true"
    >
      <h2 className="title line-break-dark-bg">Contact Pangolin</h2>
      <Form.Group controlId="email" className="text-left mt-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="text-left">
        <Form.Row>
          <Col>
            <Form.Label for="firstName">First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Joe"
            />
          </Col>
          <Col>
            <Form.Label for="lastName">Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Pangolin" />
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="Message" className="text-left">
        <Form.Label>Message</Form.Label>
        <Form.Control required as="textarea" name="message" rows={3} />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
