import { Container, Row, Col, Button } from "react-bootstrap";
import "./LaunchPage.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";
import { CoinList } from "../components/CoinList";

export function LaunchPage() {
  return (
    <Container className="mt-5 pt-5">
      {/* <h1 className="display-4 text-capitalize text-white mt-5 pt-5 mb-5">
        <Typewriter string="Launch your coin into orbit."></Typewriter>
      </h1>
      <h2 hidden>
        Find the next big crypto coin. Top voted, highest ranked, all time best
        crypto currency coin lists on the Binance Smart Chain Network.
      </h2>
      <Row>
        <Col md={6}>
          <p className="lead text-white">
            Coinrocket.app is a promotion platform for crypto currency projects.
            We are building a community of crypto enthusiasts in search for the
            next 1000x coins.
          </p>
          <Button
            as={Link}
            to="/apply"
            className="mt-5 text-uppercase"
            size="lg"
            variant="outline-light"
          >
            Get listed today
          </Button>
        </Col>
      </Row> */}
      <Row className="mt-5 pt-5">
        <Col lg={{ span: 10, offset: 1 }}>
          <CoinList />
        </Col>
      </Row>
    </Container>
  );
}
