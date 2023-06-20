import React from "react";
import "./content.css";

const Content = ({ header, title, para }) => {
  return (
    <div className="container-content">
      <div className="p-service">
        <p>{para}</p>
      </div>
      <div className="footer-service"></div>
    </div>
  );
};

export default Content;
