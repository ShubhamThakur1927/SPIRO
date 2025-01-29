import React from 'react'
import Spirologo from '../Tests/Components/Spirologo'
import Dashboardadmin from '../Tests/Thrashbotlipit/Dashboardadmin'
import { useAuthstore } from '../Stores/authstores'


function Testubg() {
  const { test } = useAuthstore();

  const stest = async () => {
    try {
      const response = await test();
      console.log(response);
    } catch (error) {
      console.error('Error fetching video:', error);
  }
};

  return (
    <div className="p-6">
      {/* Spiro Logo */}
      <Dashboardadmin />
      <span onClick={stest}>
        click
      </span>
      </div>
  )
}


export default Testubg
