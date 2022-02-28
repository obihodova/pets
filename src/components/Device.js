import React from "react";
import "./Device.css";
import DevicePic from "../assets/device-pic.svg";

function Device() {
  return (
    <div className="device d-flex">
      <img src={DevicePic} alt="device" className="device-pic" />
      <div className="device-right-container">
        <h2 className="device-title">Get Pet’s Food & Accesories Here</h2>
        <p className="device-description">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </p>
        <button className="device-button">Shop Now</button>
      </div>
    </div>
  );
}

export default Device;
