import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">El Gaucho Hamburguesas</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;