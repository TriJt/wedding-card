import React from "react";
import NavBar from "../../components/navBar/NavBar";
import MainPicture from "../../components/Pictures/MainPicture/MainPicture";
import Service from "../../components/main/service/Service";
import ServiceUno from "../../components/main/service-undo/ServiceUno";
import ServiceRedo from "../../components/main/service-redo/ServiceRedo";
import ListImage from "../../components/main/listImage/ListImage";
import Footer from "../../components/footer/Footer";
import CircleImage from "../../components/main/cicleImage/CircleImage";

import "./home.css";

export default function Home() {
  const imgHusband =
    "https://res.cloudinary.com/johnle/image/upload/v1687240613/Wedding%20Lap/qfhglcemvlmby81x5xl1.jpg";
  const nameHusband = "Phạm Hoàng Anh";
  const descriptionHusband = "Thứ nam";

  const imgWife =
    "https://res.cloudinary.com/johnle/image/upload/v1687240610/Wedding%20Lap/v9vftma6osbscemt5edf.jpg";
  const nameWife = "Trịnh Thị Tuyết Lập";
  const descriptionWife = "Trưởng nữ";

  



  return (
    <div>
      <div className="header-container" >
      <NavBar/>
      </div>
      <div className="fade-in" style={{marginTop: '50px'}}>
      <MainPicture  />
      </div>
      <div className="container-image-circle">
        <div className="header-circle">
          <h1> ONCE UPON A TIME</h1>
          <span> Weddings</span>
        </div>
        <div className="content-circle">
          <div>
            <CircleImage
              img={imgHusband}
              name={nameHusband}
              description={descriptionHusband}
            />
          </div>
          <div>
            <CircleImage
              img={imgWife}
              name={nameWife}
              description={descriptionWife}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "block" }}>
        <ServiceRedo  />
      </div>
      <div style={{ display: "block" }}>
        <ServiceUno />
      </div>
      
      <div>
        <ListImage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
