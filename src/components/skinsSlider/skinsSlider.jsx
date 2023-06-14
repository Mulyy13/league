import Slider from "react-slick";
import "./skinsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import PropTypes from "prop-types";

const SkinsSlider = ({ data }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    speed: 900,

    arrows: true,

    customPaging: (index) => {
      const skin = data.skins[index];
      return (
        <div className="thumbnail" key={skin.id}>
          <img
            src={`${process.env.PUBLIC_URL}/ImagesData/splash/${data.id}_${skin.num}.jpg`}
            alt={skin.name}
          />
        </div>
      );
    },
    slidesToScroll: 2,
  };

  return (
    <div className="skins-wrapper">
      <h4>Skórki</h4>
      <Slider className="slider" {...settings}>
        {data.skins.map((item) => (
          <div className="slider__icon" key={item.id}>
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/splash/${data.id}_${item.num}.jpg`}
              alt={item.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

SkinsSlider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SkinsSlider;
