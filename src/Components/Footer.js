import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import Privacy from "./Privacy";

export default function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-light mt-5 ">
        <Container>
          <Row>
            <Col sm={4} className="mt-5">
              <h5 className="mb-3">About Company</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
              <span href="mailto:info@example.com" className="text-dark">
                info@example.com
              </span>
            </Col>
            <Col sm={4} className="mt-5">
              <h5 className="mb-3">Need Help?</h5>
              <p className="mb-2">(+800) 1234 5678 90</p>
              <p>Monday - Friday: 9:00-20:00</p>
              <p>Saturday: 11:00-15:00</p>
              <span
                href="mailto:support@example.com"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                support@example.com
              </span>
            </Col>
            <Col sm={2} className="mt-5">
              <h5 className="mb-3">Customer Service</h5>
              <ul className="list-unstyled">
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Help Center
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    My account
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Track Products
                  </span>
                </li>
                <li>
                  <span href="#" className="text-dark">
                    My Orders
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Your Wishlist
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Return Policy
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Buy Gift Cards
                  </span>
                </li>
              </ul>
            </Col>

            <Col sm={2} className="mt-5">
              <h5 className="mb-3">Store Information</h5>
              <ul className="list-unstyled">
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    About Us
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Bestsellers
                  </span>
                </li>
                <li>
                  <span href="#" className="text-dark">
                    Latest Products
                  </span>
                </li>
                <li>
                  <span href="#" className="text-dark">
                    New Discounts
                  </span>
                </li>
                <li>
                  <span href="#" className="text-dark">
                    Sale Products
                  </span>
                </li>
                <li>
                  <span href="#" className="text-dark">
                    Affiliate Program
                  </span>
                </li>
                <li>
                  <span href="#" className="text-dark">
                    Sell on Partdo
                  </span>
                </li>
              </ul>
            </Col>
            <hr />
          </Row>
        </Container>
      </footer>
      <Privacy />
    </div>
  );
}
