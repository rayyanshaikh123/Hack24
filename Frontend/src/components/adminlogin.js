// Frontend/src/components/adminlogin.jsx

import React, { useState } from 'react';
import Navbar from './Navbar';
import 'Frontend/src/components/adminlogin.css';

export default function Login() {
  const [adminData, setAdminData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/user/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log(data); // You can handle the response data as needed

    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle error, show an alert, or set an error state in your component
    }
  };

  return (
    <div>
      <div id="main">
        <Navbar />
        <div id="content">
          <div id="log">
            <center>
              <h1 className="font-semibold text-2xl">Admin Login.</h1>
            </center>
            <form>
              <label htmlFor="email">Enter Your Admin Email:</label>
              <br />
              <span>
                <i className="ri-user-line"></i>
              </span>
              <input type="text" id="email" name="email" onChange={handleInputChange} />
              <br /><br />
              <label htmlFor="password">Enter Admin Password:</label>
              <br />
              <span>
                <i className="ri-lock-password-line"></i>
              </span>
              <input type="password" id="password" name="password" onChange={handleInputChange} />
              <br />
              <label htmlFor="frgpsw">
                <a className="forgot" href="./forgotpsw">
                  Forgot Password?
                </a>
              </label>
              <br />
              <button type="button" className="continue" onClick={handleLogin}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}