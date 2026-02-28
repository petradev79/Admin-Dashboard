import { useState, useEffect, useContext, createContext } from 'react';
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// import { doc, setDoc } from '@firebase/firestore';
import { auth, db } from '../firebase/config';

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log(user);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const signup = async account => {
  //   const response = await createUserWithEmailAndPassword(
  //     auth,
  //     account.email,
  //     account.password
  //   );
  //   setDoc(doc(db, 'users', response.user.uid), {
  //     ...account,
  //     address: `${account.address}, ${account.city}`,
  //   });
  //   setUser(response.user);
  //   return response.user;
  // };

  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    signup,
    signout,
  };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};
