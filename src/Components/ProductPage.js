import React from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";

const ProductCardWeb = ({
  title,
  imageSrc,
  price,
  discount,
  oldPrice,
  review,
  addToCart,
  discountPercentage,
}) => {
  return (
    <Card className="mb-3 " style={{ height: "330px" }}>
      <Carousel>
        {imageSrc.map((src, index) => (
          <Carousel.Item key={index}>
            <img src={src} alt={`img ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body className="h-100 d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="d-flex align-items-center">
          <span className="mr-2">
            {discount && (
              <small className="text-muted">{`(${discountPercentage}%)`}</small>
            )}
          </span>
          <span>{discount ? `$${price}` : `$${price}`}</span>
          {oldPrice && (
            <span className="ml-2 text-decoration-line-through">
              {`$${oldPrice}`}
            </span>
          )}
        </Card.Text>
        {review && (
          <Card.Text className="text-muted">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" /> {review}
          </Card.Text>
        )}
        <Button variant="primary" onClick={addToCart}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

const ProductPage = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col md={3}>
          <div
            className="bg-dark text-light p-3 rounded"
            style={{ height: "675px" }}
          >
            <h2 className="-35%"></h2>
            <h4 className="mt-3">Only This Week</h4>
            <h2>Tools & Equipment</h2>
            <p>
              Nis telesa, laber. Mytonomi bedessade miheten. Pokura rengen,
              lulurat. Niren nunade håd. Sest berade. Nis telesa, laber.
              Mytonomi bedessade miheten. Pokura rengen, lulurat. Niren nunade
              håd. Sest berade.
            </p>
            <p>
              Nis telesa, laber. Mytonomi bedessade miheten. Pokura rengen,
              lulurat. Niren nunade håd. Sest berade. Nis telesa, laber.
              Mytonomi bedessade miheten. Pokura rengen, lulurat. Niren nunade
              håd. Sest berade.
            </p>
            <Button variant="light" className="mt-3">
              Shop Now
            </Button>
          </div>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={3}>
              <ProductCardWeb
                title="VISION-147 DAYTONA Hyper Silver"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Vision+Wheel",
                  "https://via.placeholder.com/300x200?text=Vision+Wheel+2",
                ]}
                price={209}
                oldPrice={254}
                discount={true}
                discountPercentage={18}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Thinkware F770 Dash Cam Dual Channel Wifi"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Dash+Cam",
                  "https://via.placeholder.com/300x200?text=Dash+Cam+2",
                ]}
                price={249.99}
                oldPrice={268.99}
                discount={true}
                discountPercentage={8}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Technaxx car Alarm with Charging Function"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Car+Alarm",
                  "https://via.placeholder.com/300x200?text=Car+Alarm+2",
                ]}
                price={47.99}
                oldPrice={51.99}
                discount={true}
                discountPercentage={21}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Spyder - Projector Headlights"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Projector+Headlights",
                  "https://via.placeholder.com/300x200?text=Projector+Headlights+2",
                ]}
                price={521.89}
                oldPrice={582.99}
                discount={true}
                discountPercentage={11}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Product 1"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Product+1",
                  "https://via.placeholder.com/300x200?text=Product+1+2",
                ]}
                price={150}
                discount={true}
                discountPercentage={24}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Product 2"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Product+2",
                  "https://via.placeholder.com/300x200?text=Product+2+2",
                ]}
                price={200}
                discount={true}
                discountPercentage={21}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Product 3"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Product+3",
                  "https://via.placeholder.com/300x200?text=Product+3+2",
                ]}
                price={350}
                discount={true}
                discountPercentage={29}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
            <Col md={3}>
              <ProductCardWeb
                title="Product 4"
                imageSrc={[
                  "https://via.placeholder.com/300x200?text=Product+4",
                  "https://via.placeholder.com/300x200?text=Product+4+2",
                ]}
                price={400}
                discount={true}
                discountPercentage={34}
                addToCart={() => console.log("Added to cart")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
