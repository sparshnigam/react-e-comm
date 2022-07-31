import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    items: {}
};

const wishlistAdapter = createEntityAdapter({
    selectId: (wishlist) => wishlist.id,
});

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState : wishlistAdapter.getInitialState(),
    reducers : {
        addToWishlist(state, action){
            // state.items = action.payload;
            state.loading = false;
            wishlistAdapter.addOne(state, action.payload);
        },
        removeFromWishlist(state, action){
            wishlistAdapter.removeOne(state, action.payload);
        }
    },
});

export const wishlistSelector = wishlistAdapter.getSelectors((state)=>state.wishlist);
export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;