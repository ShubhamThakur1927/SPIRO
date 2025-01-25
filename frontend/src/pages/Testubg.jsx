import React from 'react'
import Chemistrycard from '../Tests/Components/Chemistrycard'
import Circulargraphcard from '../Tests/Components/Circulargraphcard'
import Cardoftheday from '../Tests/Components/Cardoftheday'

function Testubg() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

     

      {/* Example 2: Custom Dimensions */}
      <Cardoftheday
        title="Total no. of Students"
        value="1200"
        width="450px"
        height="200px"
      />
    </div>
  )
}

export default Testubg
