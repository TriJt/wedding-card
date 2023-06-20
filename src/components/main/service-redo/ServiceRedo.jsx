import React from "react";
import "./serviceRedo.css";
import Content from "../content/Content";

export default function ServiceRedo() {

  const images = "https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/vhqj2sbgkcg7o6fr0t3k.jpg"
  return (
    <div className="container-service">
      <div className="div-content">
        <div>
        <p className="content-log" > Trân trọng kính mời <span className="big-content">Quý gia đình</span> <br /> đến dự tiệc rượu chung vui
          cùng gia đình <br /> chúng tôi tại:  </p>
        </div>

        <div className="content-down">
          <div className="down-first"> TƯ GIA</div>
          <div className="down-second"> 16, KP kiên tân, <br />
            Kiên lương, <br />
            Kiên Giang
          </div>
        </div>
      </div>
      <div className="div-image">
        <div className="container-image">
          <div className="after-back"></div>
          <div className="before-back">
            <img
              src={images}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
