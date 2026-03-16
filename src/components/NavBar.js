import React from 'react'
import logo from '../images/nike_logo.jpg'

const NavBar = () => {
  return (
    <nav className='navbar bg-black flex flex-direction-row justify-around items-center fixed top-0 left-0 w-full z-50'>
        <img src={logo} alt="NIKE" className='h-[4rem]'/>
        <div className='text-[#BFC6C495] flex justify-between gap-8 p-4 pb-5 font-bold'>
            <div className='relative group cursor-pointer hover:text-white'>
                <a href="#">INNOVATION</a>
                  <span className="absolute left-0 -bottom-0 h-[2px] w-full bg-[#7FFF00] 
                   scale-x-0 origin-left 
                   transition-transform duration-500 
                   group-hover:scale-x-100 "></span>
                </div>
            <div className='relative group cursor-pointer hover:text-white'>
              <a href="#">COLLECTION</a>
                  <span className="absolute left-0 -bottom-0 h-[2px] w-full bg-[#7FFF00] 
                   scale-x-0 origin-left 
                   transition-transform duration-500 
                   group-hover:scale-x-100 "></span>
            </div>
            <div className='relative group cursor-pointer hover:text-white'>
            <a href="#">ATHELETES</a>
            <span className="absolute left-0 -bottom-0 h-[2px] w-full bg-[#7FFF00] 
                   scale-x-0 origin-left 
                   transition-transform duration-500 
                   group-hover:scale-x-100 "></span>
            </div>
            <div className='relative group cursor-pointer hover:text-white'>
              <a href="#">COMMUNITY</a>
              <span className="absolute left-0 -bottom-0 h-[2px] w-full bg-[#7FFF00] 
                   scale-x-0 origin-left 
                   transition-transform duration-500 
                   group-hover:scale-x-100 "></span></div>
            <div className='relative group cursor-pointer hover:text-white'>
              <a href="#">SHOP</a>
              <span className="absolute left-0 -bottom-0 h-[2px] w-full bg-[#7FFF00] 
                   scale-x-0 origin-left 
                   transition-transform duration-500 
                   group-hover:scale-x-100 "></span>
              </div>
        </div>
        <button className='text-[#7FFF00]'>SIGN UP</button>
    </nav>
  )
}

export default NavBar
