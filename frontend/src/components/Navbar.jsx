import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  return (
    <section className={`fixed right-0 left-0 z-50 ${className} font-semibold`}>
      <div className={`min-w-screen flex justify-around align-center items-center p-5 ${className}`}>
        <div className='text-h1 font-semibold text-primary'>
          <Link to="/"> SPIRO </Link>
        </div>
        <div className='flex space-x-10 align-center text-small'>
          <ul className='flex space-x-8'>
            <Link to="*"><li>Docs</li></Link>
            <Link to="*"><li>About</li></Link>
            <Link to="*"><li>Contact Us</li></Link>
          </ul>
        </div>
        <div className='flex gap-7'>
          <Link to="/signup"><span className='text-small'>Signup</span></Link>
          <Link to="/login"> <span className='bg-primary py-3 text-small px-8 text-center rounded-xl font-semibold text-white'>Login</span></Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;