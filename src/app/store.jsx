import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterChampion";
import searchReducer from "../features/searchChampion";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
  },
});
