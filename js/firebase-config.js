// Copy the Web App config from Firebase Console > Project settings > Your apps.
// This browser configuration is public. Never put service-account keys here.
export const firebaseConfig = {
  apiKey: 'AIzaSyAvLno4TOR33DY0OV81Y9NjLlkh58SwBj8',
  authDomain: 'precious-beauty-photos.firebaseapp.com',
  projectId: 'precious-beauty-photos',
  storageBucket: 'precious-beauty-photos.firebasestorage.app',
  messagingSenderId: '514975676080',
  appId: '1:514975676080:web:0e6d2a0fd01e6c8c80ed75'
};
export const configured = firebaseConfig.apiKey !== 'PASTE_API_KEY' && firebaseConfig.appId !== 'PASTE_APP_ID';
