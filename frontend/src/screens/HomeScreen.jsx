import { Col, Row } from "react-bootstrap";
// import Products from "../Products.js";
import { products } from "../Products.js";
import ProductScreen from "./ProductScreen.jsx";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <>
            <Col md={3} key={product._id}>
              <ProductScreen product={product} />
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
