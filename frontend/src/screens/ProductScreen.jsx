/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img
            src="https://media.croma.com/image/upload/v1674045768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_4_cq8ois.png"
            variant="top"
          />
        </a>
        <Card.Body>
          <a href={`product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews}
            </div>
          </Card.Text>
          <Card.Text as="div">$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
