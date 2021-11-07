import { Container, Row, Col } from "react-bootstrap";
import { Promotion } from '../components/Promotion'
import { List } from '../components/List'
// import { adverts } from '../data/adverts'
import { Social } from './Social'
import { Footer } from './Footer'
import { data } from '../data/list'

export function HomePage() {

  const promotions = data.filter(a => a.hasOwnProperty('promotion'))

  return (
    <>
      <Container>
        <Row className="mt-2">
          {promotions.map((item, id) => <Col xs={6} md={3} key={id} className="mt-3"><Promotion promotion={item.promotion} /></Col> )} 
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