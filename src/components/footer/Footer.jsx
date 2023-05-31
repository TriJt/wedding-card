import React from "react";
import "./footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Woman2SharpIcon from "@mui/icons-material/Woman2Sharp";
import Man2SharpIcon from "@mui/icons-material/Man2Sharp";

const Footer = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const ContentAbout = ({ header, content }) => {
    return (
      <div>
        <div className="header">{header}</div>
        <li className="content">{content}</li>
      </div>
    );
  };

  return (
    <div className="container-footer">
      <div className="columns-footer">
        <div className="title">Weddings</div>
        <p className="description">Công Thành và Như Huỳnh</p>
        <div className="contents-footer">
          <div className="icon">
            <FacebookSharpIcon />
          </div>
          <div className="content-footer"> Link Facebook</div>
        </div>
        <div className="contents-footer">
          <div className="icon">
            <CallSharpIcon />
          </div>
          <div className="content-footer"> 09912991221</div>
        </div>
        <div className="contents-footer">
          <div className="icon">
            <Woman2SharpIcon />
          </div>
          <div className="content-footer">Đia chỉ nhà gái</div>
        </div>
        <div className="contents-footer">
          <div className="icon">
            <Man2SharpIcon />
          </div>
          <div className="content-footer">Đia chỉ nhà trai</div>
        </div>
      </div>
      <div className="columns-footer">
        <div className="header-footer">Về chúng tôi</div>
        <div className="div-content-about">
          <ContentAbout header={"Đám hỏi"} content={"14/09/2000"} />
        </div>
        <div className="div-content-about">
          <ContentAbout header={"Đám cưới"} content={"14/09/2000"} />
        </div>
        <div className="div-content-about">
          <ContentAbout header={"Rước dâu"} content={"14/09/2000"} />
        </div>
      </div>
      <div className="columns-footer grid-div">
        {/* Thêm 1 ảnh tại đây */}
        <img src={images[0]} alt="" />
      </div>
    </div>
  );
};

export default Footer;
