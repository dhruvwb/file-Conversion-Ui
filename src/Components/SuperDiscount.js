import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
export default function SuperDiscount() {
  return (
    <div>
      {" "}
      <Container style={{ marginTop: 60, marginBottom: 80 }}>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="p-3 border rounded-3">
              <h4 className="text-center text-primary">
                Super discount for your first purchase
              </h4>
              <div className="d-flex justify-content-between mt-3">
                <Button variant="primary">PRT45023</Button>
                <span className="text-muted">
                  Use discount code in checkout page.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
