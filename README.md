# Video Captioning Tool

This is a simple web application built with React and SASS that allows users to add captions to a video and display them dynamically as the video plays.

## Features

- Enter a URL to a hosted video.
- Add captions with timestamps (in seconds).
- Display captions synchronized with video playback.
- Play and pause the video.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/video-captioning-tool.git
   cd video-captioning-tool
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Usage

1. Start the development server:

   ```sh
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

3. Enter the video URL, captions, and timestamps in the input fields.

4. Click on the "Add Caption" button to add captions.

5. Play and pause the video to see captions generated dynamically based on timestamps.

### Technologies Used

- React
- SASS (for styling)
- React Player (for video playback)

### Folder Structure

```
video-captioning-tool/
│
├── public/         # Static assets and HTML template
├── src/            # Source code
│   ├── components/ # React components
│   ├── styles/     # SASS styles (main.scss)
│   ├── App.jsx     # Main application component
│   ├── index.js    # Entry point
│   └── ...
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

### Notes

- Adjust the SASS styles in `src/styles/main.scss` to customize the look and feel of the application.
- The application uses React Player for video playback and relies on local state for managing captions and timestamps.

---

Enjoy captioning your videos!
