import React from "react";
import PropTypes from "prop-types";
import "./tips.scss";

const Tips = ({ data }) => {
  return (
    <>
      <h5 className="tips__title">Porady</h5>
      <div className="tips">
        <ul className="tips__ally">
          <div className="tips__ally-title">Granie</div>
          {data.allytips.map((tip, index) => (
            <li key={index}> {tip} </li>
          ))}
        </ul>
        <ul className="tips__enemy">
          <div className="tips__enemy-title">Kontrowanie</div>
          {data.enemytips.map((tip, index) => (
            <li key={index}> {tip} </li>
          ))}
        </ul>
      </div>
    </>
  );
};
Tips.propTypes = {
  data: PropTypes.shape({
    allytips: PropTypes.array.isRequired,
    enemytips: PropTypes.array.isRequired,
  }).isRequired,
};
export default Tips;
