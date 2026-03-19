import React from 'react'

const ThirdPage = () => {
  return (
    <div className='relative min-h-screen flex items-center px-16 text-white flex-col'>
        <div className="flex justify-between w-full items-start">
        <div className=" m-3">
        <p className='px-2 text-[#7fff00] font-light text-[2rem] font-bebas tracking-wide'>THE COLLECTION</p>
        <h1 className='px-2 font-bebas tracking-wide text-[5rem] '>BUILT TO WIN</h1>
        </div>
        <div className=" m-3">
            <button className='px-2 text-[#BFC6C4] tracking-wide  text-[1rem] '>VIEW ALL↗</button>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-12 mt-16">
          <div className="card1  bg-[#222831] flex items-center justify-center flex-col">
            <img src="" alt="nfjn" className='h-[4rem] w-[4rem]' />
            <p>Performance running</p>
          </div>
          <div className="card2  bg-[#222831] flex items-center justify-center flex-col">
            <img src="" alt="nfjn" className='h-[4rem] w-[4rem]' />
            <p>Performance running</p>
          </div>
          <div className="card3  bg-[#222831] flex-justify-center flex-col">
            <img src="" alt="nfjn" className='h-[4rem] w-[4rem]' />
            <p>Performance running</p>
          </div>
        </div>
    </div>
  )
}

export default ThirdPage
