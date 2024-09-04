import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Sale() {
  return (
    <Container>
      <Container
        fluid
        // className="mt-5 mb-9"
        style={{ marginTop: 50, marginBottom: 90 }}
      >
        <Row>
          <Col md={4}>
            <div className="card" style={{ height: "230px" }}>
              <div className="card-body">
                <h5 className="card-title">On Sale This Week</h5>
                <h2 className="card-text">Proud Supplier Of Quality Vehicle</h2>
                <p className="card-text">Plakrore maheten. Astronens...</p>
                <span>Shop Now →</span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card" style={{ height: "230px" }}>
              <div className="card-body">
                <h5 className="card-title">On Sale This Week</h5>
                <h2 className="card-text">Your Trusted Car Parts Store</h2>
                <p className="card-text">Plakrore maheten. Astronens...</p>
                <a href="#" className="btn">
                  Shop Now →
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card" style={{ height: "230px" }}>
              <div className="card-body">
                <h5 className="card-title">On Sale This Week</h5>
                <h2 className="card-text">Different Type Of Tires Available</h2>
                <p className="card-text">Plakrore maheten. Astronens...</p>
                <a>Shop Now →</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
