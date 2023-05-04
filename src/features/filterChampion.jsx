import { createSlice } from "@reduxjs/toolkit";

export const FilterChampion = createSlice({
  name: "filter",
  initialState: {
    type: "all",
  },
  reducers: {
    all: (state) => {
      state.type = "all";
    },
    fighter: (state) => {
      state.type = "Fighter";
    },
    mage: (state) => {
      state.type = "Mage";
    },
    assasin: (state) => {
      state.type = "Assassin";
    },
    marksman: (state) => {
      state.type = "Marksman";
    },
    support: (state) => {
      state.type = "Support";
    },
  },
});
export const { all, fighter, mage, assasin, marksman, support } =
  FilterChampion.actions;

export default FilterChampion.reducer;
