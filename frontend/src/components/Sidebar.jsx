import React from 'react'
import Dropdown from './Dropdown'

function Sidebar(props) {
  return (
    <div className='max-h-full w-64 bg-white shadow-lg rounded-lg'>
        <Dropdown title={props.title} subtitle={props.subtitle} />
    </div>
  )
}

export default Sidebar