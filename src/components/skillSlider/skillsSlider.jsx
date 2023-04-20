import Slider from "react-slick";
import "./skillsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const SkillsSlider = ({ data }) => {
  useEffect(() => {
    console.log(data[0]);
  });
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    customPaging: (i) => (
      <div>
        {data.map((item, index) => (
          <div key={index} className="thumbnail">
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/splash/${item.id}_${item.skins[i].num}.jpg`}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    ),
  };

  return (
    <Slider className="slider" {...settings}>
      {/* {data.map((item, index) => (
        <div className="icons">
          <img
            className="icons-img"
            src={`${process.env.PUBLIC_URL}/ImagesData/splash/${item.id}_${item.skins[index].num}.jpg`}
            // src={`${process.env.PUBLIC_URL}/ImagesData/splash/Akali_3.jpg`}
            alt={"ses"}
          />
        </div>
      ))} */}

      <div className="icons">
        <img
          className="icons-img"
          src={`${process.env.PUBLIC_URL}/ImagesData/splash/Annie_0.jpg`}
          alt={"ses"}
        />
      </div>
      <div className="icons">
        <img
          className="icons-img"
          src={`${process.env.PUBLIC_URL}/ImagesData/splash/Annie_1.jpg`}
          alt={"ses"}
        />
      </div>
      <div className="icons">
        <img
          className="icons-img"
          src={`${process.env.PUBLIC_URL}/ImagesData/splash/Annie_2.jpg`}
          alt={"ses"}
        />
      </div>
    </Slider>
  );
};

export default SkillsSlider;
