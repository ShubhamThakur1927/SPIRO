import React from 'react'

function Blankcard(props) {
  return (
    <div className='w-96 py-4 px-8 h-auto bg-main rounded-xl text-center'>
      <h4>{props.text}</h4>
    </div>
  )
}

export default Blankcard
