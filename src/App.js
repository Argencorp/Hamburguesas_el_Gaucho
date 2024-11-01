import React, { useState } from 'react';
import Header from './componentes/header';
import BurgerCard from './componentes/BurgerCard';
import Cart from './componentes/Cart';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Negocios from './componentes/Negocios.js';

const App = () => {
  const [cart, setCart] = useState([]);

  const burgers = [
    { name: 'Hamburguesa Clásica', image: '/images/clasica.jpg', price: 500 },
    { name: 'Hamburguesa Especial', image: '/images/especial.png', price: 650 },
    { name: 'Hamburguesa Vegetariana', image: '/images/vegan.png', price: 550 },
  ];

  const addToCart = (burger) => {
    const existingItem = cart.find(item => item.name === burger.name);
    if (existingItem) {
      setCart(cart.map(item => 
        item.name === burger.name 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...burger, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const location = useLocation();

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={
            <Row>
              {burgers.map((burger, index) => (
                <Col key={index} md={4}>
                  <BurgerCard burger={burger} addToCart={addToCart} />
                </Col>
              ))}
            </Row>
          } />
          <Route path="/hamburguesas" element={
            <Row>
              {burgers.map((burger, index) => (
                <Col key={index} md={4}>
                  <BurgerCard burger={burger} addToCart={addToCart} />
                </Col>
              ))}
            </Row>
          } />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/negocios" element={<Negocios />} />
        </Routes>
      </Container>
      {(location.pathname === '/' || location.pathname === '/hamburguesas') && (
        <Cart cartItems={cart} removeFromCart={removeFromCart} addToCart={addToCart} setCart={setCart} />
      )}
    </>
  );
};

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
