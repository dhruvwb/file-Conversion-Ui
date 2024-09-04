import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

function OurGoodCustomers() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Good Customers</h2>
      <p className="text-center mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <Row>
        <Col md={4} className="mb-4 ">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  className="mr-3"
                />
                <div className="p-2">
                  <h5 className="mb-0 ">Jessica Lindström</h5>
                  <p className="mb-0">Sales Manager</p>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-warning">★★★★★</span>
              </div>
              <p>Astropons intimitetskoordinator podiktigt.</p>
              <p>
                Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng
                e-krona.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  className="mr-3"
                />
                <div className="p-2">
                  <h5 className="mb-0">Teresa Holland</h5>
                  <p className="mb-0">Sales Manager</p>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-warning">★★★★★</span>
              </div>
              <p>Astropons intimitetskoordinator podiktigt.</p>
              <p>
                Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng
                e-krona.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  className="mr-3"
                />
                <div className="p-2">
                  <h5 className="mb-0">Scarlett Edwards</h5>
                  <p className="mb-0">Sales Manager</p>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-warning">★★★★★</span>
              </div>
              <p>Astropons intimitetskoordinator podiktigt.</p>
              <p>
                Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng
                e-krona.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OurGoodCustomers;
