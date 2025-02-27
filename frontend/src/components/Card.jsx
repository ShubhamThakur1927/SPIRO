import AOS from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

function Card (props) {
  useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div
  className="card bg-main h-auto w-auto rounded-xl hover:bg-primary hover:text-white"
  data-aos="fade-right"
>
  <div className="card-content mt-64 w-auto mb-5 px-6 ">
    <h3 className="title mb-2 text-h4 xl:text-h3 leading-h4 xl:leading-h3 font-semibold">
      {props.title}
    </h3>
    <p className="subtitle text-tiny leading-tiny sm:text-small sm:leading-small">{props.subtitle}</p>
  </div>
</div>

  );
};

export default Card
