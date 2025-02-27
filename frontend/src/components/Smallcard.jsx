import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Smallcard(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div
        className="card bg-main h-auto w-auto rounded-xl hover:bg-primary hover:text-white"
        data-aos="fade-down"
      >
        <div className="card-content h-auto text-start w-auto pl-6 pr-20 pt-44 pb-5"> 
          <h3 className="title xl:text-h3 text-small w-auto font-semibold">
            {props.title}
          </h3>
          <p className="subtitle text-xs sm:text-small leading-normal sm:leading-small">
            {props.subtitle}
          </p>
        </div>
        </div>
  );
}

export default Smallcard;
