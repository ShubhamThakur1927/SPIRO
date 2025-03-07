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
      src="https://s3-alpha-sig.figma.com/img/8f3a/64b2/a3099a7614dd710b3754113b91bd556c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=adMq~Skt-oGjSmHpyIR-jsioA2Ql8-ay4awHPsSSlj9pex5IwCNYYydkQn57~O5CzUUnBrkMHv0U74A1EChRT09-9~puQj2BkKMbNaAl4t7mEM9MCrqAZUG~Ra5-BKNqoJNUqixn8YISCl4zuZF84bd-CONyYYsbCL9pEnvnXVNPz9dan3hyII~PTanR7lL~Gg1ZdANvmJ0n~YSBq8O7YCejQNHtJwZRzlHc4HvRkPpdF-XkOqnl0ZsB1O8598eT0OEUYBg06MD0ENgjaJ0MVyIIIsFhxpZkattvSSK9cQr4qDZc1i8XaqjUiV8QkfOkK8dupuFyndoQVhyK7stLxA__" 
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
    src="https://s3-alpha-sig.figma.com/img/c587/f13f/32a5de37d4a5fc2da78de2854395c284?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eGR5lH32wLWShDpPnrW0NesUwb4XlRIaqgo0hGO9d~RIVPZwIqtfdV282PVph4njcDXnj7efMq1lEvEkrVKaL3QFge1ntZOsEyzoaDM6xx~Dx4KF90WRAYGWcdqXFwr4Kz91hYcm2qrj5lSgaCmjLNVDaPqOLLkQazAybGXbs8UZij3xUrTsL4NzR~BNHaUX9zYJJmpCKiOacXs2PX1HtVk8MUABLSBAKJQbSZPtNe~udJkZChxPevKdluCE09omgw9L5VQg70qhUxQMza9Lb1~mfzR26k86GcSg8vWT7Ph1It62TMFtmTsAw10b~n4AQgorVTRShmSbESPe31~e~A__"
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
