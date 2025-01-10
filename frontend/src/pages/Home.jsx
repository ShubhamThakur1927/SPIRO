import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Cardsareng from "../components/Cardsareng";
import "./styles/styles.css";
import Card from "../components/Card";
import Smallcard from "../components/Smallcard";
import FeatureCard from "../components/FeatureCard";
import Banner from "../components/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("glass-blur");
        setTextColor("text-black");
      } else {
        setNavbarBg("transparent");
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <section className="bg-main body scroll-smooth">
      {/*Navbar & Hero-Section */}
      <Navbar className={`${navbarBg} ${textColor}`} />
      <div className="min-h-screen hero overflow-hidden ">
        <div className="bg-black min-h-lvh opacity-30">
        </div>
        
      </div>
      {/*MID-Section */}
      <section className="bg-white relative bottom-28 rounded-3xl h-auto py-20 flex flex-col items-center justify-center align-middle">
        
        {/*Feature-Section */}
        <h1 className="text-h1 font-semibold w-2/5 text-center leading-h1" data-aos="fade-up" >
          The Tech That Simplifies Your Financial World
        </h1>
        <div className="grid grid-flow-col gap-5 justify-center w-full h-auto my-20">
          <div className="flex flex-wrap flex-col items-end justify-center gap-5 ">
            <FeatureCard/>
            <Card />
          </div>
          <div className="w-full grid grid-flow-row justify-center gap-8">
            <Smallcard />
            <Smallcard />
            <Smallcard />
          </div>
          <div className="flex flex-wrap flex-col justify-center gap-5 ">
            <Card />
            <Card />
          </div>
        </div>

        {/*About-Section */}
          <h1 className="text-h1 leading-h1 font-semibold w-2/5 my-10 text-center"  data-aos="fade-up">The Tech That Simplifies Your Financial World</h1>
        <div className="grid grid-flow-row gap-12 ">
          <div className="w-[790px] h-[400px] bg-[#F4ECE0] rounded-3xl"  data-aos="fade-right">
          </div>
          <div className="flex gap-8">
          <div className="w-[379px] h-[400px] bg-[#F4ECE0] rounded-3xl"  data-aos="fade-down"></div>
          <div className="w-[379px] h-[400px] bg-[#F4ECE0] rounded-3xl"  data-aos="fade-"></div>
        </div>
        </div>

      {/*TESTIMONIALS*/}
        <Cardsareng />

      {/*FAQ's*/}
        <div className="FAQ justify-center items-center p-52 w-10/12">
          <h1 className="text-h1 pb-12 "  data-aos="fade-up">FAQ's</h1>
          <Faq 
            question="Is my data secure on SPIRO?"
            answer="Yes, Spiro uses advanced security measures to protect your data and ensure privacy."
          />
          <Faq
            question="How do colleges get started with SPIRO?"
            answer="Colleges can sign up on our website and start uploading content and resources for students."
          />
          <Faq
            question="How do I get support if I need help?"
            answer="You can contact our 24/7 support via live chat, email, or our help center."
          />
          <Faq
            question="Can I track my progress on Spiro?"
            answer="Yes, students can track their progress with quizzes and assignments."
          />
          <Faq
            question="Is Spiro mobile-friendly?"
            answer="Yes, Spiro is fully optimized for mobile devices, allowing easy access anytime, anywhere."
          />
        </div>
      </section>

      {/*Footer*/}
      <section className="mx-20">
      <Banner Title="Your Vision, Our Platform Let’s Connect Today!"/>
        <Footer />
      </section>
    </section>
  );
}
export default Home;
