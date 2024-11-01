import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BurgerCard = ({ burger, addToCart }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={burger.image} />
      <Card.Body>
        <Card.Title>{burger.name}</Card.Title>
        <Card.Text>Precio: ${burger.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(burger)}>Añadir al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default BurgerCard;