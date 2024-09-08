import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from './components/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/iniciar-sesion' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



