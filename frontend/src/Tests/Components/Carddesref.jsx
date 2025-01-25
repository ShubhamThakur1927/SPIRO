import React from 'react'

function Carddesref(props) {
  return (
    <div>
      <h2 className='text-h2'>DESCRIPTION</h2>
      <h3 className="title mb-2 text-small xl:text-small leading-h4 xl:leading-h3 font-semibold">
      {props.tips}
    </h3>
      <h2 className='text-h2'>REFERENCE</h2>
      <h3 className="title mb-2 text-h4 xl:text-small leading-h4 xl:leading-h3 font-semibold">
      {props.clips}
    </h3>
    </div>
  )
}

export default Carddesref
