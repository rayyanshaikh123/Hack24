import React from 'react'
import Navbar from './Navbar'
import '../login.css'
export default function Login() {
  return (
    <div>
       <div id="main">
      <Navbar/>
      <div id="content">
        <div id="log">
          <center><h1 className="font-semibold text-2xl">seller Login.</h1></center>
          <form>
            <label for="usname">Enter Your seller name :</label>
            <br />
            <span><i class="ri-user-line"></i></span>
            <input type="text" id="email" />
            <br /><br />
            <label for="password">Enter seller Password:</label>
            <br />
            <span><i class="ri-lock-password-line"></i></span>
            <input type="password" id="password" />
            <br />
            <label for="frgpsw"><a class="forgot" href="./forgotpsw ">Forgot Password?</a></label>
            <br />
            <button type="button" class="continue" onclick="login()">Log In</button>
           
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
