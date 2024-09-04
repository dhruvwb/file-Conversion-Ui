import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function AutoPostAd() {
  return (
    <div>
      <Container className="mt-5" style={{ marginTop: 60, marginBottom: 70 }}>
        <Row>
          <Col md={6}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <span className="badge bg-danger">On Sale This Week</span>
                </h5>
                <h2 className="card-text">
                  Genuine Auto Parts You Can Find at Affordable Prices
                </h2>
                <p className="card-text">
                  Plakrore maheten. Astronens ultranirad. Dod.
                </p>
                <a href="#" className="btn btn-primary">
                  Shop Now →
                </a>
                {/* <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6b37f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  fluid
                  className="mt-3"
                /> */}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <span className="badge bg-danger">On Sale This Week</span>
                </h5>
                <h2 className="card-text">
                  Wide Range Of Genuine Auto Parts at Premium Pricing
                </h2>
                <p className="card-text">
                  Plakrore maheten. Astronens ultranirad. Dod.
                </p>
                <a href="#" className="btn btn-primary">
                  Shop Now →
                </a>
                {/* <Image
                  src="https://images.unsplash.com/photo-1525966222101-04148543681f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  fluid
                  className="mt-3"
                /> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
