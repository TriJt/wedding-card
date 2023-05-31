import React from "react";
import "./service.css";
import SlideShow from "../../slideshow/SlideShow";
import Content from "../content/Content";

export default function Service() {
  const header = "S";
  const title = "ervice";
  const para =
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.";
  return (
    <div className="container-service">
      <div className="div-content">
        <Content header={header} title={title} para={para} />
      </div>
      <div className="div-image">
        <div className="container-image">
          <div className="after-back"></div>
          <div className="before-back">
            <SlideShow />
          </div>
        </div>
      </div>
    </div>
  );
}
