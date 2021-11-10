import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components'
import { Telegram } from '@styled-icons/boxicons-logos'

const SocialRow = styled(Row)`
  background-color: #F8FAFD
`

const Heading = styled.h2`
  font-weight: 300;
`

const HeadingBold = styled.span`
  font-weight: 600;
`

const LeadText = styled.p`
  font-size: 24px;
`

const TelegramLink = styled.a`
  color: rgba(0,136,204,1.0);
  font-weight: 500;

  &:hover {
    color: rgba(0,136,204,0.5);
  }
`

export function Social() {
  return (
    <SocialRow className="p-5 mt-5">
      <Container className="py-5">
        <Row>
          <Col>
            <Heading>Be the first to know about <HeadingBold>new listings</HeadingBold></Heading>
            <LeadText className="text-muted">Announcements on Telegram.</LeadText>
            <div className="mt-4">
              <TelegramLink href="https://t.me/coinrocketapp" target="_blank" className="d-flex align-items-center">
                <Telegram size={24} />
                <span className="ml-2">coinrocketapp</span>
              </TelegramLink>
              {/* <TelegramLink href="https://t.me/coinrocketchat" target="_blank" className="d-flex align-items-center mt-2">
                <Telegram size={24} />
                <span className="ml-2">coinrocketchat</span>
              </TelegramLink> */}
            </div>
          </Col>
        </Row>
      </Container>
    </SocialRow>
  )
}