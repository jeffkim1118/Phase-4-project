import React, {  useState } from 'react';
import {Link} from 'react-router-dom';
import './style/login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username:username, password:password }),
    })
      .then((r) => r.json())
      .then((user) => console.log(user));
  }

  return (
    <div className='login_wrapper'>
    <h1>Login</h1> 
    <form className='login_form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button className="login_btn" type="submit">Login</button>
    </form>
    <br/>
    <div><Link to='/signup'>First time? Register Now!</Link></div>
    </div>
  );
}
export default Login
