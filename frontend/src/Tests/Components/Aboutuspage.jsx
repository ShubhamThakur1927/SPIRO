import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FeaturesGrid from './FeaturesGrid'

function Aboutuspage() {
  return (
    <div className='bg-main'>
      <Navbar/>
      <div>
      <div className="bg-main space-y-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-6 py-24 md:p-32 text-center space-y-5">
          <h2 className="text-display leading-display font-bold text-primary">Who are we?</h2>
          <p className="text-h3 text-gray-600">
            <span className="font-bold text-primary">SPIRO</span>, we believe that education should be accessible,
            engaging, and empowering for every learner.
          </p>
        </div>

        {/* Embedded Video Section */}
        <div className="w-full px-6 md:px-32 flex justify-center items-center">
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Embedded Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center px-6 md:px-32 py-16">
          <div className="md:w-1/3">
            <h2 className="text-h2 font-bold text-primary">Our Mission</h2>
            <button className="mt-2 p-3 text-white bg-primary rounded-lg shadow-md hover:bg-blue-700">
              Explore →
            </button>
          </div>

          <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6 text-gray-700">
            <p className="text-h4">
              Our mission is to empower students worldwide by providing accessible,
              high-quality educational tools and resources designed to inspire growth,
              curiosity, and achievement.
            </p>
            
          </div>
      
        </div>
        <div className='text-center md:m-24 py-10'>
        <h1 className='text-primary text-h1 font-bold'>Our Vision</h1>
        <p className=' text-h4'>
        SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted content, global accessibility, and lifelong resources, empowering learners to achieve their goals and thrive in a collaborative, ever-evolving world.
        </p>
      </div>
      </div>
      <div className="flex justify-center items-center px-6 md:px-0 py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: "Interactive Courses", desc: "Our expertly crafted courses feature a dynamic mix of multimedia content." },
              { title: "Personalized Learning", desc: "SPIRO leverages advanced AI-driven technology for customized learning." },
              { title: "24/7 Access", desc: "Learning is available whenever inspiration strikes." },
              { title: "Global Reach", desc: "Connect with learners and educators worldwide." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-blue-600 text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center px-5 md:m-24 '>
          <h1 className='text-h1 font-semibold '>
            Why we choose <span className='text-primary '>SPIRO</span>?
          </h1>
          <p className='text-gray-600'>
          SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted content, global accessibility, and lifelong resources, empowering learners to achieve their goals and thrive in a collaborative, ever-evolving world.
          </p>
        </div>
        <div className='text-center px-10 md:m-24'>
          <h1 className='text-h1 font-semibold'>
            What we offer?
          </h1>
          <p>
          SPIRO provides an extensive range of educational content designed to cater to the diverse needs of students across multiple disciplines and stages of learning. Whether you're preparing for crucial exams, mastering new skills, or pursuing a passion, our platform offers everything you need to succeed
          </p>
        </div>
        <FeaturesGrid/>
        <div className="flex flex-col md:flex-row  p-6  w-full max-w-4xl mx-auto">
  <img
    src="https://s3-alpha-sig.figma.com/img/c587/f13f/32a5de37d4a5fc2da78de2854395c284?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DvnObZQODr1ZaHPCTaKaqP7i-9s2yfE19DPuYFChNWe9FnjxOCcqowULaLe3q7HEVy3JvaUUVPyf3fWV5myD8rOCAYCVXua3nP-eD6gTD3IcLEAw8NQW0B0WkFEMUXZlQwQk6hiso0BMxPq1YLpMGLJzU86rsBkRIIDytTtoU~i5YBALZyErW~8p9k1Nb2TG1118Qio9Ytv9SfUpTQcYGNKzrhVcLrpmUYOqjZnVXSRfylvE2eEDOvaqjDEGINWNgbiTElChZS6IxH~1EgqQQKUx0y7hnHz0xfH8zB-sqkYgd2B7kbcdFytp1IgPsBr~45Qq~3LPQ2oCGzBAyxaZ~A__"
    alt="Mr. Shubham Thakur"
    className="w-full md:w-1/2 h-auto rounded-lg object-cover"
  />
  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
    <h3 className="text-blue-600 font-semibold text-xl">Mr. Shubham Thakur</h3>
    <p className="text-blue-500 text-sm">CEO, Founder</p>
    <p className="text-gray-700 text-sm mt-2">
      Shubham Thakur, the CEO of Spiro, is a dynamic leader passionate
      about transforming education through innovative platforms. His vision
      drives Spiro's mission to make learning engaging, efficient, and
      accessible.
    </p>
  </div>
</div>

      </div>
      <Footer/>
    </div>
  )
}

export default Aboutuspage
