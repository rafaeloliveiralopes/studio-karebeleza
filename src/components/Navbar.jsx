import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav className="navbar fixed-top bg-body-tertiary" ref={navRef}>
        <ul className="navbar-nav mx-auto fs-4">
          <li className="nav-item mx-4 ms-4">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a className="nav-link" href="#">
              O Studio
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a className="nav-link" href="#">
              Serviços & Tratamentos
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a className="nav-link" href="#">
              Contato
            </a>
          </li>
        </ul>
        <button className="navBtn navCloseBtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navBtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
