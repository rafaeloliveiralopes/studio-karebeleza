import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceCategory from "./ServicesCategory";

// Importing SVG icons
import hairIcon from "../../assets/icons/hairdryer.svg";
import makeupIcon from "../../assets/icons/makeup.svg";
import facialIcon from "../../assets/icons/face-mask.svg";
import nailsIcon from "../../assets/icons/nail-polish.svg";
import bodyIcon from "../../assets/icons/body-shape.svg";

const servicesData = [
  {
    icon: hairIcon,
    title: "Cabelos",
    services: ["Corte", "Coloração", "Químicas", "E muito mais."],
  },
  {
    icon: makeupIcon,
    title: "Makeup",
    services: [
      "Make social",
      "Eventos noturnos",
      "Eventos diurnos",
      "Make express",
    ],
  },
  {
    icon: facialIcon,
    title: "Estética Facial",
    services: [
      "Limpeza de pele",
      "Depilação com linha",
      "Sobrancelhas",
      "Microblading",
      "E muito mais.",
    ],
  },
  {
    icon: nailsIcon,
    title: "Unhas",
    services: [
      "Manicure e Pedicure",
      "Esmaltação em gel",
      "Unha de gel",
      "Fibra de vidro",
      "Fibra de seda",
      "Spa dos pés",
      "E muito mais.",
    ],
  },
  {
    icon: bodyIcon,
    title: "Estética Corporal",
    services: [
      "Depilação",
      "Massoterapia",
      "Micropigmentação paramédica",
      "E muito mais.",
    ],
  },
];

function OurServices() {
  return (
    <div id="services" className="container mt-5">
      <h2 className="text-center mb-4">Nossos Serviços</h2>
      <div className="row">
        {servicesData.map((category, index) => (
          <ServiceCategory
            key={index}
            icon={category.icon}
            title={category.title}
            services={category.services}
          />
        ))}
      </div>
    </div>
  );
}

export default OurServices;
