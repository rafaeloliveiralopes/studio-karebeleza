import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

import logo from '../../assets/2.svg';

function Contact() {
  return (
    <section className="py-5 bg-dark">
      <div className="container  text-light">
        <div className="row">
          {/* First Column */}
          <div className="col-md-3 text-center">
            <img src={logo} alt="Logo" className="img-fluid mb-md-4" style={{ maxWidth: '180px' }} />
            <div className="social-icons">
              <FaFacebook className="mx-2" size={30} />
              <FaInstagram className="mx-2" size={30} />
              <FaTiktok className="mx-2" size={30} />
              <FaWhatsapp className="mx-2" size={30} />
            </div>
          </div>
          {/* Second Column */}
          <div className="col-md-3">
            <h5 className='fw-bold'>Contato</h5>
            <p>WhatsApp: (00) 12345-6789</p>
            <p>Email: contato@empresa.com</p>
          </div>
          {/* Third Column */}
          <div className="col-md-3">
            <h5 className='fw-bold'>Horário de Funcionamento</h5>
            <p>Ter - Sex: 8:00 - 18:00</p>
            <p>Sáb: 9:00 - 18:00</p>
            <p>Dom: Fechado</p>
          </div>
          {/* Fourth Column */}
          <div className="col-md-3">
            <h5 className='fw-bold'>Localização</h5>
            <p>Rua Exemplo, 123</p>
            <p>Bairro, Cidade, Estado</p>
            <p>CEP: 12345-678</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;