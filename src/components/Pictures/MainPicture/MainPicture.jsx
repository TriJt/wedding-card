import React from "react";
import "./mainPicture.css";

export default function MainPicture({ content }) {
  const images = [
    "https://i.pinimg.com/564x/fc/ec/5c/fcec5c49931e77d8270246c4f2bb664b.jpg",
    "https://i.pinimg.com/564x/fc/ec/5c/fcec5c49931e77d8270246c4f2bb664b.jpg",
    "https://i.pinimg.com/564x/fc/ec/5c/fcec5c49931e77d8270246c4f2bb664b.jpg",
  ];

  const background = [
    "https://i.pinimg.com/564x/fc/ec/5c/fcec5c49931e77d8270246c4f2bb664b.jpg",
  ];

  return (
    <div
      className="d-flex align-items-center picture-container"
      style={{ backgroundImage: `url(${background[0]})`, height: 600 }}
    >
      <div className="big-container-main">
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
      </div>
    </div>
  );
}
