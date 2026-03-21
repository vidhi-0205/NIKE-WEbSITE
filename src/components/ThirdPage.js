import React, { useEffect, useState } from 'react'
import image1 from '../images/imagex1.avif'
import image2 from '../images/imagex2.avif'
import image3 from '../images/imagex3.avif'

import './Thirdpage.css'

const ThirdPage = () => {

  return (
    <div className='third-page relative min-h-screen flex items-center px-16 pb-30 text-white flex-col bg-gradient-to-b from-black from-50% via-[#7fff0040] via-70% to-black to-100%'>
        
        <div className="flex justify-between w-full items-start mb-16">
          <div className="collection-text m-3">
            <p className='px-2 text-[#7fff00] font-light text-[2rem] font-bebas tracking-wide'>THE COLLECTION</p>
            <h1 className='px-2 font-bebas tracking-wide text-[5rem]' style={{ textShadow: "0 0 10px rgba(127, 255, 0, 0.4)" }}>BUILT TO WIN</h1>
          </div>
          <div className="m-3">
            <button className='px-2 text-[#BFC6C4] tracking-wide text-[1rem]'>VIEW ALL↗</button>
          </div>
        </div>

        <div className="flex gap-10 mb-30 production-card">
          
            <div
            
              className='relative border border-gray-700 p-10 w-[350px] bg-[#1E201E]'
              style={{ 
                WebkitBoxReflect: "below 2px linear-gradient(transparent, rgba(0,0,0,0.1))" 
              }}
            >
              {/* Image Container with Drop Shadow */}
              <div className="cursor-pointer flex justify-center items-center ">
                <img 
                  src={image1} 
                  alt="loading"
                  className='h-[250px] w-[110%] max-w-none object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#7fff0080]' 
                />
              </div>
              
              <div className='mt-6'>
                <p className="text-gray-400 text-sm uppercase tracking-tighter">PERFORMANCE RUNNING</p>
                <h2 className="font-bold text-2xl uppercase italic tracking-tighter">VOLT PHANTOM</h2>
                <p className='text-[#7fff00] font-bold text-xl' >₹4,699</p>
              </div>
            </div>
            <div
            
              className='relative border border-gray-700 p-10 w-[350px] bg-[#1E201E]'
              style={{ 
                WebkitBoxReflect: "below 2px linear-gradient(transparent, rgba(0,0,0,0.1))" 
              }}
            >
              {/* Image Container with Drop Shadow */}
              <div className="cursor-pointer flex justify-center items-center ">
                <img 
                  src={image2} 
                  alt="loading"
                  className='h-[250px] w-[110%] max-w-none object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#7fff0080]' 
                />
              </div>
              
              <div className='mt-6'>
                <p className="text-gray-400 text-sm uppercase tracking-tighter">PERFORMANCE RUNNING</p>
                <h2 className="font-bold text-2xl uppercase italic tracking-tighter">VOLT PHANTOM-2</h2>
                <p className='text-[#7fff00] font-bold text-xl' >₹6,000</p>
              </div>
            </div>
             <div
            
              className='relative border border-gray-700 p-10 w-[350px] bg-[#1E201E]'
              style={{ 
                WebkitBoxReflect: "below 2px linear-gradient(transparent, rgba(0,0,0,0.1))" 
              }}
            >
              {/* Image Container with Drop Shadow */}
              <div className="cursor-pointer flex justify-center items-center ">
                <img 
                  src={image3} 
                  alt="loading"
                  className='h-[250px] w-[110%] max-w-none object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#7fff0080]' 
                />
              </div>
              
              <div className='mt-6'>
                <p className="text-gray-400 text-sm uppercase tracking-tighter">PERFORMANCE RUNNING</p>
                <h2 className="font-bold text-2xl uppercase italic tracking-tighter">VOLT PHANTOM-2</h2>
                <p className='text-[#7fff00] font-bold text-xl' >₹6,000</p>
              </div>
            </div>
          
        </div>
    </div>
  )
}

export default ThirdPage