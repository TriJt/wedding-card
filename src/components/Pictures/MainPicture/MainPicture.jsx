import React from "react";
import "./mainPicture.css";

export default function MainPicture({ content }) {
  const images = [
    "https://i.pinimg.com/564x/fc/ec/5c/fcec5c49931e77d8270246c4f2bb664b.jpg",
  ];
  return (
    <div
      className=" d-flex align-items-center"
      style={{ backgroundImage: `url(${images[0]})`, height: 400 }}
    >
      <div className="d-flex align-items-center justify-content-center div-content-picture ">
        <p className="text-light  text-picture">{content}</p>
      </div>
    </div>
  );
}
