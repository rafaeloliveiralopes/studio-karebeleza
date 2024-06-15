// HomeSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeSection = () => {
  const settings = {
    dots: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home-section">
      <Slider {...settings}>
        <div className="carousel-image position-relative">
          <img
            src="/src/assets/bride-hero-backgroundpng.png"
            alt=""
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        </div>
        <div className="carousel-image position-relative">
          <img
            src="/src/assets/salon-beauty-image.png"
            alt=""
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        </div>
        <div className="carousel-image position-relative">
          <img
            src="/src/assets/woman-at-salon-beautty-with-blond-hair.png"
            alt=""
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        </div>
        <div className="carousel-image position-relative">
          <img
            src="/src/assets/woman-irealexing-in-a-spar.png"
            alt=""
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSection;
