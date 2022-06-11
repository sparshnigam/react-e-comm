import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductByCategory = createAsyncThunk('productByCategory',async (category)=>{
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    // console.log(response.data);
    return response.data.products;
});

const productByCategoryAdapter = createEntityAdapter({
    selectId : (productByCategory) => productByCategory.id,
});

const productByCategorySlice = createSlice({
    name: "productByCategory",
    initialState: productByCategoryAdapter.getInitialState(),
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProductByCategory.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductByCategory.fulfilled,(state, action)=>{
            state.loading = false;
            productByCategoryAdapter.setAll(state,action.payload);
        })
        .addCase(fetchProductByCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const productByCategorySelector = productByCategoryAdapter.getSelectors((state)=>state.productByCategory);
export default productByCategorySlice.reducer;