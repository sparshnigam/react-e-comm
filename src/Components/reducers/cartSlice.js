import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCart = createAsyncThunk('cart',async (props)=>{

    // const body ={
    //     id: id,
    //     quantity: quantity,
    // };

    const response = await axios.put(`https://dummyjson.com/carts/${props[0]}`,{
        products: [
          {
            id: props[1],
            quantity: props[2],
          },
        ]
      });
    // console.warn(props[2]);
    return response.data;
});

const cartAdapter = createEntityAdapter({
    selectId: (cart) => cart,
});

const cartSlice = createSlice({
    name: "cart",
    initialState: cartAdapter.getInitialState(),
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCart.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCart.fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCart.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addDefaultCase((state)=>{
            return state;
        })
    },
});

export const cartSelector = cartAdapter.getSelectors((state)=>state.cart);
export default cartSlice.reducer;