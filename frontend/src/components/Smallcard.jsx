import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Smallcard(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-gray-100 rounded-xl p-6 w-full h-auto text-center hover:bg-primary hover:text-white transition-all duration-300"
      data-aos="fade-up"
    >
      {/* GIF/Icon */}
      {props.gif && (
        <div className="justify-center align-middle items-center">
          <img
            src={props.gif}
            alt="icon"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="font-semibold text-h2 leading-tight mb-1">
        {props.title}
      </h3>

      {/* Subtitle */}
      <p className="text-h4 text-gray-500">
        {props.subtitle}
      </p>
    </div>
  );
}

export default Smallcard;
