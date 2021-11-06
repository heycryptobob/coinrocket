import { Container, Row, Col } from "react-bootstrap";
import { Advert } from '../components/Advert'
import { List } from '../components/List'
import { adverts } from '../data/adverts'

export function HomePage() {
  return (
    <Container>
      <Row className="mt-5">
        {adverts.map((ad, id) => <Col key={id}><Advert ad={ad} /></Col> )} 
      </Row>
      <Row className="mt-5">
        <Col><List type="trending" /></Col>
        <Col><List type="recently_launched" /></Col>
        <Col><List type="launching_soon" /></Col>
      </Row>
    </Container>
  )
}//)}