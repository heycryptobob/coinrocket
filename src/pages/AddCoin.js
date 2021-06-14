import { CoinForm } from "../forms/CoinForm";
import { Container, Row, Col } from "react-bootstrap";

export function AddCoin() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center mb-3 text-white">
          <h1 className=" text-uppercase">List your coin</h1>
          <h2 hidden>Promote your coin by getting listed on coinrocket.app.</h2>
          <p className="mt-4">
            First 3 projects to signup to register will receive 🔥 2 weeks of <strong>FREE</strong> promotion 🔥.
            </p>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <CoinForm />
        </Col>
      </Row>
    </Container>
  );
}
