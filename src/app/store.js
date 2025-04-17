import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    users: userSliceReducer,
  },
});
