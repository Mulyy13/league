// import ChampionsData from "../components/championsData/championsData";
import "./layout.scss";
import React from "react";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
