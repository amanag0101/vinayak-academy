import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authentication/AuthenticationSlice";
import doubtsSlice from "./features/page/doubtsSlice";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    doubts: doubtsSlice,
  },
});
