import React from 'react'
import Spirologo from '../Tests/Components/Spirologo'


function Testubg() {
  return (
    <div className="p-6">
      {/* Spiro Logo */}
      <Spirologo logoSrc={logoImage} logoSize="50px" fontSize="24px" />
    </div>
  )
}

export default Testubg
