import './App.css';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, renderMatches, Route, Routes} from "react-router-dom";
import axios from 'axios'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login onLogin={setUser} />;
  }
  return(
    <Routes>
      <Route exact path="/"element={<Home />}/>
    </Routes>
  )
}

export default App