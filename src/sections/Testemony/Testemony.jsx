import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Testemony() {
  const settings = {
    arrows: false,
    dots: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Paula Barroso",
      time: "8 meses atrás",
      text: "Excelente serviço luxo nas instalações, muito confortável.",
      rating: 5,
    },
    {
      name: "Fabiola Domingos",
      time: "3 meses atrás",
      text: "Olá queria o email de vcs.",
      rating: 4,
    },
    {
      name: "Gabriela Correa da Silva",
      time: "1 ano atrás",
      text: "Excelente profissionais, atendimento nota 10, recomendo todos os serviços, desde uma simples hidratação a uma terapia capilar.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-warning" : "text-muted"}>
          ★
        </span>,
      );
    }
    return stars;
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 mx-4">
          O que nossos clientes falam de nós
        </h2>
        <div className="text-center mb-4">
          <div className="font-weight-bold h4">Excelente</div>
          <div className="text-warning h4 mb-0">{renderStars(5)}</div>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <div className="text-muted ml-2">
              Com base em <strong>157 avaliações</strong>
            </div>
          </div>
          <img
            src="/src/assets/icons/google-icon.png"
            alt="Google"
            className="mx-auto"
            style={{ height: "32px" }}
          />
        </div>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-3 d-flex">
              <div
                className="card border-0 shadow flex-fill d-flex"
                style={{ minHeight: "200px", maxHeight: "300px" }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{review.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {review.time}
                  </h6>
                  <div className="text-warning">
                    {renderStars(review.rating)}
                  </div>
                  <p className="card-text mt-2 flex-grow-1">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testemony;
