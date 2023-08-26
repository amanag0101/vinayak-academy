import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userId: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.userId = action.payload.userId;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userId = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
