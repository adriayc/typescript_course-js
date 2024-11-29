import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { toast } from '@/hooks/use-toast';
// Utils
import { type CartItem, type CartState } from '@/utils';

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
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((i) => i.cartID === newCartItem.cartID);
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      // state.tax = 0.1 * state.cartTotal;
      // state.orderTotal = state.cartTotal + state.shipping + state.tax;
      // // Set LS
      // localStorage.setItem('cart', JSON.stringify(state));
      // Call calculate total
      cartSlice.caseReducers.calculateTotals(state);
      // Toast
      toast({ description: 'Item added to cart' });
    },
    removeItem: () => {},
    editItem: () => {},
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      // Set LS
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

// Actions
export const { addItem, removeItem, editItem, clearCart, calculateTotals } =
  cartSlice.actions;

// Reducer
export default cartSlice.reducer;
