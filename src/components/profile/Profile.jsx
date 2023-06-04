import React from "react";
import "./profile.css";
export default function Profile({ header, name, content, img }) {
  return (
    <div className="profile-container">
      <div className="left-profile">
        <div className="header-profile">{header}</div>
        <div className="name-profile">{name}</div>
        <div className="content-profile">{content}</div>
      </div>
      <div className="right-profile">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
