import trendingProductsReducer from "./reducers/trendingProductsSlice";
import categoriesReducer from "./reducers/categoriesSlice";
import mensShoesReducer from "./reducers/mensShoesSlice";
import furnituresReducer from "./reducers/furnitureSlice";
import groceriesReducer from "./reducers/grocerySlice";
import allProductsReducer from "./reducers/allProductsSlice";
import productByCategoryReducer from "./reducers/productByCategorySlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartSlice";
import wishlistReducer from "./reducers/wishlistSlice";

const store = configureStore({
    reducer: {
        trendingProducts: trendingProductsReducer,
        categories: categoriesReducer,
        mensShoes: mensShoesReducer,
        furnitures: furnituresReducer,
        groceries: groceriesReducer,
        allProducts: allProductsReducer,
        productByCategory: productByCategoryReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
    middleware: [thunk],
});

export default store;