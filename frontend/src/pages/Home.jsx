import React from 'react'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Cardsareng from '../components/Cardsareng'

function Home() {
  return (
    <section className='bg-main main'>
    <div className='min-h-screen bg-slate-400'>
      <Navbar />
    </div>
    <section className='bg-white rounded-xl h-auto'>
      <Cardsareng/>
    </section>
    <section className='FAQ justify-center items-center p-52'>
    <h1 className="text-h1 pb-12 ">FAQ's</h1>
      <Faq question="Is my data secure on SPIRO?" answer="Yes, Spiro uses advanced security measures to protect your data and ensure privacy."/>
      <Faq question="How do colleges get started with SPIRO?" answer="Colleges can sign up on our website and start uploading content and resources for students."/>
      <Faq question="How do I get support if I need help?" answer="You can contact our 24/7 support via live chat, email, or our help center."/>
      <Faq question="Can I track my progress on Spiro?" answer="Yes, students can track their progress with quizzes and assignments."/>
      <Faq question="Is Spiro mobile-friendly?" answer="Yes, Spiro is fully optimized for mobile devices, allowing easy access anytime, anywhere."/>
    </section>
    <section className='mx-20'>
      <Footer/>
    </section>
    </section>
  )
}

export default Home