import "./Footer.css";
import React from "react";
import LogoPic from "../assets/logo.svg";

function Footer() {
  return (
    <div className="footer d-flex">
      <div className="footer-logo-container">
        <a href="#">
          <img src={LogoPic} alt="logo" className="footer-logo" />
        </a>
        <span className="footer-description">All rights reserved. 2022</span>
      </div>
      <div className="footer-nav d-flex d-flex-column">
          <h6 className="footer-nav-title">Company</h6>
          <a href="#">
            <span className="footer-nav-item">Our Story</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Blog</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Career</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Media</span>
          </a>
        </div>
        <div className="footer-nav d-flex d-flex-column">
          <h6 className="footer-nav-title">Quick Links</h6>
          <a href="#">
            <span className="footer-nav-item">Product</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Forms</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Help Desk</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Refund Policy</span>
          </a>
        </div>
        <div className="footer-nav d-flex d-flex-column">
          <h6 className="footer-nav-title">Difference</h6>
          <a href="#">
            <span className="footer-nav-item">Our Promise</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Facilities</span>
          </a>
          <a href="#">
            <span className="footer-nav-item"> Meet the experts</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Webcams</span>
          </a>
        </div>
        <div className="footer-nav d-flex d-flex-column">
          <h6 className="footer-nav-title">Contact</h6>
          <a href="#">
            <span className="footer-nav-item">Terms & Conditions</span>
          </a>
          <a href="#">
            <span className="footer-nav-item">Privacy Policy</span>
          </a>
          
        </div>
    </div>
  );
}

export default Footer;
