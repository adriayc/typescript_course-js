import { createSlice } from '@reduxjs/toolkit';
// Utils
import { type CartState } from '@/utils';

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// Get LS
const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: () => {},
    removeItem: () => {},
    editItem: () => {},
    clearCart: () => {},
    calculateTotals: () => {},
  },
});

// Actions
export const { addItem, removeItem, editItem, clearCart, calculateTotals } =
  cartSlice.actions;

// Reducer
export default cartSlice.reducer;
