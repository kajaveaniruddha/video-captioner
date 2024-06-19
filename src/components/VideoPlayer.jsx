import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import "./styles/main.scss";

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
      .filter(
        (caption) => caption.start <= currentTime && currentTime <= caption.end
      )
      .map((caption, index) => {
        const topPosition = `${(caption.start / videoDuration) * 100}%`;
        return (
          <div key={index} className="caption" style={{ top: topPosition }}>
            {caption.text}
          </div>
        );
      });
  };

  const videoRef = React.useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current.getInternalPlayer();
    if (videoElement) {
      setVideoDuration(videoElement.getDuration());
    }
  }, [videoRef]);

  return (
    <section className="video-section">
      <div className="video-container">
        <ReactPlayer
          ref={videoRef}
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
      <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
      {renderCaptions()}
    </section>
  );
};

export default VideoPlayer;
