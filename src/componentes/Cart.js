import React from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <h2>Carrito de Compras</h2>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  {item.name} - ${item.price}
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="float-end">Eliminar</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <h3 className="mt-3">Total: ${totalPrice}</h3>
          <Button variant="success" className="mt-2">Proceder al Pago</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;