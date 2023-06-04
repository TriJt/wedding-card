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
    "https://i.pinimg.com/474x/15/18/55/151855a0c8cf69187b2f1f8b30b1b593.jpg";
  const nameHusband = "Nguyễn Công Thành";
  const descriptionHusband = "14/09/1998";

  const imgWife =
    "https://i.pinimg.com/474x/15/18/55/151855a0c8cf69187b2f1f8b30b1b593.jpg";
  const nameWife = "Nguyễn Thị Như Huỳnh";
  const descriptionWife = "14/09/1998";

  const contentMainFirst = "Our Story";

  return (
    <div>
      <NavBar />
      <MainPicture content={contentMainFirst} />
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
        <Service />
      </div>
      <div style={{ display: "block" }}>
        <ServiceUno />
      </div>
      <div style={{ display: "block" }}>
        <ServiceRedo />
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
