import AOS from "aos";
import { CrossIcon, PlusIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
function Faq(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {
    setIsClicked((prev) => !prev);
  };

 useEffect(() => {
      AOS.init();
    }, [])

  return (
    
    <div className=" align-middle justify-centre h-auto border-b-2 mb-10 space-x-1" data-aos ="fade-right">
      
      <div
        className="question flex align-middle items-center justify-between mb-2 cursor-pointer"
        onClick={toggle}
      >
        <span className="text-small font-semibold">{props.question}</span>
        {isClicked ? <X size={24} /> : <PlusIcon size={24} />}
      </div>
      {isClicked && (
        <div className="answer mt-5 mb-3 text-gray">
          <span>{props.answer}</span>
        </div>
      )}
    </div>
  );
}

export default Faq;
