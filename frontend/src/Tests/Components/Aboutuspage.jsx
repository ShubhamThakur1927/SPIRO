import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FeaturesGrid from './FeaturesGrid'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PlayCircleIcon } from "lucide-react";
import spiro from "../../assets/spirotest.mp4";

function Aboutuspage() {

  const [textColor, setTextColor] = useState("text-black");
    const videoRef = React.useRef(null);
  
    const handlePlayButtonClick = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };
    
    useEffect(() => {
      AOS.init();
    }, []);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setTextColor("text-black");
        } else {
          setTextColor("text-black");
        }
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
  return (
    <div className='bg-main'>
      <Navbar className={`${textColor}`} textColor="text-black" />
      <div>
      <div className="bg-main space-y-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-6 py-24 md:p-32 text-center space-y-5">
          <h2 className="text-display leading-display font-bold text-primary">Who are we?</h2>
          <p className="text-h3 text-gray-600">
            <span className="font-bold text-primary">SPIRO</span>, we believe that education should be accessible,
            engaging, and empowering for every learner.
          </p>
        </div>

        {/* Embedded Video Section */}
        <div className="justify-items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 gap-6">
                  <div className="relative w-full h-auto md:w-3/4 rounded-xl overflow-hidden shadow-lg">
                    {/* Video */}
                    <video ref={videoRef} className="w-full h-full" autoPlay muted>
                      <source src={spiro} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
        
                    {/* Play Button */}
                    <div className="absolute top-3 left-3 p-2 rounded-full shadow-md cursor-pointer" onClick={handlePlayButtonClick}>
                      <PlayCircleIcon color="white" size={32} />
                    </div>
                  </div>
                </div>
        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center px-6 md:px-32 py-16">
          <div className="md:w-1/3">
            <h2 className="text-h2 font-bold text-primary">Our Mission</h2>
            <button className="mt-2 p-3 text-white bg-primary rounded-lg shadow-md hover:bg-blue-700">
              Explore →
            </button>
          </div>

          <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6 text-gray-700">
            <p className="text-h4">
              Our mission is to empower students worldwide by providing accessible,
              high-quality educational tools and resources designed to inspire growth,
              curiosity, and achievement.
            </p>
            
          </div>
      
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
  “We believe that education is not just a stepping stone to success but a 
  <span className="text-blue-600"> lifelong journey.</span>"
</h2>

        <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 max-w-5xl mx-auto">
          
  <div className="md:w-1/2">
  
    <img 
      src=" https://s3-alpha-sig.figma.com/img/8f3a/64b2/a3099a7614dd710b3754113b91bd556c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXNDi8ZDheKzdNAjwYh13Zk6u9ZxodK9bbWCi6vHePa3hkvM-8I~HVCvQuqoYn55mA~OQLo6gyvLZuQYJl6HPZWu5B5T1L7kMcpLQg4mWnF9YoNrSlKE1Yv7-zE4fRWcjkd~jEk-2-yzZj0X8JTsZeTEcBXKd~oToOtYLfJA69gVs7ao1rZPWpo1bgZkQfMe8gfDus7NV5xBUVZ5VUZU-8gAXi0kobgK05eTKWe9nJE34x5gC4oFBheEjDoen0FOP2HX2JWC3T4nX-kcwEwn2G5yC-44rWiO2xGtheAG-lknV64BkXU2~MJ-OBpvE~ayTb-CvWgJxf5NoOaajIeAYA__" 
      alt="Teacher and students" 
      className="rounded-lg shadow-md w-full"
    />
  </div>
  
  <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
    
    <p className="mt-4 text-gray-700">
      Our platform is designed to nurture creativity, critical thinking, and a passion for knowledge, 
      creating a foundation for personal and academic excellence. By collaborating with educators, learners, and innovators.
    </p>
    <p className="mt-2 text-gray-700">
      At SPIRO, our commitment is to make education more than a process—it’s a movement that inspires 
      change, empowers individuals, and shapes the future.
    </p>
  </div>
</div>

        <div className='text-center md:m-24 py-10'>
        <h1 className='text-primary text-h1 font-bold'>Our Vision</h1>
        <p className=' text-h4'>
        SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted content, global accessibility, and lifelong resources, empowering learners to achieve their goals and thrive in a collaborative, ever-evolving world.
        </p>
      </div>
      </div>
      <div className="flex justify-center items-center px-6 md:px-0 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
    {[
      { title: "Universal Accessibility", desc: "Showcase your commitment to making education accessible to students worldwide, overcoming physical and geographical barriers." },
      { title: "Personalized Learning", desc: "Highlight the use of cutting-edge tools and tailored content to help learners explore their passions and unlock their potential." },
      { title: "Collaborative Community", desc: "Emphasize fostering a global network of learners and educators who inspire and support one another." },
      { title: "Innovative Education", desc: "Promote the idea of education as a bridge to a brighter, inclusive future fueled by diverse perspectives and shared knowledge." }
    ].map((item, index) => (
      <div 
        key={index} 
        className="bg-gray-300 p-6 shadow-md text-center flex flex-col justify-center items-center w-full max-w-sm mx-auto" 
        style={{ clipPath: "polygon(8% 0%, 92% 0%, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0% 88%, 0% 12%)" }}
      >
        <h2 className="text-black font-bold text-lg">{item.title}</h2>
        <p className="mt-2 text-gray-700">{item.desc}</p>
      </div>
    ))}
  </div>
</div>



        <div className='text-center px-5 md:m-24 '>
          <h1 className='text-h1 font-semibold '>
            Why we choose <span className='text-primary '>SPIRO</span>?
          </h1>
          <p className='text-gray-600'>
          SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted content, global accessibility, and lifelong resources, empowering learners to achieve their goals and thrive in a collaborative, ever-evolving world.
          </p>
        </div>
        <div className='text-center px-10 md:m-24'>
          <h1 className='text-h1 font-semibold'>
            What we offer?
          </h1>
          <p>
          SPIRO provides an extensive range of educational content designed to cater to the diverse needs of students across multiple disciplines and stages of learning. Whether you're preparing for crucial exams, mastering new skills, or pursuing a passion, our platform offers everything you need to succeed
          </p>
        </div>
        <FeaturesGrid/>
        <div className="flex flex-col md:flex-row  p-6  w-full max-w-4xl mx-auto">
  <img
    src="   https://s3-alpha-sig.figma.com/img/c587/f13f/32a5de37d4a5fc2da78de2854395c284?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cjQ~pCehEIUOV3BRKO2ugyvZU~wHoJ7TYKdsGbI~sMqUR~4OsQz-eRnOoKHfXKlG~79IQLMDp3KN25pcTGT-isptzeTOB6DR5OMvqcEu5uMpBwx7lVkXEhbk5EXlgal9E~lp8nKg5IaEYhLPH4zu-dGXOreMkqFB0DFLSmEDu3IhLzYkRnuj3D0aiaIiEF5Nt578~I9asIB9MQpqMPFPzA75g5Diyt3CCml55ROa8X5EZu~~sXos3H85F39DLYeaAhtJchUh5ety3N-mvSZpJiIRTNnUIKTuy77mHrLmyO7PcRgs8mIKMaS4kUopXVy95wKx5WM9Wt3vLaWv1SQhZg__  "
    alt="Mr. Shubham Thakur"
    className="w-full md:w-1/2 h-auto rounded-lg object-cover"
  />
  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
    <h3 className="text-blue-600 font-semibold text-xl">Mr. Shubham Thakur</h3>
    <p className="text-blue-500 text-sm">CEO, Founder</p>
    <p className="text-gray-700 text-sm mt-2">
      Shubham Thakur, the CEO of Spiro, is a dynamic leader passionate
      about transforming education through innovative platforms. His vision
      drives Spiro's mission to make learning engaging, efficient, and
      accessible.
    </p>
  </div>
</div>

      </div>
      <Footer/>
    </div>
  )
}

export default Aboutuspage
