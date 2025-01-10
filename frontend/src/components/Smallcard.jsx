import React from 'react'

function Smallcard(props) {
  return (
    <div>
        <div className="card bg-main h-[266px] w-[388px] rounded-xl ">
        <div className="card-content relative top-1/2 p-6 ">
        <h3 className="title text-h3 font-semibold">{props.tap}</h3>
        <p className="subtitle text-p">{props.lap}</p>
      </div>
    </div>
    </div>
  )
}

export default Smallcard
