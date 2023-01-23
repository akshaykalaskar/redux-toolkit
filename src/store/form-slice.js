import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step1Data: {
    firstName: '',
    lastName: '',
    datetime: '',
    defaultCountryList: [],
    selectedCountryStep1: '',
  },
  selectedCountryStep2: [],
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    addFormDataStep1(state, action) {
      const newStep1Data = action.payload;
      state.step1Data = { ...newStep1Data };
    },
    addSelectedCountryStep2(state, action) {
      const newSelectedCountryStep2 = action.payload;
      state.selectedCountryStep2 = { ...newSelectedCountryStep2 };
    },
  }
});

export const formActions = formSlice.actions;
export default formSlice;