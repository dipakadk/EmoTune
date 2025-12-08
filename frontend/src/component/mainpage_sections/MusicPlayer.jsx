import { useState, useEffect } from "react";
import volumeIcon from '../../images/volume.png';

const musicFiles = {
  Happy: ["/songs/happy/1.mp3", "/songs/happy/2.mp3", "/songs/happy/3.mp3", "/songs/happy/4.mp3"],
  Sad: ["/songs/sad/1.mp3", "/songs/sad/2.mp3"],
  Angry: ["/songs/angry/1.mp3", "/songs/angry/2.mp3"],
  Calm: ["/songs/calm/1.mp3", "/songs/calm/2.mp3", "/songs/calm/3.mp3"],
  Energetic: ["/songs/energetic/1.mp3", "/songs/energetic/2.mp3"]
};

const RandomMusicPlayer = () => {
  const [emotion, setEmotion] = useState();
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const fetchEmotion = async () => {
      try {
        const response = await fetch("http://localhost:5000/process_emotion", { method: "POST" });
        const data = await response.json();
        if (data.length > 0 && data[0].emotion) setEmotion(data[0].emotion);
      } catch (error) {
        console.error("Error fetching emotion:", error);
      }
    };

    const interval = setInterval(fetchEmotion, 5000);
    return () => clearInterval(interval);
  }, []);

  const playRandomMusic = () => {
    if (!emotion) return;
    
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const emotionSongs = musicFiles[emotion];
    if (emotionSongs && emotionSongs.length > 0) {
      const randomIndex = Math.floor(Math.random() * emotionSongs.length);
      const randomMusicFile = emotionSongs[randomIndex];

      const newAudio = new Audio(randomMusicFile);
      newAudio.volume = volume;
      newAudio.play();

      newAudio.addEventListener("timeupdate", () => {
        setProgress(newAudio.currentTime);
      });

      newAudio.addEventListener("ended", playRandomMusic);

      setAudio(newAudio);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  return (
    <div style={styles.container}>
      <div style={styles.controlsWrapper}>
        <button style={styles.playButton} onClick={playRandomMusic}>
          PLAY
        </button>

        {audio && (
          <div style={styles.controls}>
            <div style={styles.progressText}>
              {Math.floor(progress)} sec
            </div>

            <div style={styles.volumeControl}>
              <div style={styles.volumeButtonWrapper}>
                <img 
                  src={volumeIcon} 
                  alt="Volume Control" 
                  style={styles.volumeIcon} 
                  onClick={toggleVolumeSlider} 
                />
                {showVolumeSlider && (
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={styles.slider}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "20px" },
  controlsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    width: "60px", height: "60px", borderRadius: "50%", border: "none",
    backgroundColor: "gray", color: "white", fontSize: "24px",
    cursor: "pointer", display: "flex", alignItems: "center",
    justifyContent: "center", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
    marginRight: "20px",
  },
  controls: {
    display: "flex", 
    alignItems: "center", 
    gap: "10px", 
  },
  progressText: {
    fontSize: "14px", 
    color: "#333",
  },
  volumeControl: {
    display: "flex", 
    alignItems: "center", 
    gap: "5px",
  },
  volumeButtonWrapper: {
    backgroundColor: "#333", 
    padding: "5px", 
    borderRadius: "5px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
  },
  volumeIcon: {
    width: "30px", 
    height: "30px", 
    cursor: "pointer", 
    color: "black",
  },
  slider: {
    width: "100px", 
    cursor: "pointer",
  }
};

export default RandomMusicPlayer;
