import os
import cv2
import pandas as pd
import tkinter as tk
from tkinter import messagebox
from flask import Flask, Response
# from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)

# Haar Cascade and Emotion Model
cascade_path = r"/home/dipak/EmotionTune/backend/haarcascades/haarcascade_frontalface_default.xml"
if not os.path.exists(cascade_path):
    print(f"Error: Haar cascade file not found at {cascade_path}")
    exit(1)

face_cascade = cv2.CascadeClassifier(cascade_path)
# emotion_model = load_model(r'models\CNN_Model.h5')
emotion_labels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Calm', 'Energetic']

# Optional: music dataset
# music_data = pd.read_csv('data/data_moods.csv')

# Global camera
cap = None

def request_camera_permission():
    """Function to ask for camera permission using Tkinter popup."""
    root = tk.Tk()
    root.withdraw()
    user_response = messagebox.askyesno("Camera Permission", "Do you allow this application to access your camera?")
    root.destroy()
    return user_response

def open_camera():
    """Initialize camera."""
    global cap
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        raise RuntimeError("Failed to open camera")

def preprocess_face(face_img):
    """Preprocess face image for emotion prediction."""
    face_gray = cv2.cvtColor(face_img, cv2.COLOR_BGR2GRAY)
    face_resized = cv2.resize(face_gray, (48, 48))  # CNN model input size
    face_resized = face_resized.astype("float") / 255.0
    face_resized = np.expand_dims(face_resized, axis=0)  # batch dimension
    face_resized = np.expand_dims(face_resized, axis=-1)  # channel dimension
    return face_resized

def generate_frames():
    """Capture frames from the webcam and detect faces & emotions."""
    global cap
    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

            for (x, y, w, h) in faces:
                # Draw rectangle
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

                # Extract face region
                face_img = frame[y:y+h, x:x+w]
                face_input = preprocess_face(face_img)

                # Predict emotion
                # preds = emotion_model.predict(face_input)
                # emotion_label = emotion_labels[np.argmax(preds)]

                # Put emotion text above rectangle
                # cv2.putText(frame, emotion_label, (x, y - 10),
                #             cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

            # Encode frame as JPEG
            ret, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.route('/')
def index():
    """Home page with embedded video feed."""
    return '''
    <h1>Live Face & Emotion Detection</h1>
    <img src="/video_feed" width="640" height="480">
    '''

@app.route('/video_feed')
def video_feed():
    try:
        return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')
    except Exception as e:
        print("Error serving video feed:", e)
        return "Error serving video feed", 500

if __name__ == '__main__':
    if request_camera_permission():
        open_camera()
        app.run(host='0.0.0.0', port=5000)
    else:
        print("Camera access denied. Exiting.")
