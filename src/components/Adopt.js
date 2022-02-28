import React from "react";
import "./Adopt.css";
import AdoptPic1 from "../assets/adopt-pic-1.svg";
import AdoptPic2 from "../assets/adopt-pic-2.svg";


function Adopt () {
  
    return (
      <div className="adopt">
        <img src={AdoptPic1} alt="pic" className="adopt-pic" />
        <div className="adopt-content">
          <h3 className="adopt-title text-center">Want to Adopt a pet ?</h3>
          <form className="adopt-form">
            <input type="text" placeholder="Your Email.." className="input-email"></input>
            <button type="submit" value="Email us" className="input-submit">Email us</button>
          </form>
        </div>
        <img src={AdoptPic2} alt="pic" className="adopt-pic2" />
      </div>
    )
}

export default Adopt;