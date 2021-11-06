import { Card } from "react-bootstrap";

function getTitle(type) {
  switch (type) {
    case "trending":
      return "Trending"
    case "recently_launched":
      return "Recently Launched"
    case "launching_soon":
      return "Launching Soon"
    default:
      return "Unknown Type"
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