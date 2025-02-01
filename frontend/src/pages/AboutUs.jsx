import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div className='bg-main'>
        <Navbar/>

        <div className="p-5 py-14">
  <div className="text-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 bg-main">
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">Who are we?</div>
    <div className="text-gray-700 mt-2 text-lg sm:text-xl md:text-2xl">
      <span className="font-bold text-blue-600">SPIRO</span>, we believe that education should be accessible, 
      engaging, and empowering for every learner.
    </div>
  </div>

  <div className="flex flex-wrap justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 gap-6">
    <div className="relative w-full md:w-2/3 lg:w-1/2 aspect-square rounded-xl overflow-hidden shadow-lg">
      {/* Video */}
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video"
        allowFullScreen
      ></iframe>
   

        {/* Play Button */}
        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
          <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
        </div>

        {/* Icon on Top Right */}
        <div className="absolute top-3 right-3 bg-red-500 p-2 rounded-full shadow-md">
          <span className="text-white font-bold">T</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center bg-main p-6 ">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img 
          src="https://s3-alpha-sig.figma.com/img/8f3a/64b2/a3099a7614dd710b3754113b91bd556c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nlZoeivSfizq~Bme2BT-DSLUGqEIMXI1aI2bNmCDQPuKxMVbK2kigIP7rOiPm6nekK5Jdt6ho~BGqBDMfSvwATuxgVLo3yPd2b8mGBUpBdvFfzljLUmCGuOZ6E3LKlaDQFbFm8uGu8pJHDd8NbKDUsGUs~PPfN6faGlW7EbJqxyOSu~3~Y~2L~XuKgewMr2uBjizSt3EqrkybG-lsYy2SpcoBhkU5HXA5ZHsC-SMve91H0HOCoRzsdA7V4vr6Rf6EkisgOBZujI2zdLGOohb2b-0Cp~OelECo3~RXMHeZuCP1daAivG3q5gMOVmoHNie3hH3KcR-YNq8CjCAZmB2mw__" 
          alt="Educator speaking to students" 
          className="rounded-xl shadow-md"
        />
      </div>

      <div className="md:w-1/2 md:pl-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          "We believe that education is not just a stepping stone to success but a 
          <span className="text-blue-600"> lifelong journey.</span>"
        </h1>
        <p className="text-gray-600 mb-4">
          Our platform is designed to nurture creativity, critical thinking, and a passion for knowledge, creating a foundation for personal and academic excellence. By collaborating with educators, learners, and innovators,
        </p>
        <p className="text-gray-600">
          At SPIRO, our commitment is to make education more than a process—it's a movement that inspires change, empowers individuals, and shapes the future.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center bg-main p-6  space-y-8">
      {/* Vision Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Our Vision</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Create a world where learning knows no boundaries—where education transcends physical limitations and becomes universally accessible to every student, no matter where they are.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: 'Universal Accessibility',
            description: 'Showcase your commitment to making education accessible to students worldwide, overcoming physical and geographical barriers.'
          },
          {
            title: 'Personalized Learning',
            description: 'Highlight the use of cutting-edge tools and tailored content to help learners explore their passions and unlock their potential.'
          },
          {
            title: 'Collaborative Community',
            description: 'Emphasize fostering a global network of learners and educators who inspire and support one another.'
          },
          {
            title: 'Innovative Education',
            description: 'Promote the idea of education as a bridge to a brighter, inclusive future fueled by diverse perspectives and shared knowledge.'
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-300 p-6 rounded-xl shadow-md relative"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)' }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose SPIRO Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Why choose <span className="text-blue-600">SPIRO</span>?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted content, global accessibility, and lifelong resources, empowering learners to achieve their goals and thrive in a collaborative, ever-evolving world.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center bg-main p-6  space-y-8">
      {/* Vision Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Our Vision</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Create a world where learning knows no boundaries—where education transcends physical limitations and becomes universally accessible to every student, no matter where they are.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: 'Interactive Courses',
            description: 'Showcase your commitment to making education accessible to students worldwide, overcoming physical and geographical barriers.'
          },
          {
            title: 'Personalized Learning',
            description: 'Highlight the use of cutting-edge tools and tailored content to help learners explore their passions and unlock their potential.'
          },
          {
            title: '24/7 Access',
            description: 'Emphasize fostering a global network of learners and educators who inspire and support one another.'
          },
          {
            title: 'Global Research',
            description: 'Promote the idea of education as a bridge to a brighter, inclusive future fueled by diverse perspectives and shared knowledge.'
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 shadow-md relative rounded-2xl"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)' }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose SPIRO Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Why choose <span className="text-blue-600">SPIRO</span>?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted content, global accessibility, and lifelong resources, empowering learners to achieve their goals and thrive in a collaborative, ever-evolving world.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row  overflow-hidden w-full md:w-4/5 mx-auto p-6 md:p-10 items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/c587/f13f/32a5de37d4a5fc2da78de2854395c284?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BdGIxzHHk1UolBo4-~Qc7yIzI7AT453J7juXPwZqgdhgCYprJ-~eSbEDgXmlNtFzLTy34d5Sf~9STElT9mLVjJvJr7Rq0DVSf-VMwrfVKzkZDgA-Or1cE19coFQwzzJBvfzexFtaEvIgTn-fzl8uYxeQiIDJf2HFM5wUamcpJOsNNA0q8VTHVnrxnkymKyAHoeHV1RXw4Ec0Fkn2tB2EvvM1RDPsmOqgtWlPKH3XpWXltZd3DCLcRUaukgW1nPR7OpD0tvXcgoEazEPvFia1alQ5zYyz7mIrWYzl-lXCb~BKxq5z5aqyxHLZXM7E3OuRvr49IWzKo14bJiGVDZpZ7Q__"
            alt="Profile"
            className="w-full md:w-1/3 object-cover rounded-xl"
          />
          <div className="p-6 bg-main h-auto w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-xl font-semibold text-blue-600">Mr. Shubham Thakur</h2>
            <p className="text-sm text-blue-500">CEO, Founder</p>
            <p className="text-gray-700 mt-2">
              Shubham Thakur, the CEO of Spiro, is a dynamic leader passionate about transforming
              education through innovative platforms. His vision drives Spiro's mission to make
              learning engaging, efficient, and accessible.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
