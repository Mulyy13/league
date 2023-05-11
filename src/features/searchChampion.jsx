import React, { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const SearchChampion = createSlice({
  name: "search",
  initialState: {
    inputValue: "",
  },
  reducers: {
    search: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export function HandleInputValue() {
  const [handleFilter, setHandleFilter] = useState("");
  const dispatch = useDispatch();
  const globalInputValue = useSelector((state) => state.search.inputValue);
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHandleFilter(newValue);
    dispatch(SearchChampion.actions.search(newValue));
  };
  return (
    <div className="input-container">
      <input
        required="required"
        value={handleFilter || globalInputValue}
        onChange={handleInputChange}
      />
      <span>nazwa bohatera</span>
    </div>
  );
}

export default SearchChampion.reducer;
