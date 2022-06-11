import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGroceries = createAsyncThunk('grocery', async ()=>{
    const response = await axios.get('https://dummyjson.com/products/category/groceries?limit=4');
    return response.data;
})

const groceriesAdapter = createEntityAdapter({
    selectId: (groceries) => groceries.id,
});

const grocerySlice = createSlice({
    name: "groceries",
    initialState: groceriesAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchGroceries.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchGroceries.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            groceriesAdapter.setAll(state,action.payload.products);
        })
        .addCase(fetchGroceries.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const groceriesSelector = groceriesAdapter.getSelectors((state)=>state.groceries);
export default grocerySlice.reducer;