import React from "react";
import Nav from "../component/Nav";
import emotune from "../images/emotune.jpg"

const Video = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
    style={{backgroundImage: `url(${emotune})`}}>
      <Nav />
      <div className="flex items-center justify-center w-full h-full">
      <img 
        src="http://localhost:5000/video_feed" 
        alt="Live Video Feed"
        className="w-full h-full object-contain"
      />
      </div>
    </div>
  );
};

export default Video;
