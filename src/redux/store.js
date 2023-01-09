import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import flatlistReducer from "./reducers/flat-list";

const mReducers = {
  flatlistReducer,
};
const rootReducer = combineReducers(mReducers);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
