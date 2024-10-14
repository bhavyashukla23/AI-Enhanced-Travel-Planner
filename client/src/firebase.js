// Import the necessary Firebase functions
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken as getFCMToken, onMessage } from 'firebase/messaging';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(firebaseApp);

// Get the FCM token
export const getToken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await getFCMToken(messaging, { vapidKey: 'your-public-vapid-key' });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.error('An error occurred while retrieving token.', error);
  }
  return currentToken;
};

// Listen for FCM messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
