import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar({ className, textColor = 'text-white' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 font-semibold ${isScrolled ? 'text-black' : textColor} ${className}`}> 
      <div className={`w-full flex md:justify-around justify-between items-center px-5 pt-6 md:px-10 lg:px-16`}>
        {/* Logo */}
        <div className='text-h1 font-semibold leading-h1 text-primary'>
          <Link to='/' className='flex gap-2 items-center'> <img src={logo} alt="Logo" /> SPIRO</Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-small'>
          <Link to='*'><li className='hover:text-primary transition'>Docs</li></Link>
          <Link to='/about-us'><li className='hover:text-primary transition'>About</li></Link>
          <Link to='*'><li className='hover:text-primary transition'>Contact Us</li></Link>
        </ul>

        {/* Desktop Buttons */}
        <div className='hidden md:flex gap-7'>
          <Link to='/signup'><span className='text-small'>Signup</span></Link>
          <Link to='/login'>
            <span className='bg-primary py-3 text-small px-8 text-center rounded-xl font-semibold text-white hover:bg-opacity-80 transition'>Login</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden text-black bg-white shadow-lg rounded-b-lg p-4 absolute top-16 w-full'>
          <ul className='flex flex-col items-center space-y-4 text-small'>
            <Link to='*' onClick={() => setIsMenuOpen(false)}><li className='hover:text-primary transition'>Docs</li></Link>
            <Link to='/about-us' onClick={() => setIsMenuOpen(false)}><li className='hover:text-primary transition'>About</li></Link>
            <Link to='*' onClick={() => setIsMenuOpen(false)}><li className='hover:text-primary transition'>Contact Us</li></Link>
          </ul>
          <div className='mt-4 flex flex-col items-center space-y-8'>
            <Link to='/signup' onClick={() => setIsMenuOpen(false)}><span className='text-small'>Signup</span></Link>
            <Link to='/login' onClick={() => setIsMenuOpen(false)}>
              <span className='bg-primary py-3 text-small px-8 text-center rounded-xl font-semibold text-white hover:bg-opacity-80 transition'>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;