import heroImg from "../images/hero.jpg";

import React from 'react'

const FifthPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row">

      <div
        className="flex-1 h-[50vh] md:h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      ></div>

      <div className="flex-1 flex flex-col justify-center px-10 md:px-16  ">

        <p className="text-[#7fff00] tracking-[3px] mb-5 font-bebas tracking-wide">
          ATHLETE STORIES
        </p>

        <h1 className="text-[40px] md:text-[50px] font-bold leading-tight font-bebas tracking-wide">
          GREATNESS ISN'T GIVEN.
          <br />
          <span className="text-[#7fff00]">
            IT'S EARNED
          </span>
          <br />
          EVERY SINGLE DAY.
        </h1>

        <p className="mt-8 text-gray-400 tracking-[2px] font-bebas tracking-wide">
          3x MVP — NIKE SINCE 2023
        </p>

      </div>
    </div>
  )
}

export default FifthPage
