import React from 'react'


function Headng_Podcast() {
  return (
    <div className='max-w-6xl mx-auto text-center px-10'>
      <div className="text-white flex flex-col items-center mt-20">
        <h1  className='text-3xl font-semibold max-w-2xl'>Podcasters, stop wasting time editing your own podcasts.</h1>
        <h2 className='text-3xl font-semibold max-w-2xl mt-10'>Invest in an overseas editor.</h2>
        <p className='mt-8 max-w-3xl text-lg'>
          Investing in a Clipt editor can unlock 70% better profit margins –
          forever. We are a staffing agency for finding and embedding top
          overseas video editors on your team.
        </p>
        <div className="background w-full max-w-xs  p-[6px]  rounded-lg mt-7 hover:scale-105 transition-all duration-500">
          <button className="px-5 w-full rounded-lg text-3xl uppercase bg-black bg-opacity-90 py-4">
            Start Hiring
          </button>
        </div>
      </div>
    </div>
  )
}

export default Headng_Podcast