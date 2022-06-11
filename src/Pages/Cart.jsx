import React from 'react';
import CartDetails from '../Components/CartDetails';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';

const Cart = () => {
  return (
      <React.Fragment>
        <Header />
        <CartDetails />
        <Footer />
      </React.Fragment>
  );
}

export default Cart;