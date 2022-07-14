import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Category from './Pages/Category';
// import ProductDetails from './Components/ProductDetails';
import Details from './Pages/Details';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import SignUp from './Pages/SignUp';
import Wishlist from './Pages/Wishlist';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path="products/details" element={<Details />} />
            <Route path='category' element={<Category />} />
            <Route path='myCart' element={<Cart />} />
            <Route path='myWishlist' element={<Wishlist />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<Login />} />
        </Routes>
    </Router>
  );
};

export default Routing;