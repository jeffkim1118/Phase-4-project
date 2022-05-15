import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  // const[currentUser, setCurrentUser] = useState('')

  // useEffect(() => {
  //   fetch('/auth')
  //   .then(res => {
  //     if (res.ok)
  //       res.json().then(user => setCurrentUser(user))
  //   })
  // }, []);

  // if (!currentUser) return <Login setCurrentUser={setCurrentUser}/>
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App