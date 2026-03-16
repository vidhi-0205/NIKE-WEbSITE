import React from 'react'
import NavBar from './NavBar'
import backgroundImg from '../images/man running.jpg'

const Landingpage = () => {
  return (
    <div className='bg-black '>
      <NavBar />
      <div className=''>
        <img src={backgroundImg} alt="" className='opacity-50 h-[50%]'/>
        <aside className='text-black '>
          JUST DO IT
        </aside>
      </div>
    </div>
  )
}

export default Landingpage
