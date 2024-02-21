import React from 'react'
import Navbar from './Navbar'
import logo from '../undraw_code_thinking_re_gka2.svg';
export default function LandPage() {
  return (
    <div className=" bg-[url('https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center w-[100%] h-[100vh]">
      <Navbar />
      <div className="flex ">
        <div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquid voluptatibus </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nobis molestiae dicta ullam repudiandae consequuntur similique fugiat quas harum facere, iste nihil excepturi in iusto velit cumque totam doloremque? Eaque.</p>
        </div>
        <div >
      <img src={logo} alt="Product"  className="w-50 h-50" />
      </div>
      </div>
      
     <div class="custom-shape-divider-bottom-1708533644">
       
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  )
}
