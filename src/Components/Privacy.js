import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Image,
} from "react-bootstrap";
import img from "../Assets/Img.jpg";
import AppStore from "./AppStore";
export default function Privacy() {
  return (
    <div>
      {" "}
      <footer className=" mb-2 bg-light">
        <Container>
          <Row>
            <Col md={6} className="">
              <Nav fill variant="pills" defaultActiveKey="/">
                <NavItem>
                  <NavLink href="/privacy-policy">Privacy Policy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/order-tracking">Order Tracking</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/terms-and-conditions"></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/refund-and-returns-policy">
                    Refund and Returns Policy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={6} className="mb-3 text-md-end">
              <p>Copyright 2024 © All rights reserved. Powered by YRCUTE.</p>
              <Image
                src={img}
                alt="Visa"
                width={40}
                height={40}
                className="me-2"
              />
              <Image
                src={img}
                alt="PayPal"
                width={40}
                height={40}
                className="me-2"
              />
              <Image
                src={img}
                alt="Skrill"
                width={40}
                height={40}
                className="me-2"
              />
            </Col>
          </Row>
        </Container>
        <AppStore />
      </footer>
    </div>
  );
}
