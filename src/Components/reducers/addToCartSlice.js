import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const addToCartAdapter = createEntityAdapter({
    selectId: (addToCart) => addToCart.id,
});

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState: addToCartAdapter.getInitialState(),
    reducers: {
        addToCart(state, action) {
            state.loading = false;
            addToCartAdapter.addOne(state, action.payload);
        },
        removeFromCart(state, action) {
            addToCartAdapter.removeOne(state, action.payload);
        },
        updateCart(state, action) {
            state.loading = false;
            addToCartAdapter.updateOne(state, action.payload);
        }
    },
});

export const addToCartSelector = addToCartAdapter.getSelectors((state) => state.addToCart);
export const { addToCart, removeFromCart, updateCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;