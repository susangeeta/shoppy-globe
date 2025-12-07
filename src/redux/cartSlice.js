import { createSlice } from "@reduxjs/toolkit";
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addToCart(state, action) {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action) {
      const updated = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    },

    increaseQty(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state)); // save
    },

    decreaseQty(state, action) {
      const item = state.find((i) => i.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          const newState = state.filter((i) => i.id !== action.payload);
          localStorage.setItem("cart", JSON.stringify(newState));
          return newState;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    emptyCart() {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
