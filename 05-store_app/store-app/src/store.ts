import { configureStore } from '@reduxjs/toolkit';
// Reducers (RTK)
import themeReducer from '@/features/theme/themeSlice';
import userReducer from '@/features/user/userSlice';
import cartReducer from '@/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    userState: userReducer,
    cartState: cartReducer,
  },
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export extra type
export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
