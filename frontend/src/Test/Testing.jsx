import React from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Smallcard from '../components/Smallcard'
import Faq from '../components/Faq'
import Banner from '../components/Banner'
import Stuctclm from './test-comp/Stuctclm'


function Testing() {
  return (
    <section className='w-1/4 bg-bagrd'>
     <div className='logo p-2'><h1 className=' text-semibold text-h1 text-primary'>Spiro</h1></div>
    <div>
    <Stuctclm/>
    </div>
    </section>
    
  )
}

export default Testing