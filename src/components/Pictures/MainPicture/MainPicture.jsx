import React from "react";
import "./mainPicture.css";

export default function MainPicture() {
  const images = [
    "https://res.cloudinary.com/johnle/image/upload/v1687243276/Wedding%20Lap/opraepph52ofqgzp8fo4.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687243280/Wedding%20Lap/v1ngz85mujddhx6juiee.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687243279/Wedding%20Lap/ahddzlrem80cd5drlku7.jpg",
  ];

  const background = [
    "https://res.cloudinary.com/johnle/image/upload/v1685947976/Wedding%20Lap/cmlfzaxmt0gdjzlejm5i.jpg",
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
