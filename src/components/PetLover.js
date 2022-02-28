import React from "react";
import "./PetLover.css";
import PetPic from "../assets/pet-pic.svg";

function PetLover() {
    return(
        <div className="petLover d-flex">
            <div className="pet-left-container">
                <h2 className="pet-title">If you are a pet Lover, here the right palce</h2>
                <p className="pet-description">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.</p>
                <button className="pet-button">Adopt Me</button>
            </div>
            <img src={PetPic} alt="pet" className="pet-pic" />
        </div>
    )
}


export default PetLover;