import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailApi from "./CocktailApi";
import cocktailSlice from "./cocktailSlice";

const store = configureStore({
  reducer: combineReducers({
    [cocktailSlice.name]: cocktailSlice.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  }),
});

export default store;