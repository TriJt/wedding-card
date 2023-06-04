import React from "react";
import "./profile.css";

export default function ImageProfile({ imageFirst, imageSecond, imageThirst }) {
  return (
    <div className="image-container">
      <img src={imageFirst} alt="" className="image-profile" />
      <img src={imageSecond} alt="" className="image-profile" />
      <img src={imageThirst} alt="" className="image-profile" />
    </div>
  );
}
