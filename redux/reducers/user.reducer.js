import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogIn: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setUserLogIn } = userReducer.actions;
export default userReducer.reducer;
export const user = (store) => store.user;
