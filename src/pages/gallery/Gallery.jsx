import React from "react";
import NavBar from "../../components/navBar/NavBar";
import GridImage from "../../components/main/grid-image/GridImage";
import Footer from "../../components/footer/Footer";

export default function Gallery() {
  return (
    <div>
      <div className="header-container" >
      <NavBar />
      </div>
      <GridImage />
      <Footer />
    </div>
  );
}
