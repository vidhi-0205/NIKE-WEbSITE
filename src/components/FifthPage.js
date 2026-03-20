import heroImg from "../images/hero.jpg";

import React from 'react'

const FifthPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-between text-white mt-40 ">
      <div>
        <img src={heroImg} alt="" className=" h-[55rem] w-[55rem] " />
         <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div>
        <p className="px-2 text-[#7fff00] font-light text-[2rem] font-bebas tracking-wide">ATHELETE STORIES</p>
        <h1 className="text-[5rem] font-extrabold leading-none mb-2 font-bebas tracking-wide " style={{ textShadow: "0 0 4px #7fff00" }}>
          <div>"GREATNESS ISN'T GIVEN.</div>
          <div className="text-[#7fff00]">IT'S EARNED</div>
          <div>EVERY SINGLE DAY."</div>
           </h1>
          <div className="flex items-center gap-2">
          <div className="mt-3 h-[1px] w-[50%] bg-[#BFC6C4]"></div>
          <div className="tracking-wider text-[1rem] text-[#BFC6C4]">3× MVP · NIKE Since 2023</div>
          <div></div>
          </div>
       
      </div>
    </div>
  )
}

export default FifthPage
