import { Container, Row, Col } from "react-bootstrap";
import { PromotionList } from "../components/PromotionList";
import { List } from '../components/List'
import { Social } from './Social'
import { Footer } from './Footer'

export function HomePage() {

  return (
    <>
      <Container>
        <Row className="mt-2">
          <PromotionList />
        </Row>
        <Row className="mt-2">
          <Col className="mt-3" sm={12} lg={4}><List type="spotlight" /></Col>
          <Col className="mt-3" sm={12} lg={4}><List type="recently_launched" /></Col>
          <Col className="mt-3" sm={12} lg={4}><List type="launching_soon" /></Col>
        </Row>
      </Container>
      <Social />
      <Footer />
    </>
  )
}