import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authentication/AuthenticationSlice";

export default configureStore({
  reducer: {
    authentication: authenticationReducer
  },
});
