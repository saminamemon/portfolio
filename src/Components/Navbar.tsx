"use client"


import Link from "next/link";
import Image from "next/image";

import { useState } from "react";


export default function Navbar() {
   
  
  const [nav,setHeader]= useState(false)
  const handleHeader=()=>{
    setHeader(!nav)
  }
  return (
    
<>
<div className="bg-black">
<div className='flex flex-wrap justify-items-start st p-3 '>

<button
className='flex p-3 hover:bg-white rounded lg:hidden text-[#b49bff] ml-auto hover:text-[#b49bff] outline-none'
onClick={handleHeader}
>
<svg
className='w-6 h-6'
fill='none'
stroke='currentColor'
viewBox='0 0 24 24'
xmlns='http://www.w3.org/2000/svg'
>
<path
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeWidth={2}
  d='M4 6h16M4 12h16M4 18h16'
/>
</svg>
</button>

<div 
className={`${
nav ? '' : 'hidden'
}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
>
<div  className="">
   <Image src='/logo.jpg' alt=''  width={200} height={200} className="w-30 h-20 " />
   
   </div>
 
<div className='lg:inline-flex  lg:flex-row lg:ml-auto lg:w-auto justify-items-start w-full lg:items-center items-start  flex flex-col lg:h-auto'>

<Link  legacyBehavior href='/Home'>
  <a id= "link"  className='lg:inline-flex text-2xl lg:w-auto w-full text-2xl px-3 py-2 rounded font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold items-center justify-center hover:bg-white hover:text-[#b49bff]'>
    Home
  </a>
</Link>
&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;
<Link legacyBehavior href='/About'>
  <a  id= "link" className='lg:inline-flex lg:w-auto w-full text-2xl px-3 py-2 rounded font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold items-center justify-center  hover:bg-white hover:text-[#b49bff]'>
    About
  </a>
</Link>
&nbsp;   &nbsp;   &nbsp;   &nbsp; &nbsp;   &nbsp;   &nbsp;   &nbsp;
<Link legacyBehavior href='/Projects'>
  <a  id= "Projects" className='lg:inline-flex lg:w-auto w-full text-2xl px-3 py-2 rounded font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold items-center justify-center  hover:bg-white hover:text-[#b49bff]'>
    Projects
  </a>
</Link>
&nbsp;   &nbsp;   &nbsp;   &nbsp; &nbsp;   &nbsp;   &nbsp;   &nbsp;
<Link legacyBehavior href='/Contactme'>
  <a  id= "link" className='lg:inline-flex lg:w-auto p-4 m-4 w-full px-3 py-2 rounded text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold items-center justify-center  hover:bg-white hover:text-[#b49bff]'>
    Contact Me
  </a>
</Link>
&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;


&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;



&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;

             
</div>
</div>
</div>
</div>
</>
)}


