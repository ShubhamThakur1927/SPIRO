import React from 'react'
import Chemistrycard from '../Tests/Components/Chemistrycard'
import Circulargraphcard from '../Tests/Components/Circulargraphcard'

function Testubg() {
  return (
    <div className="p-6 space-y-4">
      

      {/* Example Usage */}
      <Circulargraphcard
        title="Eng. Mathematics - IV"
        percentage={75} // Pass percentage dynamically
        isActive={true} // Set active or inactive state
        width="400px"
        height="200px"
      />
      
    </div>
  )
}

export default Testubg
