import React, { useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    if (menuOpen) {
      toggleNavbar();
    }
  };

  return (
    <header>
      <nav className="navbar fixed-top" ref={navRef}>
        <ul className="navbar-nav mx-auto fs-4">
          <li className="nav-item mx-4 ms-4">
            <a
              className="nav-link active"
              href="/"
              onClick={handleNavLinkClick}
            >
              Home
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a className="nav-link" href="#about" onClick={handleNavLinkClick}>
              O Studio
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a
              className="nav-link"
              href="#services"
              onClick={handleNavLinkClick}
            >
              Serviços & Tratamentos
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a
              className="nav-link"
              href="#gallery"
              onClick={handleNavLinkClick}
            >
              Galeria
            </a>
          </li>
          <li className="nav-item mx-4 ms-1">
            <a
              className="nav-link"
              href="#contact"
              onClick={handleNavLinkClick}
            >
              Contato
            </a>
          </li>
        </ul>
        {menuOpen && (
          <button className="navBtn navCloseBtn" onClick={toggleNavbar}>
            <AiOutlineClose />
          </button>
        )}
      </nav>
      {!menuOpen && (
        <button className="navBtn" onClick={toggleNavbar}>
          <CiMenuFries />
        </button>
      )}
    </header>
  );
}

export default Navbar;
