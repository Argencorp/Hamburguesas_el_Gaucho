import React, { useState } from 'react';
import { ListGroup, Button, Container, Modal } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Container className="mt-4">
      <Button variant="primary" onClick={handleToggleCart}>
        Ver Carrito
      </Button>

      <Modal show={showCart} onHide={handleToggleCart}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  {item.name} - ${item.price}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(index)}
                    className="float-end"
                  >
                    Eliminar
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <h3 className="mt-3">Total: ${totalPrice}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Proceder al Pago</Button>
          <Button variant="secondary" onClick={handleToggleCart}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cart;
