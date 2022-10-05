import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userReducer.reducer;

export const user = (store) => store.user;
