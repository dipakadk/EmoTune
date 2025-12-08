import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Camera = () => {
  const [emotion, setEmotion] = useState('');
  const [musicRecommendations, setMusicRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cameraAccess, setCameraAccess] = useState(false);

  useEffect(() => {
    // Request camera access on component mount
    const requestCameraAccess = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraAccess(true);
      } catch (error) {
        alert('Camera access is needed for emotion detection. Please allow camera access.');
        setCameraAccess(false);
      }
    };

    requestCameraAccess();

    const analyzeEmotion = async () => {
      try {
        const response = await axios.post('http://localhost:5000/process_emotion');
        const data = response.data;

        if (data && data.length > 0) {
          setEmotion(data[0].emotion);
          setMusicRecommendations(data[0].music_recommendations.slice(0, 3)); // Limit to 3 recommendations
          setLoading(false);
        }
      } catch (error) {
        console.error('Error analyzing emotion:', error);
        setLoading(false);
      }
    };

    const intervalId = setInterval(analyzeEmotion, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 space-y-4 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white">Emotion Detection</h1>

      {/* Video Feed */}
      <div className="w-full h-64 max-w-4xl overflow-hidden bg-black rounded-lg shadow-md">
        <img 
          src="http://localhost:5000/video_feed" 
          alt="Live Video Feed"
          className="object-contain w-full h-full"
        />
      </div>

     

      {/* Emotion Result */}
      <div className="w-full text-center">
        {loading ? (
          <p className="text-white">Analyzing emotion...</p>
        ) : (
          <h2 className="text-xl font-semibold text-white">Detected Emotion: {emotion}</h2>
        )}
      </div>

      {/* Music Recommendations */}
      <div className="w-full p-4 bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Recommended Music</h3>
        {musicRecommendations.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {musicRecommendations.map((song, index) => (
              <li key={index} className="text-white">
                <span className="font-bold">{song.name}</span> by {song.artist} (Mood: {song.mood})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No music recommendations available</p>
        )}
      </div>
    </div>
    
  );
};

export default Camera;
