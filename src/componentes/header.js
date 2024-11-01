import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Hamburguesas El Gaucho</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/hamburguesas">Hamburguesas</Nav.Link>
          <Nav.Link as={Link} to="/nosotros">Sobre Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/negocios">Negocios</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
