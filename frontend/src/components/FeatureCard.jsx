import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function FeatureCard(props) {
  useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className="feature-card bg-primary h-[424px] w-[388px] rounded-xl" data-aos="fade-right">
      <div className="card-content relative top-3/4 p-6 ">
        <h3 className="title text-h3 font-semibold">{props.title}</h3>
        <p className="subtitle text-p">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
