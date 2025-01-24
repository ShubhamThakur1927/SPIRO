import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import {Link} from 'react-router-dom'
function Dropdown(props) {
  const [isClicked, SetisClicked] = React.useState(false);
  const handleClick = () => {
    SetisClicked(!isClicked);
  }
  const subtitle = props.subtitle.map((item, index) => {
    return (
      <ul>
        <li key={index} className=''>
        <Link to="*">{item}</Link>
      </li>
      </ul>
      )
  });
  return (
    <div className=''>
      <button onClick={handleClick} className='flex items-center text-h3'>{props.title}
        {!isClicked? <ChevronUp size={35} />:<ChevronDown size={35} />}
      </button>
{!isClicked?
  <div className="dropdown-content">
        <a href="#">{subtitle}</a>
      </div>:null}
    </div>
  )
}

export default Dropdown