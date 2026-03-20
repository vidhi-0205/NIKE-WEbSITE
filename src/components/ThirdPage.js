import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Thirdpage.css'

const ThirdPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/collection").then((res) => {
      setProducts(res.data.slice(0, 3));
    }).catch((err) => console.log(err));
  }, []);

  return (
    <div className='relative min-h-screen flex items-center px-16 pb-30 text-white flex-col bg-gradient-to-b from-black from-50% via-[#45474B] via-70% to-black to-100%'>
        
        <div className="flex justify-between w-full items-start mb-16">
          <div className="m-3">
            <p className='px-2 text-[#7fff00] font-light text-[2rem] font-bebas tracking-wide'>THE COLLECTION</p>
            <h1 className='px-2 font-bebas tracking-wide text-[5rem]' style={{ textShadow: "0 0 10px rgba(127, 255, 0, 0.4)" }}>BUILT TO WIN</h1>
          </div>
          <div className="m-3">
            <button className='px-2 text-[#BFC6C4] tracking-wide text-[1rem]'>VIEW ALL↗</button>
          </div>
        </div>

        <div className="flex gap-10 mb-30">
          {products.map((item) => (
            <div
              key={item.id}
              className='relative border border-gray-700 p-10 w-[350px] bg-[#1E201E]'
              style={{ 
                WebkitBoxReflect: "below 2px linear-gradient(transparent, rgba(0,0,0,0.1))" 
              }}
            >
              {/* Image Container with Drop Shadow */}
              <div className="cursor-pointer flex justify-center items-center">
                <img 
                  src={`http://localhost:5000/${item.image_url}`} 
                  alt={item.name} 
                  className='h-[250px] w-[110%] max-w-none object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-110' 
                />
              </div>
              
              <div className='mt-6'>
                <p className="text-gray-400 text-sm uppercase tracking-tighter">{item.description}</p>
                <h2 className="font-bold text-2xl uppercase italic tracking-tighter">{item.name}</h2>
                <p className='text-[#7fff00] font-bold text-xl' >₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ThirdPage