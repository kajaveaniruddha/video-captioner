# Video Captioning Tool
![Video Demo](https://www.veed.io/view/34c8e1bb-8dc1-44d7-bc3d-188777d2ec5c?panel=share)
This is a simple web application built with React and SASS that allows users to add captions to a video and display them dynamically as the video plays.

## Features

- Enter a URL to a hosted video.
- Add captions with timestamps (in seconds).
   ![image](https://github.com/kajaveaniruddha/video-captioner/assets/66174998/803c17ff-4f63-4710-af22-b9e623359151)
- Display captions synchronized with video playback.
- Play and pause the video.
   ![image](https://github.com/kajaveaniruddha/video-captioner/assets/66174998/08c2ce33-cd66-4e0e-8887-de7ec98ac455)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kajaveaniruddha/video-captioner.git
   cd video-captioner
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Usage

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173` to view the application.

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
│   ├── main.jsx    # Entry point
│   └── ...
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

### Notes

- Adjust the SASS styles in `src/styles/index.scss` to customize the look and feel of the application.
- The application uses React Player for video playback and relies on local state for managing captions and timestamps.

---

Enjoy captioning your videos!
