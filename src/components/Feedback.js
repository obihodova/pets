import React from "react";
import "./Feedback.css";
import FeedbackPic from "../assets/feedback-pic.svg";
import FeedbackRaiting from "../assets/feedback-raiting.svg";

function Feedback() {
    return(
        <div className="feedback d-flex justify-content-between">
            <div className="feedback-left-container">
                <h2 className="feedback-title">Client’s Feedback</h2>
                <div className="feedback-card">
                  <p className="feedback-description">“All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true on the Internet.”</p>
                  <div className="d-flex justify-content-between align-items-center">  
                    <div>
                      <span className="feedback-name">Adam morlk</span>
                      <span className="feedback-prof">Software Engineer, USA</span>
                    </div>
                    <img src={FeedbackRaiting} alt="raiting" />
                  </div>
                </div>
            </div>
            <img src={FeedbackPic} alt="feedback" className="feedback-pic" />
        </div>

    )
}


export default Feedback;