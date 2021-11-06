import logo from "./images/Logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Twitter, Telegram } from '@styled-icons/boxicons-logos'
import './Header.css'

export function Header() {
  return (
    <Navbar bg="white" expand="lg" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="96" alt="coinrocket" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="https://t.me/coinrocketapp" target="_blank" rel="noopener noreferrer"><Telegram size="24" className="text-dark" /></Nav.Link>
          <Nav.Link href="https://twitter.com/coinrocketapp" target="_blank" rel="noopener noreferrer" ><Twitter size="24" className="text-dark" /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
