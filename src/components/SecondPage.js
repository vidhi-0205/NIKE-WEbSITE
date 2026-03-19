import React from 'react'
import sneaker from '../images/sneaker-hero.png'
const SecondPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-between px-16 text-white"> 
    <div className="relative text-left m-3">
        <p className='px-2 text-[#7fff00] font-light text-[2rem] font-bebas tracking-wide'>TECHNOLOGY</p>
        <h1 className='text-[6rem] font-extrabold leading-none mb-2 font-bebas tracking-wider '
        style={{ textShadow: "0 0 4px #7fff00" }} >
            <div>ENGINEERED</div>
            <div>FOR THE</div>
            <span>IMPOSSIBLE</span>
        </h1>
        <p className='tracking-wider text-[text-[1.5rem] text-[#BFC6C4]'>Our proprietary NIKE™ technology delivers <br />unprecedented energy return, propelling you <br />forward with every stride. Zero compromise</p>
        <div className='flex gap-5 font-bebas tracking-wider mt-5' >
        <span>
            <div className='text-[2rem] text-[#7fff00]'>42%</div>
            <div className='text-[1.5rem] text-[#BFC6C4]'>Energy Return</div>
        </span>
        <span>
            <div className='text-[2rem] text-[#7fff00]'>180G</div>
            <div className='text-[1.5rem] text-[#BFC6C4]'>ULTRALIGHT</div>
        </span>
        <span>
            <div className='text-[2rem] text-[#7fff00]'>∞</div>
            <div className='text-[1.5rem] text-[#BFC6C4]'>DURABILITY</div>
        </span>
        </div>
    </div>
    <img src={sneaker} alt="" className='h-[40%] w-[40%] drop-shadow-[0_0_200px_#7fff00] ' />
    </div>
  )
}

export default SecondPage
