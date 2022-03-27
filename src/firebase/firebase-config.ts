import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.,
  authDomain: 'admin-dashboard-a5178.firebaseapp.com',
  projectId: 'admin-dashboard-a5178',
  storageBucket: 'admin-dashboard-a5178.appspot.com',
  messagingSenderId: '118121100229',
  appId: '1:118121100229:web:841cf5016e3c9eaf3e91ac',
  measurementId: 'G-V4NQSN1KV0',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
