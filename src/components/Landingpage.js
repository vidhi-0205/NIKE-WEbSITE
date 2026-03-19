import React from 'react'
import NavBar from './NavBar'
import backgroundImg from '../images/man_running.jpg'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import Sixthpage from './Sixthpage'

const Landingpage = () => {
  return (
    <div className='bg-black min-h-screen selection-text-[#7fff00] '>
      <NavBar />
<div
        className="relative min-h-screen flex items-center justify-end px-16 text-white top"
        style={{
           background: `url(${backgroundImg}) center / cover no-repeat`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>


        <div className="relative text-right">
          <p className='px-2 text-[#7fff00] font-light text-[1rem]'>S26 COLLECTION-REDEFINING SPEED</p>
          <h1 className="text-[10rem] font-extrabold leading-none mb-2 font-bebas" style={{ textShadow: "0 0 4px #7fff00" }} >
            <div className='tracking-wider'>JUST</div><span className='text-[10rem] mx-4 font-light'>DO</span><span className='text-[#7fff00] tracking-wider '>IT</span>
          </h1>
          <div className='flex gap-4 '>
            <button className='bg-[#7fff00] px-6 py-3 m-1 text-black font-bold rounded-sm h-[3rem] hover:shadow-lg hover:shadow-[#7fff0080] active:shadow active:shadow-white transition-all duration-200'>EXPLORE COLLECTION</button>
            <button className='font-bold border px-8  mt-1 h-[3rem] hover:text-black hover:bg-white transition-transform duration-300 active:shadow active:shadow-white transition-all duration-200'>WATCH FILM</button>
          </div>
        </div>
      </div>
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Sixthpage />
    </div>

  )
}

export default Landingpage
