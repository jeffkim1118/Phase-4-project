import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({user}){
  const navigate = useNavigate()
  function navigateToPost(){
    navigate('/post')
  }


  console.log(user)
  if (user) {
    return <div>
      <h1>Welcome, {user.username}!</h1>
      <button onClick={navigateToPost}>Create a Post</button>
    </div>;
  } else {
    return <h1>Welcome to YL Blog!</h1>;
  }
}


export default Home