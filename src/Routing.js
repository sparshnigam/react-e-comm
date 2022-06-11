import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Category from './Pages/Category';
// import ProductDetails from './Components/ProductDetails';
import Details from './Pages/Details';
import Home from './Pages/Home';
import Products from './Pages/Products';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path="products/details" element={<Details />} />
            <Route path='category' element={<Category />} />
            <Route path='myCart' element={<Cart />} />
        </Routes>
    </Router>
  );
};

export default Routing;