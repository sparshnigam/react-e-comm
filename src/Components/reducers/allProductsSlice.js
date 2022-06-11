import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllProducts = createAsyncThunk('allProduct',async ()=>{
    const response = await axios.get('https://dummyjson.com/products?limit=100');
    // console.log(response.data);
    return response.data.products;
});

const allProductsAdapter = createEntityAdapter({
    selectId : (allProducts) => allProducts.id,
});

const allProductsSlice = createSlice({
    name: "allProducts",
    initialState: allProductsAdapter.getInitialState(),
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllProducts.fulfilled,(state, action)=>{
            state.loading = false;
            allProductsAdapter.setAll(state,action.payload);
        })
        .addCase(fetchAllProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const allProductsSelector = allProductsAdapter.getSelectors((state)=>state.allProducts);
export default allProductsSlice.reducer;