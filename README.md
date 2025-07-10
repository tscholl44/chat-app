# Chat App

A cross-platform (iOS/Android/Web) chat application built with React Native, Expo, and Firebase. The app provides users with a chat interface and options to share images and their
location.



## Features

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.

- A page displaying the conversation, as well as an input field and submit button.

- The chat provides users with two additional communication features: sending images and location data.

- Data gets stored online and offline.



## Requirements

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for Android emulator)
- [Xcode](https://developer.apple.com/xcode/) (for iOS simulator, macOS only)
- [Firebase Project](https://firebase.google.com/)

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/chat-app.git
cd chat-app

### 2. Install Dependencies

npm install

### 3. Setup Firebase

Go to Firebase Console and create a new project.
In your project, enable Firestore Database and Storage.
Enable Authentication (Anonymous sign-in).
In Project Settings, add a new Web App and copy the Firebase config.

### 4. Configure Firebase Credentials

Open App.js and replace the firebaseConfig object with your own Firebase credentials:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

### 5. Start the Development Server

npm start

### 6. Running on Devices/Emulators

Expo Go App:
Scan the QR code in Expo Dev Tools with the Expo Go app on your iOS or Android device.

Android Emulator:
Open Android Studio, start an emulator, then run: npm run android

Web: 
run: npm run web

## Libraries Used in this Project

React Native
Expo
Firebase (Firestore, Storage, Auth)
react-native-gifted-chat
expo-image-picker
expo-location
react-native-maps
@react-native-async-storage/async-storage
@react-navigation/native
@react-navigation/native-stack
@expo/react-native-action-sheet

## Troubleshooting

Expo Go limitations: Some native features may not work in Expo Go. For full functionality, use a custom development build.
Firebase errors: Double-check your Firebase credentials and make sure Firestore, Storage, and Auth are enabled.
Permissions: Ensure you grant camera, photo, and location permissions on your device/emulator.