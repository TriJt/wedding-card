import React from 'react';
import "./slideshow.css"; 
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function SlideShow() {
    const images = [
        "https://res.cloudinary.com/johnle/image/upload/v1687243276/Wedding%20Lap/uzcqo4vku0hucdq15tlo.jpg",
        "https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/vhqj2sbgkcg7o6fr0t3k.jpg",
        "https://res.cloudinary.com/johnle/image/upload/v1687240612/Wedding%20Lap/p7fqojed8kqtwrasjmaf.jpg",
    ];
  return (
    <Slide>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
  )
}
