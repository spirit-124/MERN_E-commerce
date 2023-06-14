/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { products } from "../Products";
import Rating from "../components/Rating";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  ListGroup,
  Image,
  ListGroupItem,
  Button,
} from "react-bootstrap";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/products/${match.params.id}`
      );
      setProduct(data);
    };
    fetchProduct();
  });

  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
        &nbsp; Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.value}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "IN Stock" : "out of stock"}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className="btn-block" type="button">
              Add To Cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
