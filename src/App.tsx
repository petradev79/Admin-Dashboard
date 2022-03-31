// import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { db } from './firebase/firebase-config';
// import { collection, getDocs } from '@firebase/firestore';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './styles/main.scss';

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

const App = () => {
  // const [transactions, setTransactions] = useState<transactionType[]>([]);

  // const login = async () => {};

  // const logout = async () => {};

  // const transactionsCollectionRef = collection(db, 'transactions');

  // useEffect(() => {
  //   const getTransactions = async () => {
  //     const data = await getDocs(transactionsCollectionRef);
  //     setTransactions(
  //       data?.docs.map((doc: { data: () => any; id: string }) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }))
  //     );
  //   };
  //   try {
  //     getTransactions();
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // }, []);
  // console.log(transactions);

  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar />
        <div className='app__container'>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='users'>
                <Route index element={<List />} />
                <Route path=':userId' element={<Single />} />
                <Route path='new' element={<New />} />
              </Route>
              <Route path='products'>
                <Route index element={<List />} />
                <Route path=':productId' element={<Single />} />
                <Route path='new' element={<New />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
