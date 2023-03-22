// import ChampionsData from "../components/championsData/championsData";
import "./layout.scss";
import React from "react";
import Navbar from "../components/navbar/navbar";
function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
}

export default Layout;
