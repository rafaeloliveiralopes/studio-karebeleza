import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCategory = ({ icon, title, services }) => (
  <div className="col-md-4 text-center mt-4">
    <img src={icon} alt={`${title} icon`} width={50} className="mb-3" />
    <h5>{title}</h5>
    <ul className="list-unstyled">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

ServiceCategory.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceCategory;
