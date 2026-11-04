# EmoTune

EmoTune is an emotion-aware music recommendation application that blends computer vision, mood detection, and a modern frontend experience. The project aims to detect the user’s emotional state from a live webcam feed and then deliver music suggestions that match that mood.

It combines a Python Flask backend for camera processing and emotion analysis with a React + Vite frontend for the user interface, login flow, music experience, and profile screens.

## Overview

The application is designed around a simple concept:

- The user opens the app.
- The system accesses the webcam.
- Faces are detected using OpenCV Haar cascades.
- The app prepares the face region for emotion recognition.
- Based on the detected mood, the app guides the user toward a matching music experience.

This project is a strong prototype for an emotion-driven music platform and can be expanded toward real recommendation engines and third-party music integrations.

## Key Features

- Live webcam face detection
- Emotion-based mood recognition pipeline
- User registration and login experience
- Profile and dashboard-like screens
- Music-related UI for mood-based listening
- Frontend landing page and service overview
- Responsive web interface with React and Tailwind CSS

## Tech Stack

### Frontend
- React
- Vite
- JavaScript / JSX
- Tailwind CSS
- React Router
- Framer Motion

### Backend
- Python
- Flask
- OpenCV
- NumPy
- Pandas
- TensorFlow-ready deep learning workflow

## Project Structure

```text
EmoTune/
├── backend/
│   ├── app.py
│   ├── haarcascades/
│   │   └── haarcascade_frontalface_default.xml
│   └── models/
│       ├── emotion-based-music-recommender.ipynb
│       └── emotion-based-music-recommender_cnnonlyipynb
├── frontend/
│   ├── public/
│   │   └── songs/
│   │       ├── calm/
│   │       ├── energetic/
│   │       ├── happy/
│   │       └── sad/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── component/
│   │   │   ├── Hero.css
│   │   │   ├── Nav.jsx
│   │   │   ├── camera.jsx
│   │   │   ├── logout.jsx
│   │   │   ├── player.jsx
│   │   │   └── mainpage_sections/
│   │   │       ├── about.jsx
│   │   │       ├── footer.jsx
│   │   │       ├── hero.jsx
│   │   │       ├── Music.jsx
│   │   │       ├── MusicPlayer.jsx
│   │   │       ├── services.jsx
│   │   │       └── Youtube.jsx
│   │   ├── context/
│   │   │   ├── LoginContext.js
│   │   │   └── LoginContextProvider.jsx
│   │   ├── images/
│   │   ├── musicfiles/
│   │   └── pages/
│   │       ├── Login.jsx
│   │       ├── Mainpage.jsx
│   │       ├── Register.jsx
│   │       ├── home.jsx
│   │       ├── profile.jsx
│   │       └── video.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   └── index.html
├── pyproject.toml
├── README.md
├── index.html
└── .gitignore
```

## Frontend Source File Breakdown

### `src/pages`
- `Login.jsx` — login screen
- `Register.jsx` — registration screen
- `Mainpage.jsx` — landing app page
- `home.jsx` — home/dashboard experience
- `profile.jsx` — profile information view
- `video.jsx` — video/camera route

### `src/component`
- `camera.jsx` — camera handling and video related UI
- `player.jsx` — music player component
- `Nav.jsx` — navigation bar
- `logout.jsx` — logout logic
- `Hero.css` — landing page styling

### `src/component/mainpage_sections`
- `about.jsx` — about section
- `services.jsx` — service descriptions
- `hero.jsx` — hero section
- `footer.jsx` — page footer
- `Music.jsx` — music-related UI section
- `MusicPlayer.jsx` — enhanced music player section
- `Youtube.jsx` — YouTube/media integration area

### `src/context`
- `LoginContext.js` — login state context definition
- `LoginContextProvider.jsx` — global login provider

### `public/songs`
Contains mood-based song folders:
- `calm/`
- `energetic/`
- `happy/`
- `sad/`

This structure suggests that the app is intended to present mood-specific music tracks based on detected emotion.

## Getting Started

### Prerequisites

Make sure the following are installed:

- Python 3.13+
- Node.js 18+
- npm
- `uv` package manager
- Webcam access for local testing
- A browser with camera permission enabled

### 1. Clone the repository

```bash
git clone <repository-url>
cd EmoTune
```

### 2. Set up the Python environment with uv

From the project root:

```bash
uv venv
source .venv/bin/activate
uv sync
```

This reads the project configuration from `pyproject.toml` and installs the required Python dependencies.

If you want to install the project in editable mode explicitly:

```bash
uv pip install -e .
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

## Running the Application

### Start the backend

From the project root:

```bash
uv run python backend/app.py
```

This starts the Flask server and initializes the camera feed logic.

> Note: The backend currently references a local Haar cascade XML path. If the project is moved to another machine or directory, update that file path inside `backend/app.py` to the correct location.

### Start the frontend

Open a second terminal and run:

```bash
cd frontend
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Application Flow

1. User signs up or logs in.
2. The app loads the main interface.
3. The backend initializes the webcam feed.
4. Faces are detected using OpenCV Haar cascades.
5. The face region is processed for emotion inference.
6. The music-related frontend experience is presented based on the mood-driven user flow.

## Current Status

This project is a strong prototype and MVP for emotion-based music recommendations. It includes a working foundation for:

- webcam-based face detection
- mood-driven UI design
- music media organization by emotional category
- React-based user flow and authentication screens

## Important Notes

- The backend currently uses Tkinter for camera permission prompts, which is mainly suitable for local desktop usage.
- The emotion model and recommendation logic are still prototypical and can be expanded with a more advanced trained model.
- The app is meant as a demo or early-stage product prototype rather than a production-ready service.
- The music system is currently structured around local files and themed folders, which makes it easy to evolve into a real streaming integration.

## Troubleshooting

### Camera is not opening

- Confirm the webcam is connected and available.
- Allow camera permission in the browser and in the OS.
- Verify the Haar cascade file exists:
  - `backend/haarcascades/haarcascade_frontalface_default.xml`

### Backend fails to start

- Make sure the virtual environment is activated.
- Run:

```bash
uv sync
```

### Frontend dependencies fail to install

- Ensure Node.js and npm are installed correctly.
- Remove stale install files if necessary:

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Future Improvements

### Direct Music Hub Integration

A major future improvement is connecting EmoTune directly to a music platform such as:

- Spotify
- YouTube Music
- Apple Music
- Deezer

Possible enhancements include:

- OAuth-based user login with Spotify
- Mood-based playlist generation
- Real-time emotion-to-playlist matching
- Personalized listening history
- AI-driven recommendation engine
- Smart “Queue by Mood” feature

### Model and Recommendation Improvements

- Replace the basic Haar cascade flow with a trained CNN emotion classification model
- Add better emotion labels and confidence scoring
- Build a recommendation engine connected to real music metadata
- Support multiple users and saved preferences

### Product Expansion

- Add user profiles with favorites and mood history
- Add REST API integration between the Flask backend and frontend
- Integrate a database for authentication and user data
- Prepare the app for deployment on cloud hosting platforms

## License

This project does not currently include a formal license file. If you intend to share or distribute it publicly, it is recommended to add an appropriate open-source license such as MIT or Apache 2.0.

## Summary

EmoTune is a creative AI-powered music recommendation prototype that bridges emotion detection and music selection. With a strong foundation in computer vision, web UI, and mood-based content, it has a clear path to become a more advanced and commercially relevant music experience connected to real streaming platforms.
