import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CounterStatus = 'active' | 'inactive' | 'pending...';

type CounterState = {
  count: number;
  status: CounterStatus;
};

// Initial state
const initialState: CounterState = {
  count: 0,
  status: 'pending...',
};

// Create slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

// Actions
export const { increment, decrement, reset, setStatus } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;
