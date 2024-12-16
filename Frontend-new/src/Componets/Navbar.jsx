import React from 'react'
import { Menu } from 'lucide-react'
import Search from './Search'

function Navbar() {
  return (
    <div className='flex justify-between items-center align-middle w-full h-auto'>
        <div className='Logo'><span className='font-semibold text-2xl text-[#0056D2]'>SPIRO</span></div>
        <div className="search hidden md:grid"><Search/></div>
        <div className="list font-semibold hidden md:flex">
            <ul className='flex gap-10 items-center align-middle'> 
                <li className='hover:text-[#0056D2]'>Courses</li>
                <li  className='hover:text-[#0056D2]'>About</li>
                <li className='hover:text-[#0056D2]'>Contact us</li>
                <li><button className='action-btn bg-[#0056D2] text-white py-2 px-6 rounded-full'>Login</button></li>
            </ul>
        </div>
        <div className="toggle-btn md:hidden">
        <Menu color="#0056D2" size={35} />
        </div>
    </div>
  )
}

export default Navbar