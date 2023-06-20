import React from "react";
import "./serviceundo.css";

export default function ServiceUno() {

  return (
    <div className="container-service-undo">
      <div className="div-image-undo">
        <div className="container-image-undo">
          <div className="after-back-undo"></div>
          <div className="before-back-undo">
            <img
              src="https://res.cloudinary.com/johnle/image/upload/v1687240610/Wedding%20Lap/x6lypujnlpaznqqsbzou.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="div-content-undo">
        <div className="div-content-top">
          Vào lúc
        </div>
        <div className="div-content-middle">
        <div className="first">
          <span> 16 giờ 30 </span>
          <hr />
          <span> Thứ bảy</span>
        </div>
        <div className="second"> 08 </div>
        <div className="first">
          <span> Tháng 7  </span>
          <hr style={{color: '#8e6929'}} />
          <span> Năm 2023</span>
        </div>
        </div>
        <div className="div-content-bottom">
          Nhằm ngày 21 tháng 05 năm Qúy Mão
        </div>
        </div>
    </div>
  );
}
