import React from "react";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSection = () => {
  const settings = {
    dots: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home-section">
      <Slider {...settings}>
        <div className="carousel-image">
          <img src="/src/assets/bride-hero-backgroundpng.png" alt="" />
        </div>
        <div className="carousel-image">
          <img src="/src/assets/salon-beauty-image.png" alt="" />
        </div>
        <div className="carousel-image">
          <img
            src="/src/assets/woman-at-salon-beautty-with-blond-hair.png"
            alt=""
          />
        </div>
        <div className="carousel-image">
          <img src="/src/assets/woman-irealexing-in-a-spar.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSection;
