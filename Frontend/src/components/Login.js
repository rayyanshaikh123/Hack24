import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', formData);
      const authToken = response.data.authtoken;

      // Show success alert
      alert('Login successful!');

      // Wait for a moment to ensure localStorage is updated
      await new Promise(resolve => setTimeout(resolve, 100));

      // Store the auth token in local storage
      localStorage.setItem('authToken', authToken);
      if (authToken) {
        // authToken is stored locally
        console.log('Auth token exists in localStorage:', authToken);
      } else {
        // authToken is not stored locally
        console.log('Auth token does not exist in localStorage');
      }

      // Redirect the user to another page or update the UI as needed
      console.log('Login successful. Auth token:', authToken);
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div>
      <div id="main">
        <Navbar />
        <div id="content">
          <div id="log">
            <center><h1 className="font-semibold text-2xl">Login.</h1></center>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Enter Your Email:</label>
              <br />
              <span><i className="ri-user-line"></i></span>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <br /><br />
              <label htmlFor="password">Enter Your Password:</label>
              <br />
              <span><i className="ri-lock-password-line"></i></span>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
              <br />
              <label htmlFor="frgpsw"><a className="forgot" href="./forgotpsw ">Forgot Password?</a></label>
              <br />
              <button type="submit" className="continue">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}