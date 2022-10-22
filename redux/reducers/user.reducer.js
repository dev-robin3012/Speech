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
    updateUser: (state, { payload }) => {
      state = { ...state, ...payload };
      return state;
    },
    userLogout: (state) => {
      state = null;
      return state;
    },
  },
});

export const { setUserLogIn, userLogout, updateUser } = userReducer.actions;
export default userReducer.reducer;
export const user = (store) => store.user;
