import React,{useEffect} from 'react'
import '../pages/styles/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Banner(props) {
  useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='text-white md:block hidden lg:w-auto w-full ' data-aos="fade-down">
      <h1 className='lg:text-h1 lg:leading-h1 text-h2 leading-h2 font-semibold relative top-48 left-12 z-50 w-3/4 xl:w-full '>{props.Title}</h1>
      {props.Subtitle}
    <div className='bg-primary h-auto w-auto rounded-2xl my-10 '>
        <div className='banner h-[272px] w-auto opacity-20 '>
        </div>
    </div>
    </div>
  )
}

export default Banner