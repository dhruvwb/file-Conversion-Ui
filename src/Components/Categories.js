import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Image,
  Badge,
  ListGroup,
} from "react-bootstrap";
import img from "../Assets/Img.jpg";
export default function Categories() {
  return (
    <div>
      <Container style={{ marginTop: 60, marginBottom: 60 }}>
        <Row className="mt-10 mb-10">
          <Col xs={12} md={12} style={{ margin: "5px" }}>
            <h2 className="mb-5">Featured Products</h2>
          </Col>
          <Col xs={12} md={3}>
            <Card style={{ minHeight: "200px", maxHeight: "500px" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{
                  height: "200px",
                  width: "300px",
                  objectFit: "contain",
                }}
              />
              <Card.Body>
                <Card.Title>
                  Thinkware F770 Dash Cam Dual Channel Wifi
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>***** 1 review</ListGroup.Item>
                    <ListGroup.Item>
                      <del>$268.99</del>
                      <span className="ms-2">
                        <Badge bg="primary" className="me-2">
                          8%
                        </Badge>
                        $249.99
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button variant="primary">Add to cart</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>In Stock</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card style={{ minHeight: "200px", maxHeight: "500px" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{
                  height: "200px",
                  width: "300px",
                  objectFit: "contain",
                }}
              />
              <Card.Body>
                <Card.Title>
                  Technaxx car Alarm with Charging Function
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>***** 1 review</ListGroup.Item>
                    <ListGroup.Item>
                      <del>$51.99</del>
                      <span className="ms-2">
                        <Badge bg="primary" className="me-2">
                          8%
                        </Badge>
                        $49.99
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button variant="primary">Add to cart</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>In Stock</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card style={{ minHeight: "200px", maxHeight: "500px" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{
                  height: "200px",
                  width: "300px",
                  objectFit: "contain",
                }}
              />
              <Card.Body>
                <Card.Title>
                  Right Stuff - Drilled and Slotted Brake Rotor
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>***** 1 review</ListGroup.Item>
                    <ListGroup.Item>
                      <del>$199.37</del>
                      <span className="ms-2">
                        <Badge bg="primary" className="me-2">
                          21%
                        </Badge>
                        $157.99
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button variant="primary">Add to cart</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>In Stock</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card style={{ minHeight: "200px", maxHeight: "500px" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{
                  height: "200px",
                  width: "300px",
                  objectFit: "contain",
                }}
              />
              <Card.Body>
                <Card.Title>
                  R1 Concepts - eLINE Series Plain Brake Rotors
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>***** 1 review</ListGroup.Item>
                    <ListGroup.Item>
                      <del>$219.60</del>
                      <span className="ms-2">
                        <Badge bg="primary" className="me-2">
                          15%
                        </Badge>
                        $187.60
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button variant="primary">Add to cart</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>In Stock</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br />
          <Col xs={12} md={3} style={{ marginTop: "30px" }}>
            <Card style={{ minHeight: "200px", maxHeight: "500px" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{
                  height: "200px",
                  width: "300px",
                  objectFit: "contain",
                }}
              />
              <Card.Body>
                <Card.Title>
                  Power Stop - Evolution Drilled and Slotted
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>***** 1 review</ListGroup.Item>
                    <ListGroup.Item>
                      <del>$162.99</del>
                      <span className="ms-2">
                        <Badge bg="primary" className="me-2">
                          5%
                        </Badge>
                        $154.89
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button variant="primary">Add to cart</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>In Stock</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
