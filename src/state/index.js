import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  item: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem: (state, actions) => {
      state.items = actions.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    inceraseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    deceraseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  inceraseCount,
  deceraseCount,
  setIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
