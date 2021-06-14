import logo from "./logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Twitter, Telegram } from '@styled-icons/boxicons-logos'

export function Header() {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="40" alt="coinrocket" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="https://t.me/coinrocketapp" target="_blank" rel="noopener noreferrer"><Telegram size="24" className="text-white" /></Nav.Link>
          <Nav.Link href="https://twitter.com/coinrocketapp" target="_blank" rel="noopener noreferrer" ><Twitter size="24" className="text-white" /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
