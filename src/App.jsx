// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from './pages/Player/Player';
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // firebase
import { auth } from "./firebase";

import { ToastContainer } from 'react-toastify'; // Toast
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        // Only navigate to '/' if not already on a player page
        if (location.pathname === '/login') {
          navigate('/');
        }
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [navigate]); // Add `navigate` to the dependency array

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
