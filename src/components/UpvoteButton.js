import { UpArrowAlt } from "@styled-icons/boxicons-regular";
import { Button } from "react-bootstrap";

export function UpvoteButton({ coin }) {
  return (
    <Button variant="outline-success" disabled>
      <UpArrowAlt size={16} />
      <span className="ml-1 text-uppercase d-none d-lg-block">1234</span>
    </Button>
  );
}
