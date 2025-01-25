import React from 'react'
import Chemistrycard from '../Tests/Components/Chemistrycard'
import Circulargraphcard from '../Tests/Components/Circulargraphcard'
import Cardoftheday from '../Tests/Components/Cardoftheday'
import Linecardgraph from '../Tests/Components/Linecardgraph'
import Infocard from '../Tests/Components/Infocardleft'
import Infocardleft from '../Tests/Components/Infocardleft'
import Infocardright from '../Tests/Components/Infocardright'

function Testubg() {
  return (
    <div className="p-6  flex    ">
      <Infocardleft
        title="Innovative Learning"
        description="Provide students with cutting-edge tools and resources to enhance their learning experience."
        backgroundColor="#e0f2fe" // Light blue background
        width="400px"
        height="150px"
      />
      <Infocardright
        title="Universal Accessibility"
        description="Showcase your commitment to making education accessible to students worldwide, overcoming physical and geographical barriers."
        width="400px"
        height="150px"
      />
    </div>
  )
}

export default Testubg
