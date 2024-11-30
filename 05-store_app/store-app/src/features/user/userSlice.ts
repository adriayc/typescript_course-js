import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { toast } from '@/hooks/use-toast';

export type User = {
  username: string;
  jwt: string;
};

type UserState = {
  user: User | null;
};

// Get LS
const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  if (!user) return null;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      // Set LS
      localStorage.setItem('user', JSON.stringify(user));
      // Toast
      if (user.username === 'demo user') {
        toast({ description: 'Welcome Guest User' });
        return;
      }
      toast({ description: 'Login successful' });
    },
    logoutUser: (state) => {
      state.user = null;
      // Remove LS
      localStorage.removeItem('user');
    },
  },
});

// Actions
export const { loginUser, logoutUser } = userSlice.actions;

// Reducer
export default userSlice.reducer;
