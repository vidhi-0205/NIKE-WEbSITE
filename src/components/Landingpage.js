import React from 'react'
import NavBar from './NavBar'
import backgroundImg from '../images/man running.jpg'
import FifthPage from './FifthPage'

const Landingpage = () => {
  return (
    <div className='bg-black min-screen '>
      <NavBar />
      <div className=''>
        <img src={backgroundImg} alt="" className='opacity-50 h-[50%]'/>
        <aside className='text-black '>
          JUST DO IT
        </aside>
      </div>
      <FifthPage />
    </div>
  )
}

export default Landingpage
