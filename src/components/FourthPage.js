import React from 'react'
import backgroundImg from '../images/sneaker-lifestyle.jpg'

const FourthPage = () => {
  return (
    <div
        className="relative min-h-screen flex items-center justify-start px-16 text-white top "
        style={{
           background: `url(${backgroundImg}) center / cover no-repeat`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-left">
            <p className='font-bebas tracking-wide text-[#7fff00] text-[1.5rem] font-thin'>Spotlight — Limited Edition</p>
            <h1 className="text-[5rem] font-extrabold leading-none mb-2 font-bebas tracking-wide " style={{ textShadow: "0 0 4px #7fff00" }}>
                <div className='m-3'>THE</div>
                <div className='text-[#7fff00] m-3 text-[6rem]'>PHANTOM</div>
                <div className='m-3 text-[6rem]'>COLLECTION</div>
            </h1>
            <p className='tracking-wider text-[1rem] text-[#BFC6C4] '>Born from midnight runs and city streets. The Phantom collection <br /> embodies the relentless spirit of those who refuse to stop.</p>
            <button className='bg-[#7fff00] px-10 py-3 m-6 text-black font-bold rounded-sm h-[3rem] hover:shadow-lg hover:shadow-[#7fff0080] active:shadow active:shadow-white transition-all duration-200'>SHOP THE DROP</button>
        </div>

      </div>

  )
}

export default FourthPage
