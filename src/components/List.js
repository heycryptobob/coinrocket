import { Card, ListGroup, Collapse } from "react-bootstrap";
// import { data } from "../data";
import { ListItem } from "./ListItem";
import { UpArrowCircle, DownArrowCircle } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";

const endpoint =
  "https://api-us-east-1.graphcms.com/v2/ckpwautxo7cgi01wk07vshu8h/master";
const query = gql`
  query getCategory($name: String!) {
    category(where: { name: $name }) {
      tokens {
        name
        symbol
        address
        telegram
        audit
        kyc
        image {
          url
        }
        publishedAt
      }
    }
  }
`;

function getTitle(type) {
  switch (type) {
    case "spotlight":
      return "Spotlight";
    case "recently_launched":
      return "Recently Launched";
    case "launching_soon":
      return "Launching Soon";
    default:
      return "Unknown Type";
  }
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

function Collapsable({ tokens, type }) {
  const [open, setOpen] = useState(false);
  // const array = getTokens(data[type], data.tokens)

  return (
    <>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {tokens.slice(SIZE, tokens.length).map((item, nb) => (
            <ListItem item={item} key={nb} nb={nb + SIZE} type={type} />
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
          {open ? <UpArrowCircle size={16} /> : <DownArrowCircle size={16} />}
          <span className="pl-1">{open ? "Less" : "More"}</span>
        </MoreButton>
      </ListGroup.Item>
    </>
  );
}

function Group({ tokens, type }) {
  return (
    <ListGroup as="ol" numbered="true" variant="flush">
      {tokens.slice(0, SIZE).map((item, nb) => (
        <ListItem item={item} key={nb} nb={nb} type={type} />
      ))}

      {tokens.length > 3 ? <Collapsable tokens={tokens} type={type} /> : <></>}
    </ListGroup>
  );
}

export function List({ type }) {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    async function fetchTokens() {
      const { category } = await request(endpoint, query, { name: type });
      setTokens(category.tokens);
    }
    fetchTokens();
  }, [type]);

  return (
    <Card className="shadow-sm" border="light">
      <Card.Body>
        <Card.Title>{getTitle(type)}</Card.Title>
        {tokens.length > 0 ? <Group tokens={tokens} type={type} /> : <></>}
      </Card.Body>
    </Card>
  );
}
