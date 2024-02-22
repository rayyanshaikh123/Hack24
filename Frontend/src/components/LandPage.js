import React from 'react'
import Navbar from './Navbar'
import logo from '../undraw_code_thinking_re_gka2.svg';
import LandCard from './LandCard';
export default function LandPage() {
  return (
    <>
    <div className=" bg-[url('https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center w-[100%] h-[100vh]">
      <Navbar />
      <div className="flex w-100 py-4 justify-evenly align-center  ">
        <div className="w-30 mt-[16vh] pl-20">
        <h1 className="text-5xl w-30 "><span className="font-semibold italic"> SVTechShant: </span>Your Gateway to Cutting-Edge Computing & Accessories </h1>
        <p className="w-[50vw] py-4 text-lg subpixel-antialiased" >
        Welcome to SvTechShant, where innovation meets convenience! Explore our vast selection of top-tier computers, laptops, and accessories tailored to elevate your digital experience. From sleek laptops to powerhouse desktops, we offer the latest in technology to suit every need. Browse through a treasure trove of accessories - from lightning-fast SSDs to ergonomic keyboards - designed to enhance productivity and unleash your creativity. At Tech Haven, we're more than just a store; we're your partner in tech exploration. Shop with confidence and embark on a journey towards unparalleled performance and seamless connectivity. Your digital oasis awaits at SvTechShant - Where Technology Thrives!
       
        </p> 
        </div>
        <div className="mt-[29vh] w-70" >
      <img src={logo} alt="Product"  className="w-100 h-100 pr-20" />
      </div>
      </div>
      
     <div class="custom-shape-divider-bottom-1708533644">
       
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>








    </div>

<div className="container h-[70vh]  col-md-3 ">
<LandCard/>
<LandCard/>
<LandCard/>

</div>
</>
  )
}
