import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCreateCart = createAsyncThunk('createCart', async (uId, pId, quantity) => {

    const response = await axios.post('https://dummyjson.com/carts/add',{
            userId: uId,
            products: [
                {
                    id: pId,
                    quantity: quantity,
                }
            ]
        }
    );
    // console.log(response.data);
    return response;
});

const createCartAdapter = createEntityAdapter({
    selectId: (createCart) => createCart.id,
});

const createCartSlice = createSlice({
    name: "createCart",
    initialState: createCartAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCreateCart.fulfilled, (state, action) => {
                state.loading = false;
                createCartAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCreateCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addDefaultCase((state) => {
                return state;
            })
    },
});

export const createCartSelector = createCartAdapter.getSelectors((state) => state.createCart);
export default createCartSlice.reducer;