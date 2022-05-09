import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
};

handleSubmit = (e) => {
    e.preventDefault()
};

render() {
    const {username, email, password, password_confirmation} = this.state
return (
      <div>
        <h1>Sign Up</h1>        
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form>
          <div>
            or <Link to='/login'>Already a member? Login</Link>
          </div>
      </div>
    );
  }
}
export default Signup;