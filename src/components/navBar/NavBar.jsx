import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container-navbar">
      <div className="logo">Happy Wedding</div>
      <div className="navBar">
        <div className="d-flex col-12 justify-content-center">
          <li className="px-2">
            <Link to={`/`} className="link ">
              {" "}
              Trang chủ{" "}
            </Link>{" "}
          </li>
          <li className="px-2">
            <Link to={`/man`} className="link">
              {" "}
              Chú rể{" "}
            </Link>
          </li>
          <li className="px-2">
            <Link to={`/women`} className="link">
              {" "}
              Cô dâu{" "}
            </Link>
          </li>
          <li className="px-2">
            <Link to={`/gallery`} className="link">
              {" "}
              Hình ảnh{" "}
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
