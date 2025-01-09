import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='Uppersection flex gap-24 border-t-2 border-gray-500 pt-5'>
            <div className='Logo text-h1 font-semibold leading-h1' >SPIRO</div>
            <div className='flex gap-10 px-20'>
                <div className='Cources grid gap-3'>
                    <h4 className='text-h4 leading-h4 font-semibold'>Courses</h4>
                  
                    <ul>
                    <li>Artificial Inteligence</li>
                    <li>Data Science</li>
                    <li>Machine learning</li>
                    <li>Cloud Computing</li>
                    </ul> 
                    
                    </div>
                <div className='Company '>
                
                    <h4 className='text-h4 leading-h4 font-semibold'>Company</h4>
                  
                    <ul className='mt-3'>
                    <li>About us</li>
                    </ul> 
                </div>
                <div className='Resources'>
                <h4 className='text-h4 leading-h4 font-semibold'>Resources</h4>
                  <ul className='mt-3'>
                  <li>About us</li>
                  </ul>
                </div>
            </div>
        </div>
    <div className='mt-24'>
        <div>
            <ul className='flex gap-4 border-t-2 py-5 border-gray-500 text-tiny'>
                <li>© Spiro All Right reserved.</li>
                <li>Privacy Policy</li>
                <li>Termens of services</li>
            </ul>
        </div>
    </div>
    </footer>
  )
}

export default Footer
