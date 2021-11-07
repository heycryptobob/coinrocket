import { Card, ListGroup, Collapse } from "react-bootstrap";
import { data } from "../data/lists";
import { ListItem } from "./ListItem";
import { UpArrowCircle, DownArrowCircle } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import { useState } from "react";

// const trending = data.filter((item) => item.hasOwnProperty('categories') && item.categories.hasOwnProperty('trending')).sort((a, b) => a.categories.trending > b.categories.trending ? 1 : -1)
// const recently_launched = data.filter((item) => item.hasOwnProperty('categories') && item.categories.hasOwnProperty('recently_launched'))
// const launching_soon = data.filter((item) => item.hasOwnProperty('categories') && item.categories.hasOwnProperty('launching_soon'))

// console.log(trending)
// console.log(recently_launched)
// console.log(launching_soon)

function getTitle(type) {
  switch (type) {
    case "trending":
      return "Trending";
    case "recently_launched":
      return "Recently Launched";
    case "launching_soon":
      return "Launching Soon";
    default:
      return "Unknown Type";
  }
}

function filteredSort(array, category) {
  return array
    .filter(
      (a) =>
        a.hasOwnProperty("categories") && a.categories.hasOwnProperty(category)
    )
    .sort((a, b) => (a.categories[category] > b.categories[category] ? 1 : -1));
}

const MoreButton = styled.a`
  color: rgb(56, 97, 251, 1);
  font-size: 12px;
  font-weight: 600;
  &:hover {
    color: rgb(56, 97, 251, 2);
    cursor: pointer;
  }
`;

const SIZE = 3;

function Collapsable({ array, type }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {array.slice(SIZE, array.length).map((item, nb) => (
        <ListItem item={item} key={nb} nb={nb+SIZE} type={type} />
      ))}
        </div>
      </Collapse>

      <ListGroup.Item className="d-flex justify-content-center">
        <MoreButton
          className="d-flex align-items-center"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          { open ? <UpArrowCircle size={16} /> : <DownArrowCircle size={16} />}
          <span className="pl-1">{ open ? 'Less' : 'More' }</span>
        </MoreButton>
      </ListGroup.Item>
    </>
  )
}

export function List({ type }) {
  

  const array = filteredSort(data, type);

  return (
    <Card className="shadow-sm" border="light">
      <Card.Body>
        <Card.Title>{getTitle(type)}</Card.Title>
        <ListGroup as="ol" numbered="true" variant="flush">
          {array.slice(0, SIZE).map((item, nb) => (
            <ListItem item={item} key={nb} nb={nb} type={type} />
          ))}

          { array.length > 3 ? <Collapsable array={array} type={type} /> : <></> }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
