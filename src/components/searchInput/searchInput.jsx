import React, { useState } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import "./searchInput.scss";

const inputValueSlice = createSlice({
  name: "inputValue",
  initialState: "",
  reducers: {
    setInputValue: (state, action) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    inputValue: inputValueSlice.reducer,
  },
});

function SearchInput() {
  const dispatch = useDispatch();
  const [handleFilter, setHandleFilter] = useState("");
  const globalInputValue = useSelector((state) => state.inputValue);
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHandleFilter(newValue);
    dispatch(inputValueSlice.actions.setInputValue(newValue));
  };

  return (
    <div>
      <input
        className="search-input"
        type="search"
        placeholder="Wpisz nazwę bohatera"
        value={handleFilter || globalInputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;
