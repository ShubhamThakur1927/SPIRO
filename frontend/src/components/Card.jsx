import React from "react";


function Card (props) {
  return (
    <div className="card bg-main h-[424px] w-[388px] rounded-xl ">
      <div className="card-content relative top-3/4 p-6 ">
        <h3 className="title text-h3 font-semibold">{props.title}</h3>
        <p className="subtitle text-p">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Card
