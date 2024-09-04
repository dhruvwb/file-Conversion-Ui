import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function NewsLetter() {
  return (
    <div>
      {" "}
      <Container
        className="bg-purple p-5"
        style={{ backgroundColor: "purple", borderRadius: "10px" }}
      >
        <Row className="justify-content-center align-items-center">
          <Col md={6} lg={5}>
            <div className="text-start">
              <h2 className="text-white mb-4">Join our newsletter</h2>
              <h3 className="text-white mb-4">
                Get our emails for info on new items, sales and much more.
              </h3>
              <p className="text-white mb-4">
                Register now to get latest updates on promotions & coupons.
                Don't worry, we not spam!
              </p>
            </div>
          </Col>
          <Col md={6} lg={5}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="border-white"
                />
              </Form.Group>
              <Button variant="danger" className="m-2" type="submit">
                Subscribe
              </Button>
              <p className="text-white mt-3">
                By subscribing you agree to our{" "}
                <a href="#" className="text-white">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-white">
                  Privacy & Cookies Policy.
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
