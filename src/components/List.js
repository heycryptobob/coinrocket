import { Card, ListGroup } from "react-bootstrap";
import { data } from '../data/lists';
import { ListItem } from "./ListItem";

// const trending = data.filter((item) => item.hasOwnProperty('categories') && item.categories.hasOwnProperty('trending')).sort((a, b) => a.categories.trending > b.categories.trending ? 1 : -1)
// const recently_launched = data.filter((item) => item.hasOwnProperty('categories') && item.categories.hasOwnProperty('recently_launched'))
// const launching_soon = data.filter((item) => item.hasOwnProperty('categories') && item.categories.hasOwnProperty('launching_soon'))

// console.log(trending)
// console.log(recently_launched)
// console.log(launching_soon)

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

function filteredSort(array, category) {
  return array.filter(a => a.hasOwnProperty('categories') && a.categories.hasOwnProperty(category)).sort((a, b) => a.categories[category] > b.categories[category] ? 1 : -1)
}

export function List({ type }) {

  const array = filteredSort(data, type)

  return (
    <Card className="shadow-sm" border="light">
      <Card.Body>
        <Card.Title>{getTitle(type)}</Card.Title>
        <ListGroup as="ol" numbered="true" variant="flush">
          {array.map((item, nb) => <ListItem item={item} key={nb} nb={nb} type={type} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  )

}