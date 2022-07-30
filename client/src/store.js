// import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
