# ReactApp3 - Firebase Task Logger

Student: Ahmad Wahidi  
Course: MWD4C React Development  
Assignment: Assignment 3  

## Features

- View tasks from Firebase Firestore
- Add a task using a form
- Mark a task complete or incomplete
- Delete a task
- Responsive dashboard design

## Setup

Install packages:

```bash
npm install
```

Open `src/firebase.js` and paste your Firebase values:

```js
apiKey: "your value",
appId: "your value"
```

Run the app:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Firebase

Create a Firebase project, add a web app, and enable Firestore Database in test mode.

Firestore rules for testing:

```js
allow read, write: if true;
```

## GitHub

```bash
git init
git add .
git commit -m "Complete ReactApp3 Firebase task logger"
git branch -M main
git remote add origin https://github.com/awahidi17/ReactApp3.git
git push -u origin main
```
