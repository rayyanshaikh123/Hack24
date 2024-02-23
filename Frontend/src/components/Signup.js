import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_no: '',
    password: '',
    shippingAddress: '', // Change to address field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user', formData);
      const authToken = response.data.authtoken;

      // Show success alert
      alert('Signup successful!');

      // Wait for a moment to ensure localStorage is updated
      await new Promise(resolve => setTimeout(resolve, 100));

      // Store the auth token in local storage
      localStorage.setItem('authToken', authToken);

      // Redirect the user to another page or update the UI as needed
      console.log('Signup successful. Auth token:', authToken);
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle signup error (e.g., display error message)
    }
  };

  return (
    <div id="main">
      <div id="home">
        <Navbar />
        <div id="content">
          <div id="form">
            <div className="container">
              <div className="title">
                <center><h1 className="font-semibold text-2xl">Sign Up</h1></center>
                <br />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="detailsh">
                  <div className="ipbox">
                    <span className="details">Username</span>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                  </div>
                  <div className="ipbox">
                    <span className="details">Email</span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="ipbox">
                    <span className="details">Phone No</span>
                    <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
                  </div>
                  <div className="ipbox">
                    <span className="details">Password</span>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="ipbox">
                    <span className="details">Address</span>
                    <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} required />
                  </div>
                </div>
                <button type="submit" className="sign">Sign Up</button>
                <label htmlFor="frgpsw"><a className="forgot mx-3" href="./signin">Already Have An Account?</a></label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
