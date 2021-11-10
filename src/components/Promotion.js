import { Card } from "react-bootstrap";
import styled from "styled-components";

const Link = styled.a`
  &:hover {
    text-decoration: none;
  }
`

export function Promotion({ promotion }) {
  return (
    <Link href={promotion.target} target="_blank" rel="noreferrer">
      <Card bg="transparent" className="border-0">
        <Card.Img
          src={promotion.image.url}
          alt={promotion.title}
          className="shadowed"
        />
        <Card.Body className="px-0 py-1">
          <span className="text-muted" style={{ fontSize: "14px" }}>
            {promotion.title}
          </span>
          <p className="text-dark">{promotion.subtitle}</p>
        </Card.Body>
      </Card>
      </Link>
  );
}
