import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import brideHeroBackground from "/src/assets/bride-hero-backgroundpng.png";
import salonBeautyImage from "/src/assets/salon-beauty-image.png";
import womanAtSalonBeauty from "/src/assets/woman-at-salon-beautty-with-blond-hair.png";
import womanRelaxingInSpa from "/src/assets/woman-irealexing-in-a-spar.png";

const HomeSection = () => {
  const settings = {
    arrows: true,
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
        <div className="carousel-image position-relative">
          <img
            src={brideHeroBackground}
            alt="Noiva arrumada com umlindo penteado"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
          <div className="carousel-text position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="text-white">BELEZA E SOFISTICAÇÃO</h1>
          </div>
        </div>
        <div className="carousel-image position-relative">
          <img
            src={salonBeautyImage}
            alt="Imagem do Studio de Beleza"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
          <div className="carousel-text position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="text-white">CONHEÇA O NOSSO STUDIO</h1>
          </div>
        </div>
        <div className="carousel-image position-relative">
          <img
            src={womanAtSalonBeauty}
            alt="Mulher cuidando dos cabelos no salão de beleza"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
          <div className="carousel-text position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="text-white">CUIDADO E ESTILO</h1>
          </div>
        </div>
        <div className="carousel-image position-relative">
          <img
            src={womanRelaxingInSpa}
            alt="Mulher relaxando, tendo um momento de limpeza relaxamento e rejuvenecimento da pele"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
          <div className="carousel-text position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="text-white">RELAXE E REVITALIZE</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSection;
