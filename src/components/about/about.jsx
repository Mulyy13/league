import React from "react";
import "./about.scss";
import PropTypes from "prop-types";

const About = ({ data }) => {
  return (
    <div className="about">
      <h1 className="about__title">Opis Postaci</h1>
      <p className="about__champion-history">{data.lore}</p>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
