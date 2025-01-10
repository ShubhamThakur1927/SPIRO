import React from 'react'

function Teststomonial(props) {
  return (
    <div>
        <div className="card bg-card h-[332px] w-[379px] rounded-xl ">
        <div className="card-content relative   ">
            <h1 className='text-h9 font-mono text-rips '>"</h1>
        <h3 className="title text-h3 font-semibold">{props.title}</h3>
        <h5 className='text-h5 text-testo '>{props.headinfo}</h5>
        <p className="subtitle text-p ">{props.subtitle}</p>
      </div>
    </div>
    </div>
  )
}

export default Teststomonial
