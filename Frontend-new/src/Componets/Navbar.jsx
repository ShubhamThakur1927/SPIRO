import React from 'react'
import { Menu } from 'lucide-react'
import Search from './Search'
import { Link,Outlet } from 'react-router-dom'
import '../Pages/Styles/Home.css'

function Navbar() {
  return (
    <div className='flex justify-between items-center align-middle w-full h-auto source-sans'>
        <Link to="/"><div className='Logo'><span className='font-semibold text-2xl text-[#0056D2]'>SPIRO</span></div></Link>
        <div className="search hidden md:grid"><Search/></div>
        <div className="list font-semibold hidden md:flex">
            <ul className='flex gap-10 items-center align-middle'> 
                <Link to="*" ><li className='hover:text-[#0056D2]'>Courses</li></Link>
                <Link to="*" ><li  className='hover:text-[#0056D2]'>About</li></Link>
                <Link to="*" ><li className='hover:text-[#0056D2]'>Contact us</li></Link>
                <Link to="Login" ><li><button className='action-btn hover:bg-[#3f74bf] bg-[#0056D2] text-white py-2 px-6 rounded-full'>Login</button></li></Link>
            </ul>
        </div>
        <div className="toggle-btn md:hidden">
        <Menu color="#0056D2" size={35} />
        </div>
    </div>
  )
}

export default Navbar