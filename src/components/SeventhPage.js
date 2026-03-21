import React from 'react'

const SeventhPage = () => {
  return (
    <div className='relative min-h-screen flex items-center px-16 text-white flex-col justify-between'>
        <div className="hidden lg:block h-10"></div>
        <div>
            <h1 className='text-[7rem] font-extrabold leading-none mb-2 font-bebas tracking-wider text-center' style={{ textShadow: "0 0 5px #7fff00" }}>
                READY TO<br />
                <span className='text-[#7fff00]'>MOVE?</span>
            </h1>
        </div>
<div className='w-full mt-20 border-t border-white/10 pt-10'>
    <footer className='flex justify-between items-center px-4 mb-0 pb-7'>

        <div className="flex-1">
            <p className="font-bebas text-3xl tracking-tighter italic">NIKE</p>
        </div>

        <div className='flex gap-8 flex-1 justify-center text-xs tracking-[0.2em] font-medium text-gray-400'>
            <p className="hover:text-[#7fff00] cursor-pointer transition-colors">INSTAGRAM</p>
            <p className="hover:text-[#7fff00] cursor-pointer transition-colors">TWITTER</p>
            <p className="hover:text-[#7fff00] cursor-pointer transition-colors">YOUTUBE</p>
        </div>

        <div className="flex-1 text-right text-[10px] text-gray-500 uppercase tracking-widest">
            <p>© 2026 NIKE. All rights reserved.</p>
        </div>
    </footer>
</div>
      
    </div>
  )
}

export default SeventhPage
