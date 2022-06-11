import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk('productCategories', async ()=>{
    // const response = await axios.get('https://fakestoreapi.com/products/categories');
    const response = await axios.get('https://dummyjson.com/products/categories');
    return response.data;
})

const categoriesAdapter = createEntityAdapter({
    selectId: (categories) => categories,
});

const categoriesSlice = createSlice({
    name: "categories",
    initialState: categoriesAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategories.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            categoriesAdapter.setAll(state,action.payload);
        })
        .addCase(fetchCategories.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const categoriesSelector = categoriesAdapter.getSelectors((state)=>state.categories);
export default categoriesSlice.reducer;