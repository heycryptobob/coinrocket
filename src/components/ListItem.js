import { Image, ListGroup, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import styled from 'styled-components'
import { Telegram } from '@styled-icons/boxicons-logos'
import { LineChart } from '@styled-icons/boxicons-regular'
import { CheckCircle } from '@styled-icons/boxicons-solid'

const ChartButton = styled(Button)`
  line-height: 1;
  padding: 0.32rem;
  background-color: rgba(22,199,132,0.1);
  color: rgba(22,199,132,1.0);
  border: 0;

  &:hover {
    background-color: rgba(22,199,132,1.0);
  }
`

const TelegramButton = styled(Button)`
  line-height: 1;
  padding: 0.32rem;
  background-color: rgba(0,136,204,0.1);
  color: rgba(0,136,204,1.0);
  border: 0;

  &:hover {
    background-color: rgba(0,136,204,1.0);
  }
`

function TooltipBadge({ text, badge }) {

  const renderTooltip = (props) => (
    <Tooltip {...props}>
      {text}
    </Tooltip>
  )

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip(text)}>{badge}</OverlayTrigger>
  )
}

export function ListItem({ item, nb, type }) {
  return (
    <ListGroup.Item as="li" style={{ fontSize: '12px' }} className="border-0 px-0 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <span className="text-muted mr-2">{nb+1}</span>
        <Image src={item.image.url} width="18" height="18" alt={item.name} roundedCircle/>
        <strong className="ml-1">{item.name}</strong>
        <span className="text-muted ml-1">{item.symbol}</span>
        { item.kyc ? <TooltipBadge text="KYC" badge={<CheckCircle className="ml-1 text-success" size={16} />} /> : <></> }
        { item.audit ? <TooltipBadge text="Audit" badge={<CheckCircle className="ml-1 text-info" size={16} />} /> : <></> }
      </div>
      <div>
        { type === 'launching_soon' ? <></> :
          <ChartButton href={`https://poocoin.app/tokens/${item.address}`} target="_blank" variant="success" size="sm" className="mr-1"><LineChart size={16}/></ChartButton>
        }
        <TelegramButton href={item.telegram} target="_blank" variant="success" size="sm"><Telegram size={16}/></TelegramButton>
      </div>
    </ListGroup.Item>
  )
}