import React from "react";
import "./Header.css";
import logoPic from "../assets/logo.svg";

function Header() {
  return (
    <header
      id="header"
      className="d-flex align-items-center justify-content-between"
    >
      <div className="logo">
        <a href="#">
          <img src={logoPic} alt="logo" />
        </a>
      </div>
      <div className="header-nav">
        <a href="#">Home</a>
        <a href="#">How we work</a>
        <a href="#">Service</a>
        <a href="#">Adoption info</a>
        <button className="header-button">Get Appointment</button>
      </div>
    </header>
  );
}

export default Header;
