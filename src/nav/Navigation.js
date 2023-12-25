import './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link as={Link} to="/home" className="nav-link">home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">my projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">about me</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;