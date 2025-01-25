import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const subtitle = Array.isArray(props.subtitle) ? props.subtitle.map((item, index) => (
    <li key={index}>
      <Link to="#">{item}</Link>
    </li>
  )) : null;

  return (
    <div>
      <button onClick={handleClick} className='flex items-center leading-h3 text-h3'>
        {props.title}
        {!isClicked ? <ChevronDown size={35} /> : <ChevronUp size={35} />}
      </button>
      {isClicked && subtitle && (
        <div className="dropdown-content">
          <ul className='text-h4 leading-h4'>
            {subtitle}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;