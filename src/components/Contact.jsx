import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="fw-bold mb-4">
        Contact <span style={{ color: "#f8b400" }}>Us</span>
      </h1>
      <p className="lead text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
        Have a question, suggestion, or just want to say hello?  
        We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
      </p>
      <Form className="mx-auto" style={{ maxWidth: "600px", textAlign: "left" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="dark"
            className="px-5 py-2 rounded-pill"
            style={{ backgroundColor: "#f8b400", border: "none" }}
            onClick={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out! We’ll get back to you soon.");
            }}
          >
            Send Message
          </Button>
        </div>
      </Form>

      <div className="mt-5 text-muted">
        <p>Email: <strong>vaishnavisherala1@gmail.com</strong></p>
        <p>Contact: <strong>9175484351</strong></p>
      </div>
    </Container>
  );
};

export default Contact;
