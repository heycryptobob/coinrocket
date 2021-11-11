import { Container, Row, Col, Badge } from "react-bootstrap";
import styled from "styled-components";

const Link = styled.a`
  color: #58667e;

  &:hover {
    color: #1070e0d9;
  }
`

const BlueBadge = styled(Badge)`
  background-color: rgba(0,136,204,0.1);
  color: rgba(0,136,204,1.0);
`

const CustomItem = styled.li`
  font-weight: 600;
`

export function Footer() {
  return (
    <Row className="bg-white p-5">
      <Container className="py-5">
        <Row>
          <Col>
            <h6><strong>Support</strong></h6>
            <ul className="list-unstyled pt-2 text-muted">
              <CustomItem className="d-flex align-items-center my-2"><Link href="https://t.me/coinrocketsales" target="_blank">Listing Contact</Link></CustomItem>
              <CustomItem className="d-flex align-items-center">FAQ <BlueBadge variant="info" className="ml-2">Coming Soon</BlueBadge></CustomItem>
            </ul>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}