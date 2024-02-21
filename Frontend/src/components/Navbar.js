import React from 'react'

export default function Navbar() {
  return (
    <div>
     <nav class="px-4 py-4 text-xl bg-sky-950 w-100 ">
    <ul class="flex justify-between align-middle ">
        <li class="mx-2 cursor-pointer text-slate-300 hover:text-white transition-all">Home</li>
        <li class="mx-2 cursor-pointer text-slate-300 hover:text-white transition-all">About</li>
        <li class="mx-2 cursor-pointer text-slate-300 hover:text-white transition-all">Contact</li>
        <li class="mx-2 cursor-pointer text-slate-300 hover:text-white transition-all"><button>Become a Seller</button></li>
    </ul>
  </nav>
    </div>
  )
}

{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="c:\Users\gadre\Hack24\Frontend\public\index.jpg" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}