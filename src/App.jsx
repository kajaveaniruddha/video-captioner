import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddCaption = () => {
    if (
      currentCaption.trim() === "" ||
      isNaN(timestamp) ||
      isNaN(endTime) ||
      parseFloat(timestamp) >= parseFloat(endTime)
    ) {
      alert("Please enter valid start and end times for the caption.");
      return;
    }
    setCaptions([
      ...captions,
      {
        text: currentCaption,
        start: parseFloat(timestamp),
        end: parseFloat(endTime),
      },
    ]);
    setCurrentCaption("");
    setTimestamp("");
    setEndTime("");
  };

  return (
    <main className="container">
      <section className="inputs">
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
            placeholder="Enter start time (in seconds)"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <input
            min={parseFloat(timestamp) + 1}
            type="number"
            placeholder="Enter end time (in seconds)"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <button onClick={handleAddCaption}>Add Caption</button>
        </div>
      </section>
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
    </main>
  );
};

export default App;
