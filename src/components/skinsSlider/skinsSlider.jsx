import Slider from "react-slick";
import "./skillsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import PropTypes from "prop-types";

const SkinsSlider = ({ data }) => {
  const sliderRef = useRef(null);

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    // dotsClass: "slick-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    slickGoTo: true,
    // swipeToSlide: true,
    // focusOnSelect: true,

    customPaging: (index) => {
      const skin = data.skins[index];
      return (
        <div
          className="thumbnail"
          key={skin.id}
          onClick={() => handleOnClick(index)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/ImagesData/splash/${data.id}_${skin.num}.jpg`}
            alt={skin.name}
          />
        </div>
      );
    },
  };

  return (
    <div className="skins">
      <h4>Skórki</h4>

      <Slider className="slider" {...settings} ref={sliderRef}>
        {data.skins.map((item) => (
          <div className="icon" key={item.id}>
            <img
              className="icon-img"
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
