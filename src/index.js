import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/style.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Components/store';
import Routing from './Routing';
import ProductDetailsContextWrapper from './context/ProductDetailsContext';
import ProductByCategoryWrapper from './context/ProductByCategoryContext';

const root = document.getElementById('root');
ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
    <ProductDetailsContextWrapper>
      <ProductByCategoryWrapper>
        <Routing />
        <App />
      </ProductByCategoryWrapper>
    </ProductDetailsContextWrapper>
    </Provider>
  //</React.StrictMode>
  ,root
);

reportWebVitals();
