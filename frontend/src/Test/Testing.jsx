import React from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Smallcard from '../components/Smallcard'


function Testing() {
  return (
    <section className='my-10'>
    <Footer/>
    <Smallcard tap="Unbiased title" lap="Subtitle"/>
    </section>
  )
}

export default Testing