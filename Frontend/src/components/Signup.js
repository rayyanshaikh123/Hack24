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
     
      <Navbar/>
      
      <div id="content">
        
        <div id="form">
          <div class="container">
            <div class="title">
              <center><h1 className="font-semibold text-2xl" >Sign Up</h1></center>
              <br />
            </div>
            <form>
              <div class="detailsh">
                <div class="ipbox">
                  <span class="details">First name</span>
                  <input type="text" id="fname" name='username' required />
                </div>
                <div class="ipbox">
                  <span class="details">Last name</span>
                  <input type="text" id="lname" required />
                </div>
                <div class="ipbox">
                  <span class="details">Email</span>
                  <input type="email" id="email" name='email' required />
                </div>
                <div class="ipbox">
                  <span class="details">Phone No</span>
                  <input type="tel" id="tel" name='phone_no' required />
                </div>
                <div class="ipbox">
                  <span class="details">Password</span>
                  <input type="password" id="password" name='password' required />
                </div>
               
              </div>
              
            
              <button type="submit" class="sign" >Sign Up</button>
              <label for="frgpsw"><a class="forgot mx-3" href="./forgotpsw ">    Already Have An Account?</a></label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}