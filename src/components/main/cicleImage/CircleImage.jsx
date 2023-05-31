import React from "react";
import "./circleImage.css";
const CircleImage = ({ img, name, description }) => {
  return (
    <div className="container-circle">
      <img className="image-circle" src={img} alt="" />
      <h4> {name}</h4>
      <p> {description} </p>
    </div>
  );
};

export default CircleImage;
