import React, { useEffect } from 'react'
import './preLoader.css'
import { PreLoaderAnim } from '../animations/PreLoaderAnim';
const PreLoader = ({setLoading}) => {
    useEffect(()=>{
        PreLoaderAnim(setLoading);
    },[]);
  return (
    <div className="preloader h-lvh width-[100%] bg-black text-white flex flex-col justify-center items-center z-55">
        <div className="text-content flex items-center justify-space-between lg:text-[10rem] text-[5rem] font-bold  flex flex-col">
            <h1 className='logo italic '>NIKE</h1>
            <span className="loader"></span>
        </div>
    </div>
  )
}

export default PreLoader
