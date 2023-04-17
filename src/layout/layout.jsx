// import ChampionsData from "../components/championsData/championsData";
import "./layout.scss";
import React from "react";
function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
