import React from 'react'

function Footer() {
  return (
    <footer className='pb-10 w-auto mt-28 px-20'>
        <div className='Uppersection min-w-screen flex gap-24  pt-5'>
            
            <div className='Logo text-h1 font-semibold leading-h1 text-primary' >SPIRO</div>
            <div className='flex lg:gap-24 px-20'>
                <div className='Cources grid gap-3'>
                    <h4 className='lg:text-h4 lg:leading-h4  font-semibold'>Courses</h4>
                    <ul className='flex flex-col gap-4 text-small text-body-2'>
                    <li>Artificial Inteligence</li>
                    <li>Data Science</li>
                    <li>Machine learning</li>
                    <li>Cloud Computing</li>
                    </ul> 
                    
                    </div>
                <div className='Company '>
                
                    <h4 className='text-h4 leading-h4 font-semibold'>Company</h4>
                  
                    <ul className='mt-3 text-small text-body-2'>
                    <li>About us</li>
                    </ul> 
                </div>
                <div className='Resources'>
                <h4 className='text-h4 leading-h4 font-semibold'>Resources</h4>
                  <ul className='mt-3 text-small text-body-2'>
                  <li>Blog</li>
                  </ul>
                </div>
            </div>
        </div>
    <div className='mt-24'>
        <div>
            <ul className='flex gap-4 py-5 text-tiny'>
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
