import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Profile from "../../components/profile/Profile";
import ImageProfile from "../../components/profile/ImageProfile";

export default function Women() {
  const header = "Cô dâu";
  const image =
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
  const name = "Nguyễn Thị Như Huỳnh";
  const content = "Ngày sinh";
  const imageFirst =
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
  const imageSecond =
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
  const imageThirst =
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";

  return (
    <div>
      <NavBar />
      <Profile header={header} name={name} content={content} img={image} />
      <ImageProfile
        imageFirst={imageFirst}
        imageSecond={imageSecond}
        imageThirst={imageThirst}
      />
      <Footer />
    </div>
  );
}
