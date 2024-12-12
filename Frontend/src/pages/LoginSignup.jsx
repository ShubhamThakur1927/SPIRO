import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function LoginSignup() {
 const [name, setName] = useState("");
  return (
    <div className="w-full h-screen flex items-start font-rethink-sans">
      <div className="relative w-1/2 h-full flex flex-col bg-[#EAEAEA]">
      </div>
      <div className="bg-[#020817] relative w-1/2 h-full flex flex-col p-10 text-white text-center justify-between">
        <h1 className="text-xl text-center py-10">[Brand]</h1>
        <div className="w-full flex flex-col mx-5">
          <div className='w-full flex flex-col mb-10'>
          {/* Login */}
          <h3 className='text-2xl font-semibold mb-4 '>Login</h3>
          {/* Subtitle */}
          <p className='text-lg mb-2'>Welcome Back! Please Enter you details.</p>
          </div>
          <div className='w-full flex flex-col'>
            <form>
              <input type="email"
              placeholder='Enter your email'
              className='w-full py-4 my-2 text-white border-b  border-white font-extrabold bg-transparent outline-none focus:outline-none' />

              <input type="password"
              placeholder='Enter your password'
              className='w-full py-4 my-2 text-white border-b  border-white font-extrabold bg-transparent outline-none focus:outline-none' />
            </form>
          </div>

          </div>

          {/* Don't Have Account */}
          <div className='w-full items-center justify-center'>
            <p className='text-sm'>Don't have an account? <span className='underline font-extrabold underline-offset-2 cursor-pointer'>Sign Up</span></p>
          </div>
      </div>
    </div>
  );
}

export default LoginSignup;
