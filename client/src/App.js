import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from 'axios'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
      axios.get('http://localhost:3000/logged_in', 
      {withCredentials: true})    
  .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }
render() {
    return (
      <div>
         <BrowserRouter>
         <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/signup' element={<Signup />}/>  
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
export default App;