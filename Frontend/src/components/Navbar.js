import React from 'react'
export default function Navbar() {
  return (
    
      <nav class="px-4 py-3 text-xl ">
    <ul class="flex justify-between align-middle ">
        <li class="mx-2 cursor-pointer font-semibold  transition-all">Home</li>
        <li class="mx-2 cursor-pointer font-semibold  transition-all">About</li>
        <li class="mx-2 cursor-pointer font-semibold  transition-all">Contact</li>
        <li class="mx-2 cursor-pointer font-semibold  transition-all"><button>Become a Seller</button></li>
    </ul>
  </nav>
    
  )
}
