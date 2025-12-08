import React, { useState } from 'react';
import Camera from '../camera';
import '../Hero.css';
import RandomMusicPlayer from './MusicPlayer';
import aboutImage from "../../images/about.png"
export const Hero = () => {
  const [emotion, setEmotion] = useState(null);
  const [recommendedMusic, setRecommendedMusic] = useState([]);

  // Handle the emotion detection and update UI
  const handleEmotionDetected = (data) => {
    if (data && data.length > 0) {
      setEmotion(data[0].emotion);
      setRecommendedMusic(data[0].music_recommendations); 
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-700 hero-bg gap-y-11 "
    style={{
      backgroundImage: `url(${aboutImage})`, 
      backgroundSize: '90% 90%', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
    }}>
      <div className="flex flex-col items-center justify-center h-full p-6 mb-20">
        <h1 className="mb-4 text-4xl font-bold text-white">EMOTUNE</h1>

        <h6 className="mb-2 text-lg font-semibold text-white">Detected Emotion</h6>
        <div className="flex items-center justify-center h-32 max-w-xl mb-6 bg-white rounded-lg shadow max-full">
          <Camera onEmotionDetected={handleEmotionDetected} />
        </div>

        {emotion && (
          <div className="mb-4 text-white">
            <h2>Emotion Detected: {emotion}</h2>
          </div>
        )}
      </div>

      {/* Play button */}
      <div className="absolute transform -translate-x-1/2 bottom-10">
        <RandomMusicPlayer recommendedMusic={recommendedMusic} />
      </div>
    </div>
  );
};
