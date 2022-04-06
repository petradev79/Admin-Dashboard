import { useState, useEffect, useContext, createContext } from 'react';
// import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from '@firebase/firestore';
import { app } from '../firebase/config';

// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authContext = createContext();
const db = getFirestore();

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    setUser(response.user);
    return response.user;
  };

  const signup = async account => {
    const response = await createUserWithEmailAndPassword(
      auth,
      account.email,
      account.password
    );
    setDoc(doc(db, 'users', response.user.uid), {
      ...account,
      address: `${account.address}, ${account.city}`,
    });
    setUser(response.user);
    return response.user;
  };

  const signout = async () => {
    await signOut(auth);
    setUser(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, [user]);

  const value = {
    user,
    login,
    signup,
    signout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
