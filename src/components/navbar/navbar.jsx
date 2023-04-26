import "./navbar.scss";
import SearchInput from "../searchInput/searchInput";
import React from "react";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <li>Wszyscy</li>
        <li value="Fighter">Wojownicy</li>
        <li value="Assasin">Zabójcy</li>
        <li value="Mage">Magowie</li>
        <li value="Tank">Obrońcy</li>
        <li value="Marksman">Strzelcy</li>
        <li value="Support">Wspierający</li>
        <SearchInput />
      </nav>
    </>
  );
};

export default Navbar;
