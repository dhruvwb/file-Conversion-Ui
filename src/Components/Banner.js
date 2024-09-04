import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import NavBar from "./NavBar";
import Header from "./Header";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import AutoPostAd from "./AutoPostAd";
import ProductPage from "./ProductPage";
import Sale from "./Sale";
import DiscountBanner from "./DiscountBanner";
import LatestDeals from "./LatestDeals";
import OurGoodCustomers from "./OurGoodConsumers";
import SuperDiscount from "./SuperDiscount";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import CarousalComp from "./CarousalComp";
export default function Banner() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm" style={{ height: 40 }}>
        <Container>
          <Navbar.Brand href="/">My Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/my-account">My account</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/order-tracking">
                  Order Tracking
                </NavDropdown.Item>
                <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                Need help? Call us: (+800) 1234 5678 90 or info@company.com
              </Nav.Link>
              <NavDropdown title="English" id="language-dropdown">
                <NavDropdown.Item href="#">Español</NavDropdown.Item>
                <NavDropdown.Item href="#">French</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="USD" id="currency-dropdown">
                <NavDropdown.Item href="#">EUR</NavDropdown.Item>
                <NavDropdown.Item href="#">GBP</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavBar />
      <Header />
      <CarousalComp />
      <Categories />
      <ProductCard />
      <DiscountBanner />
      <AutoPostAd />
      <LatestDeals />
      <ProductPage />
      <Sale />
      <OurGoodCustomers />
      <SuperDiscount />
      <NewsLetter />
      <Footer />
    </div>
  );
}
