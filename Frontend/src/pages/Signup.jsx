import React from 'react'

function Signup() {
  return (
    <div className="w-full h-screen flex items-start font-rethink-sans">
    <div className="relative w-1/2 h-full flex flex-col bg-[#EAEAEA] bg-cover bg-center justify-between bg-[url('https://images.unsplash.com/photo-1608600712992-03e5325d94c8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className='bg-slate-400 bg-opacity-35 w-full h-screen '>
        <div className='relative top-60 left-14'>
        <h1 className='text-white text-4xl'>Your future begins here</h1>
        <p className='text-white font-normal mt-3'><span className='font-bold'>Sign up </span>to unlock endless possibilities!</p>
        <button className='w-auto py-4 px-10 border-2 border-white  bg-transparent  text-white font-extrabold rounded-xl my-10 hover:bg-white hover:text-black'>Sign up</button>
        
        </div>

      </div>
    </div>
    <div className="bg-[#020817] relative w-1/2 h-full flex flex-col p-10 text-white text-center justify-between">
      <h1 className="text-2xl underline underline-offset-4 text-center py-10 marko-one-regular">SPIRO</h1>
      <div className="w-fit flex flex-col mx-24 border-2 border-[#5c606b] rounded-xl">
        <div className='py-8 px-10'>
        <div className='w-full flex flex-col mb-10'>
        {/* Login */}
        <h3 className='text-2xl font-semibold mb-4 '>Sign up</h3>
        {/* Subtitle */}
        <p className='text-lg mb-2'>New to Spiro! Please Enter you details.</p>
        </div>
        <div className='w-full flex flex-col'>
          <form>
            <input type="email"
            placeholder='Enter your email'
            className='w-full py-4 my-2 text-white border-b  border-white font-extrabold bg-transparent outline-none focus:outline-none' />

            <input type="password"
            placeholder='Enter your password'
            className='w-full py-4 my-2 text-white border-b  border-white font-extrabold bg-transparent outline-none focus:outline-none' />
            
            <input type="password"
            placeholder='Re-enter Confirm Your Password'
            className='w-full py-4 my-2 text-white border-b  border-white font-extrabold bg-transparent outline-none focus:outline-none' />
          </form>
          {/*<div className='w-full flex items-center justify-between'>
            <div className='w-full flex'>
              <input type="checkbox" className='w-4 h-4 mr-2 bg-transparent' />
              <p className='text-sm'>Remember Me</p>
            </div>
            <p className="text-sm underline font-medium underline-offset-2 cursor-pointer whitespace-nowrap">Forget password?</p>
          </div>*/}

          <button className='w-full py-4 border-2 border-[#5c606b]  bg-transparent  text-white font-extrabold rounded-xl my-10 hover:bg-white hover:text-black'>Send OTP</button>
          <div className='w-full items-center justify-center'>
          <p className='text-sm'>Already have an account? <span className='underline font-extrabold underline-offset-2 cursor-pointer'>Login</span></p>
        </div>
        </div>
        </div>
        </div>

        {/* Don't Have Account */}
    </div>
  </div>
  )
}

export default Signup