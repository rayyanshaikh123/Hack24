import React from 'react'

export default function Navbar() {
  return (
    <div className='container'>
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
