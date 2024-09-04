import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
export default function LatestDeals() {
  return (
    <Container
      className="mt-5 mb-7"
      style={{ marginTop: 60, marginBottom: 70 }}
    >
      <Row className="mb-3">
        <Col>
          <h3>Latest Deals for This Week</h3>
        </Col>
        <Col xs="auto">
          <Button variant="danger">72:10:35:23</Button>{" "}
          <span className="text-muted">Remains until the end of the offer</span>
        </Col>
        <Col xs="auto">
          <Button variant="outline-primary">View All →</Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
