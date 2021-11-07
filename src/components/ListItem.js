import { Image, ListGroup, Badge, Button } from "react-bootstrap"
import styled from 'styled-components'
import { Telegram } from '@styled-icons/boxicons-logos'
import { LineChart } from '@styled-icons/boxicons-regular/LineChart'

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

export function ListItem({ item, nb, type }) {
  return (
    <ListGroup.Item as="li" style={{ fontSize: '12px' }} className="border-0 px-0 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <span className="text-muted mr-3">{nb+1}</span>
        <Image src={item.logo_url} width="24" height="24" alt={item.name} roundedCircle/>
        <strong className="ml-2">{item.name}</strong>
        <span className="text-muted ml-2">{item.symbol}</span>
        { item.kyc ? <Badge pill variant="success" className="ml-2">KYC</Badge> : <></>}
      </div>
      <div>
        { type === 'launching_soon' ? <></> :
          <ChartButton href={`https://poocoin.app/tokens/${item.address}`} target="_blank" variant="success" size="sm" className="mr-1"><LineChart size={16}/></ChartButton>
        }
        <TelegramButton href={`${item.telegram_url}?text=/TO_THE_MOON`} target="_blank" variant="success" size="sm"><Telegram size={16}/></TelegramButton>
      </div>
    </ListGroup.Item>
  )
}