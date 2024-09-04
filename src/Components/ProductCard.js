import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

export default function ProductCard() {
  return (
    <div>
      {" "}
      <Container style={{ marginTop: 60, marginBottom: 60 }}>
        <Row className="mt-5">
          <Col md={6}>
            <Card>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-danger">6%</span>
                  <i className="bi bi-heart-fill"></i>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  5" Monitor with 1080P Backup Camera for Truck
                </Card.Title>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <span className="ms-2">1 review</span>
                  </div>
                  <div className="d-flex">
                    <span className="text-decoration-line-through">$88.99</span>
                    <span className="ms-2 text-danger"> $83.99</span>
                  </div>
                </Card.Text>
                <div className="mt-3">
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Available: 39</span>
                    <span>Sold: 36</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-danger">23%</span>
                  <i className="bi bi-heart-fill"></i>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Lumen® Custom Sealed Beam LED Headlights
                </Card.Title>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <span className="ms-2">1 review</span>
                  </div>
                  <div className="d-flex">
                    <span className="text-decoration-line-through">$89.99</span>
                    <span className="ms-2 text-danger"> $69.99</span>
                  </div>
                </Card.Text>
                <div className="mt-3">
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Available: 65</span>
                    <span>Sold: 36</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
