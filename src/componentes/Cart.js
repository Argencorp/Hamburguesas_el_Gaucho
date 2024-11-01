import React, { useState } from 'react';
import { ListGroup, Button, Container, Modal } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart, addToCart, setCart }) => {
  const [showCart, setShowCart] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const increaseQuantity = (index) => {
    addToCart(cartItems[index]);
  };

  const decreaseQuantity = (index) => {
    const newCart = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    });
    setCart(newCart);
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
                  {item.name} - ${item.price} x {item.quantity}
                  <Button variant="success" size="sm" onClick={() => increaseQuantity(index)} className="float-end">
                    +
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => decreaseQuantity(index)} className="float-end me-2">
                    -
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(index)}
                    className="float-end me-2"
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
