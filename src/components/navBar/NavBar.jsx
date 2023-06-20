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
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to={`/gallery`} className="link">
              Gallenry
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
