import { PlusIcon } from "lucide-react";
import React from "react";

function Faq(props) {
  return (
    <div className=" w-full h-auto  border-b-2 mb-10">
      <div className=" question flex align-middle items-center justify-between mb-2">
        <span className="text-small font-semibold">{props.question}</span>
        <PlusIcon size={24} />
      </div>
      <div className="answer mt-5 mb-3"><span>{props.answer}</span></div>
    </div>
  );
}

export default Faq;