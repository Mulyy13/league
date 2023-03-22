import "./navbar.scss";
import React, { useState } from "react";
export const NavbarContext = React.createContext();

const Navbar = () => {
  const [handleFilter, setHandleFilter] = useState("");

  return (
    <NavbarContext.Provider value={handleFilter}>
      <nav className="main">
        <li>Wszyscy</li>
        <li>Wojownicy</li>
        <li>Zabójcy</li>
        <li>Magowie</li>
        <li>Obrońcy</li>
        <li>Strzelcy</li>
        <li>Wspierający</li>
        <label className="search">
          <input
            type="search"
            value={handleFilter}
            onChange={(e) => {
              setHandleFilter(e.target.value);
            }}
            className="search__input"
          />
        </label>
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
