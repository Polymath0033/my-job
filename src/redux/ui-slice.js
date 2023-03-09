import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { signupIsVisible: false },
  reducers: {
    toggleSignUp(state) {
      state.signupIsVisible = !state.signupIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
