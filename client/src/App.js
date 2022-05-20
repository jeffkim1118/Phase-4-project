import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => console.log(user));
      }
    });
  }, []);

  return(
    <>  
    <Navbar user={user} setUser={setUser} />
    <Routes>
      <Route exact path="/" element={<Home user={user} setUser={setUser}/>}></Route>
      <Route exact path="/login" element={<Login setUser={setUser} />}></Route>
      <Route exact path="/signup" element={<Signup setUser={setUser}/>}></Route>
      <Route exact path="/post" element={<Post user={user} setUser={setUser}/>}></Route>
    </Routes>
    </>
  )
}

export default App