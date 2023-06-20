import React from "react";
import "./listImage.css";

const ListImage = () => {
  const images = [
    "https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/iz5dnzvbxqlh5zpto37e.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687243276/Wedding%20Lap/pwqb7iypqhaipibkp2iz.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/p7fqojed8kqtwrasjmaf.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687243280/Wedding%20Lap/v1ngz85mujddhx6juiee.jpg",

  ];
  return (
    <>
      <div className="content-list">
        <h3> Sự hiện diện của quý gia đình</h3>
        <p> Là niềm hạnh phúc của gia đình chúng tôi</p>
      </div>
      <div className="container-list">
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
        <img src={images[3]} alt="" />
      </div>
    </>
  );
};

export default ListImage;
