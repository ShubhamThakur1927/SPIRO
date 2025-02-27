import React from 'react'
import Banner from '../../components/Banner'
import Search from '../../components/Search'
function Dashboard(props) {
  return (
    <div className='w-full px-10 h-screen'>
      <Search/>
      <div className='relative bottom-16'>
      <Banner Title = "Your Vision, Our Platform Let’s Connect Today!" />
      </div>
    </div>
  )
}

export default Dashboard