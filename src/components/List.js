import { Card } from "react-bootstrap";

function getTitle(type) {
  switch (type) {
    case "trending":
      return "Trending"
      break;
    case "recently_launched":
      return "Recently Launched"
      break;
    case "launching_soon":
      return "Launching Soon"
      break;
    default:
      break;
  }
}

export function List({ type }) {

  return (
    <Card className="shadow-sm" border="light">
      <Card.Body>
        <Card.Title>{getTitle(type)}</Card.Title>
      </Card.Body>
    </Card>
  )

}