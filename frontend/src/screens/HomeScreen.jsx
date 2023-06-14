import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
// import Products from "../Products.js";
// import { products } from "../Products.js";
import ProductScreen from "./ProductScreen.jsx";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:8080/products`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product} />
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
