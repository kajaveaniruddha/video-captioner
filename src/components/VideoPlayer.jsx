import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, captions }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [playing]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const renderCaptions = () => {
    return captions
      .filter((caption) => caption.time <= currentTime)
      .map((caption, index) => (
        <div
          key={index}
          className="caption"
          style={{ top: `${caption.time * 10}%` }}
        >
          {caption.text}
        </div>
      ));
  };

  return (
    <>
      <div className="video-container">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          playing={playing}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                crossOrigin: "true",
              },
            },
          }}
        />
       
      </div>
      <div>
      {renderCaptions()}
        <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
      </div>
    </>
  );
};

export default VideoPlayer;
