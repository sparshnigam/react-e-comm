import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFurnitures = createAsyncThunk('furniture', async ()=>{
    const response = await axios.get('https://dummyjson.com/products/category/furniture?limit=4');
    return response.data;
})

const furnitureAdapter = createEntityAdapter({
    selectId: (furnitures) => furnitures.id,
});

const furnitureSlice = createSlice({
    name: "furnitures",
    initialState: furnitureAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchFurnitures.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFurnitures.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            furnitureAdapter.setAll(state,action.payload.products);
        })
        .addCase(fetchFurnitures.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const furnitureSelector = furnitureAdapter.getSelectors((state)=>state.furnitures);
export default furnitureSlice.reducer;