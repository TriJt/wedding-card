import React from "react";
import "./footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Woman2SharpIcon from "@mui/icons-material/Woman2Sharp";
import Man2SharpIcon from "@mui/icons-material/Man2Sharp";
import { Link } from "react-router-dom";

const Footer = () => {
  const images = [
    "https://res.cloudinary.com/johnle/image/upload/v1687240610/Wedding%20Lap/mgva0d6fgiqun2i3o0kv.jpg",
    
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
        <p className="description">Hoàng Anh & Tuyết Lập</p>
        <div className="contents-footer">
          <div className="icon">
            <FacebookSharpIcon />
          </div>
          <div className="content-footer">
            <Link to={`https://www.facebook.com/lap.poon.5`} className="link-face">
              Tuyết Lập
            </Link>
          </div>
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
          <div className="content-footer">16, KP kiên tân, 
            Kiên lương,
            Kiên Giang</div>
        </div>
        <div className="contents-footer">
          <div className="icon">
            <Man2SharpIcon />
          </div>
          <div className="content-footer">Đia chỉ nhà trai</div>
        </div>
      </div>
      <div className="columns-footer">
        <div className="header-footer">Thời gian</div>
        <div className="div-content-about">
          <ContentAbout header={"Đám hỏi"} content={"14/09/2000"} />
        </div>
        <div className="div-content-about">
          <ContentAbout header={"Đám cưới"} content={"08/07/2000"} />
        </div>
        <div className="div-content-about">
          <ContentAbout header={"Rước dâu"} content={"09/07/2000"} />
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
