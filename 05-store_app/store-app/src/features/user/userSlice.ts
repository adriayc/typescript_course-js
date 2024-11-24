import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'user slice',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// Reducer
export default userSlice.reducer;
