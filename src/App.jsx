import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleAddCaption = () => {
    if (currentCaption.trim() === "" || isNaN(timestamp)) {
      alert("Please enter a valid caption and timestamp.");
      return;
    }
    setCaptions([
      ...captions,
      { text: currentCaption, time: parseFloat(timestamp) },
    ]);
    setCurrentCaption("");
    setTimestamp("");
  };

  return (
    <div className="container">
      <h1>Video Captioning Tool</h1>
      <div>
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter caption"
          value={currentCaption}
          onChange={(e) => setCurrentCaption(e.target.value)}
        />
        <input
          min={0}
          type="number"
          placeholder="Enter timestamp (in seconds)"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
        <button onClick={handleAddCaption}>Add Caption</button>
      </div>
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
    </div>
  );
};

export default App;
