import React,{useState} from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Dropdown(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const navi= useNavigate();

  const subtitle = Array.isArray(props.subtitle) ? props.subtitle.map((item, index) => (
    <li  className='text-h4 font-normal leading-h4' key={index}>
      {item}
    </li>
  )) : null;

  return (
    <div>
      <button 
        onClick={handleClick} 
        className={`flex items-center gap-2 ${isClicked ? 'text-primary' : ''}`}
      >
        <span className='pt-1'>{props.icon}</span>
        {props.title}
        <div className='pt-2'>
        {!isClicked ? <ChevronDown size={28} /> : <ChevronUp size={28} />}
        </div>
        
      </button>
      {isClicked && subtitle && (
        <div className="dropdown-content my-2">
          <ul className='mx-10 grid gap-2'>
            {subtitle}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;