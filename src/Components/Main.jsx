import React from 'react'
import './assets/style.css'
import Trending from './MainProductsSections/Trending'
import Categories from './MainProductsSections/Categories'
import MensShoes from './MainProductsSections/MensShoes';
import Furnitures from './MainProductsSections/Furnitures';
import Groceries from './MainProductsSections/Groceries';
import TrendingContext from '../context/TrendingProductsContext';

const Main = (limitpro) => {
  // console.log(limitpro);
  return (
    <React.Fragment>
      <TrendingContext>
        <Trending />
      </TrendingContext>
      <Categories />
      <Groceries />
      <MensShoes />
      <Furnitures />
    </React.Fragment>
  )
}

export default Main;