import "./navbar.scss";
import React from "react";
import { useDispatch } from "react-redux";
import {
  all,
  fighter,
  mage,
  assasin,
  marksman,
  support,
} from "../../features/filterChampion";
import { HandleInputValue } from "../../features/searchChampion";
export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar">
        <ul className="type-list">
          <li onClick={() => dispatch(all())}>Wszyscy</li>
          <li onClick={() => dispatch(fighter())}>Wojownicy</li>
          <li onClick={() => dispatch(mage())}>Magowie</li>
          <li onClick={() => dispatch(assasin())}>Assasyni</li>
          <li onClick={() => dispatch(marksman())}>Strzelcy</li>
          <li onClick={() => dispatch(support())}>Wsparcie</li>
        </ul>
        <HandleInputValue />
      </nav>
    </>
  );
};

export default Navbar;
