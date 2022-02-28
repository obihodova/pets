import React from "react";
import "./Start.css";
import startPic from "../assets/start-pic.svg";

function Start() {
  return (
    <div className="start d-flex justify-content-between">
      <div className="start-left">
        <h1 className="start-title">We Take Care Pet Safe & Happy</h1>
        <p className="start-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <button className="start-button">Get Started</button>
      </div>
      <img src={startPic} alt="foto" className="start-pic" />
    </div>
  );
}

export default Start;
