import React from "react";
import "./gridImage.css";

const GridImage = () => {
  const images = [
    "https://res.cloudinary.com/johnle/image/upload/v1687254116/Wedding%20Lap/rmgx4eeqqgk2eh6xxgwc.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254117/Wedding%20Lap/yhzvkvrb9arsreamif0f.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254116/Wedding%20Lap/q47um95oij1tbomxdni1.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254117/Wedding%20Lap/nrmp23vvvrvq5m3nxjps.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254120/Wedding%20Lap/oydl6x2run2lqg66yjgz.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254117/Wedding%20Lap/zrjcjwbiqig1m7h2jhf6.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254117/Wedding%20Lap/wivzeakbmfubkusaqnbm.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687254117/Wedding%20Lap/yhzvkvrb9arsreamif0f.jpg",
    "https://res.cloudinary.com/johnle/image/upload/v1687243276/Wedding%20Lap/pwqb7iypqhaipibkp2iz.jpg"
  ]


  const item = images.map((image, index) => {
    return (
      <>
        <div
          className={`${index % 2 === 0 ? "wide" : "big"} `}
          key={index}
        >
          <img src={image} alt="" className={`grid-image`} />
        </div>
      </>
    );
  });


  return <div className="container-image">
    <div className="grid-container">{item}</div>
    <div className="div-first">
      <div className="div-image-first image">
        <img src="https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/vhqj2sbgkcg7o6fr0t3k.jpg" alt=""   />
      </div>
      <div className="div-image-second">
      <img src="https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/p7fqojed8kqtwrasjmaf.jpg" alt=""   />
      </div>
    </div>
    <div className="div-first">
      <div className="div-img-thirst">
        <img src="https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/iz5dnzvbxqlh5zpto37e.jpg" alt=""   />
      </div>
      <div className="div-img-thirst">
        <img src="https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/nbvk6yizptemoy74hdgy.jpg" alt=""   />
      </div>
    </div>
    <div className="div-first">
      <div className="div-img-four">
        <img src="https://res.cloudinary.com/johnle/image/upload/v1687240611/Wedding%20Lap/rfjgjkvy1bxryg9zcg3e.jpg" alt="" />
      </div>
    </div>
    <div className="div-first">
      <div className="div-img-four">
        <img src="https://res.cloudinary.com/johnle/image/upload/v1687240610/Wedding%20Lap/tiiplnecfattldy1xf87.jpg" alt="" />
      </div>
    </div>


  </div>;
};

export default GridImage;
