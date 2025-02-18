import React, { useEffect } from "react";
import "../pages/styles/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Banner(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  return (
    <div
      className="text-white h-auto md:block hidden lg:w-auto w-full "
      data-aos="fade-down"
    >
      <h1 className="lg:text-h1 lg:leading-h1 text-h2 leading-h2 font-semibold relative top-48 left-12 
       w-3/4 xl:w-fit ">
        {props.Title}
      </h1>
      {props.Subtitle}
      <div className="bg-primary h-[272px] w-auto rounded-2xl my-10 ">
        <div className="banner h-[272px] w-auto opacity-20 "></div>
        <button onClick={()=>{navigate('/login')}} className="bg-transparent border-2 border-white relative bottom-24 left-14 hover:bg-white hover:text-black text-white font-semibold flex items-center py-3 px-8 rounded-lg">
          Get Started <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Banner;
