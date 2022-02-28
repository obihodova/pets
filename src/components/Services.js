import React, { useState, useEffect } from "react";
import "./Services.css";

function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://nameless-earth-95641.herokuapp.com/pets")
    .then((response) => {
      return response.json();
    })
    .then((response) => setData(response.services))
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className="services">
      <h2 className="services-title text-center">Services We Provide</h2>
      <p className="services-description text-center">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text,search for 'lorem ipsum' will uncover.
      </p>
      <div className="services-card-container d-flex justify-content-between">
        {data.map(({description, image, text}) => (
          <div className="services-card d-flex d-flex-column align-items-center  text-center" key={text}>
            <div className="services-card-pic" dangerouslySetInnerHTML={{ __html: image }} />
            <h4>{text}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

