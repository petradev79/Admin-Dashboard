import { useState, useEffect, useContext, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection } from '@firebase/firestore';
import { firebaseConfig } from '../firebase/config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authContext = createContext();
const db = getFirestore();
const usersRef = collection(db, 'users');

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(response => {
      setUser(response.user);
      return response.user;
    });
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      response => {
        db.collection('users').doc(response.user.uid).set({
          name: 'test',
        });
        console.log(response.user.uid);

        setUser(response.user);
        return response.user;
      }
    );
  };
  const signout = () => {
    return signOut(auth).then(() => {
      setUser(false);
    });
  };
  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };
  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    login,
    signup,
    signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
