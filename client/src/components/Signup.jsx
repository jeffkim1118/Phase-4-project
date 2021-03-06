import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './style/signup.css';

function Signup({setUser}) {
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      first_name,
      last_name,
      email,
      password,
      username
    };
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then(user => setUser(user));
      navigate('../login', {replace:true})
  }

  return (
    <div className='signup_container'>
      <h1>Sign Up</h1>
    <form className='signup_form' onSubmit={handleSubmit}>
      <input
        type="text"
        id="first"
        placeholder='First Name'
        value={first_name}
        onChange={(e) => setFirst(e.target.value)}
      /><br />
      <input
        type="text"
        id="last"
        placeholder='Last Name'
        value={last_name}
        onChange={(e) => setLast(e.target.value)}
      /><br />
      <input
        type="text"
        id="username"
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="text"
        id="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button className='sign_up_btn' type="submit">Register</button>
    </form>
      <br/>
      <div>or <Link to='/login'>Already a member? Login</Link></div>
    </div>
  );
}
          
  
export default Signup;