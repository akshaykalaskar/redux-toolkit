import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step1Data: {
    firstName: "",
    lastName: "",
    datetime: "",
    defaultCountryList: [],
    selectedCountryStep1: "",
  },
  step2Data: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    addFormDataStep1: (state, action) => {
      state.step1Data = { ...action.payload };
    },
    addSelectedCountryStep2: (state, action) => {
      state.step2Data = { ...action.payload };
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
