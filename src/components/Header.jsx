import React from "react";

function Header() {
  return (
    <nav className="navbar fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto d-flex flex-row fs-4 fw-bold">
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">
              O Studio
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">
              Serviços & Tratamentos
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
