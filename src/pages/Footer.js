import { Container, Row, Col, Badge } from "react-bootstrap";
import styled from "styled-components";

const BlueBadge = styled(Badge)`
  background-color: rgba(0,136,204,0.1);
  color: rgba(0,136,204,1.0);
`

const CustomItem = styled.li`
  font-weight: 600;
`

export function Footer() {
  return (
    <Row className="bg-white my-5">
      <Container className="my-5">
        <Row>
          <Col>
            <h6><strong>Support</strong></h6>
            <ul className="list-unstyled pt-2 text-muted">
              <CustomItem className="d-flex align-items-center my-2">Contact <BlueBadge variant="info" className="ml-2">Coming Soon</BlueBadge></CustomItem>
              <CustomItem className="d-flex align-items-center">FAQ <BlueBadge variant="info" className="ml-2">Coming Soon</BlueBadge></CustomItem>
            </ul>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}