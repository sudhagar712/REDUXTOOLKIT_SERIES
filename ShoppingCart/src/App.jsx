import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
