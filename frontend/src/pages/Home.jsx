import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Cardsareng from '../components/Cardsareng'
import './styles/styles.css'

function Home() {
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('glass-blur');
        setTextColor('text-black');
      } else {
        setNavbarBg('transparent');
        setTextColor('text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='bg-main main'>
      <Navbar className={`${navbarBg} ${textColor}`} />
      <div className='min-h-screen hero overflow-hidden '>
        <div className='bg-black min-h-lvh opacity-30'>
          
        </div>
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
export default Home;