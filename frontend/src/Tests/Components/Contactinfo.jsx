import React from 'react'

function Contactinfo() {
  return (
    <div className="p-6 bg-main">
      <h1 className="text-3xl font-bold text-blue-600 py-5">SPIRO</h1>
      <div className='py-16'>
      <p className="mt-4 text-lg font-semibold ">Have questions?</p>
      <p className="text-lg text-blue-600 underline">Let's make learning seamless together!</p>
      <p className="text-lg text-blue-600 underline">Reach out to SPIRO today!</p>
      
      </div>
      <div className="mt-6 py-10">
        <p className="flex items-center space-x-2">📍 MUMBAI</p>
        <p className="flex items-center space-x-2">✉️ spiroedu9@gmail.com</p>
        <p className="flex items-center space-x-2">📞 +91 8452976481</p>
      </div>
      <div className="mt-6 space-y-2 py-2">
        <p>@spiroedu (Facebook, Instagram, LinkedIn, Twitter)</p>
      </div>
    </div>
  )
}

export default Contactinfo
