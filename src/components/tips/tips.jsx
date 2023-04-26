import React from "react";
import PropTypes from "prop-types";
import "./tips.scss";

const Tips = ({ data }) => {
  return (
    <div className="tips">
      <ul className="tips__ally">
        <div className="tips-ally__title">Granie</div>
        {data.allytips.map((tip, index) => (
          <li key={index}> {tip} </li>
        ))}
      </ul>
      <ul className="tips__enemy">
        <div className="tips-enemy__title">Kontrowanie</div>
        {data.enemytips.map((tip, index) => (
          <li key={index}> {tip} </li>
        ))}
      </ul>
    </div>
  );
};
Tips.propTypes = {
  data: PropTypes.shape({
    allytips: PropTypes.array.isRequired,
    enemytips: PropTypes.array.isRequired,
  }).isRequired,
};
export default Tips;
