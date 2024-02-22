import React, {useState} from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import LoadingBar from 'react-top-loading-bar';
import Product from './components/Product';
import Cart from './components/Cart';
import 'ldrs/quantum';
// import Navbar from './components/Navbar';
import SignupSeller from './components/SignupSeller.js';
import LandPage from './components/LandPage';
import {
  HashRouter as Router,
   Route,
    Routes
} from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.js';

export default function App() {
  const [progress,setProgress] = useState(0)
  return (
    <>
    <ErrorBoundary>
    <Router>
    <LoadingBar
color='#40A2E3'
progress={progress}
// onLoaderFinished={() => setProgress(0)}
/>


<Routes>
          
          <Route exact path="/" element={<LandPage key="Land"/>}/>
          <Route exact path="/user/signup" element={<Signup key="Signup" />}/>
          <Route exact path="/user/login" element={<Login  key="Login"/>}/>
          <Route exact path="/seller/signup" element={<SignupSeller  key="SellerSign" />}/>
          <Route exact path="/products" element={<Product setProgress={setProgress } key="Product" heading='Product'/>}/>
          <Route exact path="/user/Cart" element={<Cart heading='Your Shopping Cart'/>}/>
          {/* <Route exact path="/sports" element={}/> 
          <Route exact path="/technology" element={}/>  */}


      </Routes>


    
          
          </Router>
          </ErrorBoundary>
    </>
  )
}
