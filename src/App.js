import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from './Components/reducers/allProductsSlice';
import { fetchCart } from './Components/reducers/cartSlice';
import { fetchCategories } from './Components/reducers/categoriesSlice';
import { fetchCreateCart } from './Components/reducers/createCartSlice';
import Routing from './Routing';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllProducts());
    // dispatch(fetchCreateCart(1,1,1));
    // dispatch(fetchCart([5,82,1]));
    
    dispatch(fetchCategories());
  },[]);

  return '';
};

export default App;