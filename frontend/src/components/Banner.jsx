import React,{useEffect} from 'react'
import '../pages/styles/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Banner(props) {
  useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='mx-16 text-white' data-aos="fade-down">
      <h1 className='text-h1 font-semibold relative top-48 left-12 z-50 w-2/5 '>{props.Title}</h1>
      {props.Subtitle}
    <div className='bg-primary h-auto w-auto rounded-2xl my-10 '>
        <div className='banner h-[272px] w-auto opacity-20 '>
        </div>
    </div>
    </div>
  )
}

export default Banner