import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function DiscountBanner() {
  return (
    <Container
      // className="mt-5 mb-5"
      style={{ marginTop: 60, marginBottom: 70 }}
    >
      <Container className="bg-light py-3">
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={6}>
            <h2 className="text-purple">
              -39% Super discount for your first purchase
            </h2>
            <p className="text-muted">Use discount code in checkout page.</p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <h1 className="display-1 text-purple font-weight-bold">39%</h1>
            <p className="text-purple font-weight-bold">FREE15FIRST</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DiscountBanner;
