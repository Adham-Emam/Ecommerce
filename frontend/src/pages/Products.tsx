import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
const Products = () => {
  return (
    <Container>
      <Row>
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 xs-{0} md-{3} mt-2"
        >
          <Product />
        </Col>
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 xs-{0} md-{3} mt-2"
        >
          <Product />
        </Col>
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 xs-{0} md-{3} mt-2"
        >
          <Product />
        </Col>
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 xs-{0} md-{3} mt-2"
        >
          <Product />
        </Col>
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 xs-{0} md-{3} mt-2"
        >
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
