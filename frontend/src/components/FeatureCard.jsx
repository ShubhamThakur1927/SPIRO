import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function FeatureCard(props) {
  useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div
  className="card hover:bg-primary text-white font-semibold h-auto w-auto rounded-xl"
  data-aos="fade-right"
>
  <div className="card-content my-32 xl:w-auto px-6">
    <h3 className="title text-h3 leading-h3 font-semibold">
      {props.title}
    </h3>
    <p className="subtitle text-xs sm:text-small">{props.subtitle}</p>
  </div>
</div>

  );
}

export default FeatureCard;
