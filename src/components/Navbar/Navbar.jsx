import React, { useRef, useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

import logo from "../../assets/1.svg";

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="navbar fixed-top" ref={navRef}>
        <div>
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid mx-3"
              style={{ width: "90px" }}
            />
          </a>
        </div>
        <ul className="navbar-nav fs-4">
          <li className="nav-item mx-4 ms-4">
            <a className="nav-link" href="#home" onClick={handleNavLinkClick}>
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
