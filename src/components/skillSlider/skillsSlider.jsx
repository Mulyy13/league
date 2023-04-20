import Slider from "react-slick";

import "./skillsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsSlider = ({ data }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

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
  };

  console.log(data);

  return (
    <Slider className="slider" {...settings}>
      {data.skins.map((item) => (
        <div className="icons" key={item.id}>
          <img
            className="icons-img"
            src={`${process.env.PUBLIC_URL}/ImagesData/splash/${data.id}_${item.num}.jpg`}
            alt={item.name}
          />
        </div>
      ))}

      {/* <div className="icons">
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
      </div> */}
    </Slider>
  );
};

export default SkillsSlider;
