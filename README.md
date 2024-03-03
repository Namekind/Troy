
# Troy 🪖

Troy 🪖 is a Firebase CRUD (Create, Read, Update, Delete) app for managing data in a Firestore database. It allows users to perform CRUD operations on data stored in Firestore, providing a seamless and responsive user experience.

## Demo Here 
⚔️💚"[Demo](https://troy-tau.vercel.app/) "

## How to Use

1. **Fork the Repository**: Click the "Fork" button at the top-right corner of this repository to create your own copy.

2. **Set Up Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - Navigate to the project settings and copy the Firebase configuration object.
   - Replace the Firebase configuration object in the `index.js` file with your own configuration.

   Example Firebase Configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   
