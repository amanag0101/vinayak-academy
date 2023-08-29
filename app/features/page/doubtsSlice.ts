import { createSlice } from "@reduxjs/toolkit";

const doubtsSlice = createSlice({
  name: "doubts",
  initialState: {
    selectedDoubt: null,
  },
  reducers: {
    selectDoubt: (state, action) => {
      state.selectedDoubt = action.payload;
    },
  },
});

export const { selectDoubt } = doubtsSlice.actions;
export default doubtsSlice.reducer;
