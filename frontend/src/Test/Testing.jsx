import React from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Smallcard from '../components/Smallcard'
import Faq from '../components/Faq'
import Banner from '../components/Banner'


function Testing() {
  return (
    <section className='my-10'>
      <h1 className="text-h1 ">FAQ's</h1>
    <Faq question="Is my data secure on SPIRO?" answer="Yes, Spiro uses advanced security measures to protect your data and ensure privacy."/>
    <Smallcard/>
    <Banner Title="Your Vision, Our Platform Let’s Connect Today!"/>
    </section>
  )
}

export default Testing