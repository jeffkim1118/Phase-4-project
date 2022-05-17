import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return(
    <>  
    <Navbar user={user} setUser={setUser} />
    <Routes>
      <Route exact path="/" element={<Home user={user}/>}></Route>
      <Route exact path="/login" element={<Login setUser={setUser} />}></Route>
      <Route exact path="/signup" element={<Signup setUser={setUser}/>}></Route>
    </Routes>
    </>
  )
}

export default App