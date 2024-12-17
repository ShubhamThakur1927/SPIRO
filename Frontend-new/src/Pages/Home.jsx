import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Componets/Navbar'
import Korean from '../assets/korean.png'
import { ArrowRight } from 'lucide-react';
import './Styles/Home.css'
function Home() {
  return (
    <>
    <section className='h-full w-auto  bg-[#F7F7F8] source-sans'>
    <div className='h-auto w-auto my-0 mx-auto p-8 text-center max-w-7xl bg-[#F7F7F8] source-sans'>
      <Navbar/>
      <section className='Hero md:flex mt-12 grids w-full'>
          <div className='md:w-1/2 w-full'>
          <div  className='text-start pt-16'>
                <h1 className='text-5xl font-semibold mb-8'>Learn Without Limits</h1>
                <p className='text-[#4B4B4B] pr-10 md:pr-28'>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                
                <div className='flex mt-8 gap-4'>
                <button className='action-btn bg-[#0056D2] hover:bg-[#3f74bf] text-white py-2 px-6 rounded-full'>Get Started</button>
                <button className='action-btn bg-transparent border-2 border-[#0056D2] text-[#0056D2] py-2 px-6 rounded-full flex w-auto'>Learn More <ArrowRight /></button>                
                </div>
                <h3 className='m-6 text-base'>Trusted Partners</h3>
                <div className='flex gap-4 m-6'>
                  [partners-images]
                </div>
          </div>
          </div>
          <div className='md:w-1/2 w-full my-12 hidden md:flex'>
            <img src={Korean} alt="girls" className='w-fit pt-7 pl-32 relative bottom-10' />
          </div>
      </section>
    </div>
    </section>
    <section className="h-lvh ">
    </section>
    </>
  )
}

export default Home