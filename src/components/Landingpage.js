import React from 'react'
import NavBar from './NavBar'
import backgroundImg from '../images/man running.jpg'

const Landingpage = () => {
  return (
    <div className='bg-black h-lvh'>
      <NavBar />
      <div>
        <img src={backgroundImg} alt="" className='opacity-50 h-[50%]'/>
        <aside className='text-white'>
          JUST DO IT
        </aside>
      </div>
    </div>
  )
}

export default Landingpage
