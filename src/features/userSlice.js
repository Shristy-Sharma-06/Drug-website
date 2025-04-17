import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
