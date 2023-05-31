import React from "react";
import "./serviceundo.css";
import Content from "../content/Content";

export default function ServiceUno() {
  const header = "S";
  const title = "ervice";
  const para =
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.";

  return (
    <div className="container-service-undo">
      <div className="div-image-undo">
        <div className="container-image-undo">
          <div className="after-back-undo"></div>
          <div className="before-back-undo">
            <img
              src="https://i.pinimg.com/474x/09/be/f3/09bef33c2d4413ede5ac65246e3f3625.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="div-content-undo">
        <Content header={header} title={title} para={para} />
      </div>
    </div>
  );
}
