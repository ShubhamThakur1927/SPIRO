import React, { useEffect } from 'react'
import Teststomonial from './Teststomonial'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Cardsareng() {
  useEffect(() => {
      AOS.init();
    }, [])
  
  return (
    <>
    <h1 className='text-h1 font-semibold leading-h1 my-20'  data-aos="fade-up">Success Stories from <span className='text-primary'>Our Community</span></h1>
    <div className="grid grid-flow-col gap-5 justify-center w-full h-auto">
      <div className="flex flex-wrap flex-col items-end justify-center gap-5 " data-aos="fade-right">
        <Teststomonial/>
        <Teststomonial/>
      </div>
      <div className="w-full grid grid-flow-row justify-center gap-5"  data-aos="fade-up">
        <Teststomonial/>
        <Teststomonial/>
        <Teststomonial/>
      </div>
      <div className="flex flex-wrap flex-col justify-center gap-5 "  data-aos="fade-left">
      <Teststomonial/>
      <Teststomonial/>
      </div>
    </div>
    </>
  )
}

export default Cardsareng
