import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'cart slice',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

// Reducer
export default cartSlice.reducer;
