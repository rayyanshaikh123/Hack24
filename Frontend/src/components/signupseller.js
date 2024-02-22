import React from 'react'
import '../Signup.css';
import Navbar from './Navbar';
export default function Signup() {
  return (
    <div id="main">
    <div id="home">
     
      <Navbar/>
      
      <div id="content">
        
        <div id="form">
          <div class="container">
            <div class="title">
              <center><h1 className="font-semibold text-2xl" >Sign Up As seller  </h1></center>
              <br />
            </div>
            <form action='localhost:5000/user' method='post'>
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
  </div>
  
  )
}
