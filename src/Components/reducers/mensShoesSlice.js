import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMensShoes = createAsyncThunk('mensShoe', async ()=>{
    const response = await axios.get('https://dummyjson.com/products/category/mens-shoes?limit=4');
    return response.data;
})

const mensShoesAdapter = createEntityAdapter({
    selectId: (mensShoes) => mensShoes.id,
});

const mensShoesSlice = createSlice({
    name: "mensShoes",
    initialState: mensShoesAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchMensShoes.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMensShoes.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            mensShoesAdapter.setAll(state,action.payload.products);
        })
        .addCase(fetchMensShoes.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const mensShoesSelector = mensShoesAdapter.getSelectors((state)=>state.mensShoes);
export default mensShoesSlice.reducer;