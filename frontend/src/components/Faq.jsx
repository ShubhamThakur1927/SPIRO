import { CrossIcon, PlusIcon, X } from "lucide-react";
import React, { useState } from "react";

function Faq(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="w-full h-auto border-b-2 mb-10">
      <div
        className="question flex align-middle items-center justify-between mb-2 cursor-pointer"
        onClick={toggle}
      >
        <span className="text-small font-semibold">{props.question}</span>
        {isClicked ? <X size={24} /> : <PlusIcon size={24} />}
      </div>
      {isClicked && (
        <div className="answer mt-5 mb-3">
          <span>{props.answer}</span>
        </div>
      )}
    </div>
  );
}

export default Faq;
