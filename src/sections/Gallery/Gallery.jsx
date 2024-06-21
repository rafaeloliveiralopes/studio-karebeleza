import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

import backBlondHair from "/src/assets/galery/back-blond-hair.jpg";
import blackAnWhite from "/src/assets/galery/black-an-white.jpg";
import blondAndPinkHair from "/src/assets/galery/blond-and-pink-hair.jpg";
import blondCurlyHair from "/src/assets/galery/blond-curly-hair.jpg";
import makeup01 from "/src/assets/galery/makeup-01.jpg";
import makeup02 from "/src/assets/galery/makeup-02.jpg";
import makeup03 from "/src/assets/galery/makeup-03.jpg";
import makeup04 from "/src/assets/galery/makeup-04.jpg";

function Gallery() {
  const images = [
    backBlondHair,
    blackAnWhite,
    blondAndPinkHair,
    blondCurlyHair,
    makeup01,
    makeup02,
    makeup04,
    makeup03,
  ];

  return (
    <section id="gallery" className="py-5 bg-secondary-subtle">
      <div className="container">
        <h2 className="text-center mb-4">Galeria</h2>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="gallery-image-container">
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-4 py-3">
          <h3>
            Junte-se a centenas de divas que foram transformadas pelos nossos
            serviços
          </h3>
          <button className="button">
            Agendar horário
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
