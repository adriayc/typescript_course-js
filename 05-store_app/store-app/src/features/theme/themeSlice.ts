import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// Utils
import { applyTheme } from '@/utils';

export type Theme = 'dark' | 'light' | 'system';

type ThemeState = {
  theme: Theme;
};

// Get theme LS
const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem('theme') as Theme) || 'system';
  applyTheme(theme);
  return theme;
};

const initialState: ThemeState = {
  // theme: 'system',
  theme: initializeTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      // LS
      localStorage.setItem('theme', action.payload);
    },
  },
});

// Actions
export const { setTheme } = themeSlice.actions;

// Reducer
export default themeSlice.reducer;
