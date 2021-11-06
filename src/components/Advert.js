import { Card } from "react-bootstrap";

export function Advert({ ad }) {
  console.log(ad)
  return (
    <a href={ad.url}>
      <Card className="shadow" bg="transparent">
        <Card.Img src={ad.image_url} alt={ad.name} />
      </Card>
    </a>
  )
}