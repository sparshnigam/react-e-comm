import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrendingProducts = createAsyncThunk('trendingProducts', async ()=>{
    // const response = await axios.get('https://fakestoreapi.com/products?limit=12');
    const response = await axios.get('https://dummyjson.com/products?limit=12');
    return response.data;
})
// export const fetchCategories = createAsyncThunk('productCategories', async ()=>{
//     const response = await axios.get('https://fakestoreapi.com/products/categories');
//     return response.data;
// })

const trendingProductsAdapter = createEntityAdapter({
    selectId: (trendingProducts) => trendingProducts.id,
});
// const categoriesAdapter = createEntityAdapter({
//     selectId: (categories) => categories.id,
// });

const trendingProductsSlice = createSlice({
    name: "trendingProducts",
    initialState: trendingProductsAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchTrendingProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTrendingProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            trendingProductsAdapter.setAll(state,action.payload.products);
        })
        .addCase(fetchTrendingProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        // .addCase(fetchCategories.pending,(state)=>{
        //     state.loading = true;
        //     state.categories = {};
        //     state.error = null;
        // })
        // .addCase(fetchCategories.fulfilled,(state,action)=>{
        //     state.loading = false;
        //     state.error = null;
        //     state.categories = action.payload;
        //     // categoriesAdapter.setAll(state.categories,{categories: action.payload});
        // })
        // .addCase(fetchCategories.rejected,(state,action)=>{
        //     state.loading = false;
        //     state.error = action.error;
        // })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const trendingProductsSelector = trendingProductsAdapter.getSelectors((state)=>state.trendingProducts);
// export const categoriesSelector = categoriesAdapter.getSelectors((state)=>state.products);
export default trendingProductsSlice.reducer;