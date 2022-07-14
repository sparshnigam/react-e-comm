import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from './Components/reducers/allProductsSlice';
// import { fetchCart } from './Components/reducers/cartSlice';
import { fetchCategories } from './Components/reducers/categoriesSlice';
// import { addToWishlist, removeFromWishlist } from './Components/reducers/wishlistSlice';
// import Routing from './Routing';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchCategories());
  }, []);

  return '';
};

export default App;