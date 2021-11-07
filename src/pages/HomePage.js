import { Container, Row, Col } from "react-bootstrap";
import { Advert } from '../components/Advert'
import { List } from '../components/List'
import { adverts } from '../data/adverts'
import { Social } from './Social'
import { Footer } from './Footer'

export function HomePage() {
  return (
    <>
      <Container>
        <Row className="mt-2">
          {adverts.map((ad, id) => <Col sm={6} md={3} key={id} className="mt-3"><Advert ad={ad} /></Col> )} 
        </Row>
        <Row className="mt-2">
          <Col className="mt-3" sm={12} lg={4}><List type="trending" /></Col>
          <Col className="mt-3" sm={12} lg={4}><List type="recently_launched" /></Col>
          <Col className="mt-3" sm={12} lg={4}><List type="launching_soon" /></Col>
        </Row>
      </Container>
      <Social />
      <Footer />
    </>
  )
}