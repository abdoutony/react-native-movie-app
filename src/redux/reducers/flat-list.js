import { createSlice } from "@reduxjs/toolkit";

const flatlistSlice = createSlice({
  name: "flatlist",
  initialState: {
    currentCategory: "ff",
  },
  reducers: {
    changeCurrentCategory: (state, { payload }) => {
      return {
        ...state,
        currentCategory: payload,
      };
    },
  },
});

export const { changeCurrentCategory } = flatlistSlice.actions;
export default flatlistSlice.reducer;
