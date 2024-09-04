import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const ProductCardPage = ({
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
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
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
