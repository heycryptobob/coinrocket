import { Image } from "react-bootstrap";

export function Advert({ ad }) {
  console.log(ad)
  return (
    <a href={ad.url}>
      <Image src={ad.image_url} alt={ad.name} className="shadow-sm" fluid />
    </a>
  )
}