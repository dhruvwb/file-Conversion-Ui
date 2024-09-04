import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
export default function Header() {
  return (
    <div className="bg-dark" variant="dark" style={{ height: 40 }}>
      <Container>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link " style={{ color: "white" }} href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "white" }} href="#">
              Shop
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              style={{ color: "white" }}
              role="button"
              aria-expanded="false"
            >
              Tires & Wheels
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "white" }}
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "white" }}
                >
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "white" }}
                >
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Interior Accessories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Top Offers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Help Center
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}
