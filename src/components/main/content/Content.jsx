import React from "react";
import "./content.css";

const Content = ({ header, title, para }) => {
  return (
    <div className="container-content">
      <div className="header-service">
        <span style={{ "font-size": 40 }}> {header}</span>
        {title}
      </div>
      <div className="p-service">
        <p>{para}</p>
      </div>
      <div className="footer-service"></div>
    </div>
  );
};

export default Content;
