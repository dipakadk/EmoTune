import React from 'react';
import { Music } from './Music';
import kgaru from "../../images/kgaru.jpg";
import china from "../../images/china.jpg";
import dws from "../../images/diewithsmile.jpg";
import blue from "../../images/blue.jpg";
import bof from "../../images/birds.jpg"
import fb from "../../images/falling.jpg"
import gon from "../../images/give.jpg"

export const Youtube = () => {
  return (
    <div className="bg-gray-600 h-screen overflow-y-auto pt-24">
      <h2 className="md:text-3xl sm:text-2xl font-extrabold text-center text-white mb-4 tracking-wide">
        YouTube Feed
      </h2>
      <h6 className="md:text-xl sm:text-lg font-semibold text-center text-white mt-2">
        Latest Track
      </h6>

      {/* Music Cards Container */}
      <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
        <Music imageUrl={kgaru} youtubeUrl="https://youtu.be/fGF10RLUm1U?si=c5LPzM17ZIzshVXl" />
        <Music imageUrl={china} youtubeUrl="https://youtu.be/-oLaIlMaPu8?si=wL4vt5aQ3Y1jsnJW" />
        <Music imageUrl={dws} youtubeUrl="https://youtu.be/kPa7bsKwL-c?si=M1HSzMuLVhKqRwpb" />
        <Music imageUrl={blue} youtubeUrl="https://youtu.be/IpFX2vq8HKw?si=YcoZJPpmXQokfRt2" />
        <Music imageUrl={bof} youtubeUrl="https://youtu.be/V9PVRfjEBTI?si=enOhKOxiaRx1c3R-v" />
        <Music imageUrl={fb} youtubeUrl="https://youtu.be/Ej8RhiSv2-4?si=Ibo5LcY1-j8I2QCP" />
        <Music imageUrl={gon} youtubeUrl="https://youtu.be/F5S0rnc3828?si=jcwBr9qCdlZZMhx3" />
      </div>
    </div>
  );
};
