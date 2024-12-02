import { configureStore } from '@reduxjs/toolkit';
// Reducer (RTK)
import counterReducer from './tutorials/09-rtk/counterSlice';

// Configure store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
