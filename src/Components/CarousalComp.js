import React from "react";
import {
  Carousel,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import img from "../Assets/Img.jpg";
export default function CarousalComp() {
  return (
    <Container>
      <Container style={{ marginTop: 50, marginBottom: 50 }}>
        <Row>
          <Col md={9}>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <Image
                    src={img}
                    style={{ height: "400px", width: "400px" }}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <Image
                    src={img}
                    style={{ height: "400px", width: "400px" }}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <Image
                    src={img}
                    style={{ height: "200px", width: "200px" }}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </Col>
          <Col md={3} style={{ height: "100%", borderRadius: "50%" }}>
            <ListGroup variant="flush" className="rounded">
              <ListGroupItem variant="dark" className="bg-dark text-white">
                Headlights & Lighting
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Interior Accessories
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Tires & Wheels
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Tools & Equipment
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Auto Safety & Security
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Garage Tools
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Original Battery Tools
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Phone Displays
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Battery and adhesives
                <span className="float-end">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
