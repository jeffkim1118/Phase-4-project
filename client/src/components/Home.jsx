import React from 'react';

function Home({user}){
  console.log(user)
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return <h1>Welcome to YL Blog!</h1>;
  }
}

export default Home