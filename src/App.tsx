// import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useAuth } from './context/auth';

// import { db } from './firebase/firebase-config';
// import { collection, getDocs } from '@firebase/firestore';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './styles/main.scss';
import { PrivateRoute } from './helper/PrivateRoute';
import Signup from './pages/login/Signup';

// type transactionType = {
//   id: string;
//   name: string;
//   date: Date;
//   amount: number;
//   status: string;
//   type: string;
//   description: string;
//   address?: string;
// };

// type accauntType = {
//   id: string,
//   username: string,
//   firstName: string,
//   lastName: string,
//   dateOfBirth: string,
//   email: string,
//   avatar: string,
//   address?: string;
// };

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar />
        <div className='app__container'>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route
                index
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path='login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='users'>
                <Route
                  index
                  element={
                    <PrivateRoute>
                      <List />
                    </PrivateRoute>
                  }
                />
                <Route
                  path=':userId'
                  element={
                    <PrivateRoute>
                      <Single />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='new'
                  element={
                    <PrivateRoute>
                      <New />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path='products'>
                <Route
                  index
                  element={
                    <PrivateRoute>
                      <List />
                    </PrivateRoute>
                  }
                />
                <Route
                  path=':productId'
                  element={
                    <PrivateRoute>
                      <Single />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='new'
                  element={
                    <PrivateRoute>
                      <New />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
