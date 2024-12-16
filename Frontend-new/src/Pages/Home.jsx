import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Componets/Navbar'
import Korean from '../assets/korean.png'
function Home() {
  return (
    <div className='bg[#f7f7f8] h-screen'>
      <Navbar/>
      <section className='Hero md:flex mt-12 grids w-full'>
          <div className='md:w-1/2 w-full'>
          <div className='md:w-auto w-full my-12 flex md:hidden'>
            <img src={Korean} alt="girls" className='w-screen pl-32' />
          </div>
          <div  className='text-start pt-16'>
                <h1 className='text-5xl font-semibold mb-8'>Learn Without Limits</h1>
                <p className='text-lg'>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                </div>
          </div>
          <div className='md:w-1/2 w-full my-12 hidden md:flex'>
            <img src={Korean} alt="girls" className='w-screen pl-32' />
          </div>
      </section>
    </div>
  )
}

export default Home