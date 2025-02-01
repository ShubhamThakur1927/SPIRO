import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="bg-main">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-6 py-24 md:p-32 text-center space-y-5">
          <h2 className="text-display font-bold text-blue-600">Who are we?</h2>
          <p className="text-h3 text-gray-600">
            <span className="font-bold text-blue-600">SPIRO</span>, we believe that education should be accessible,
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
            <h2 className="text-h2 font-bold text-blue-600">Our Mission</h2>
            <button className="mt-2 p-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
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

        {/* Quote Section */}
        <div className="bg-main px-6 md:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            "We believe that education is not just a stepping stone to success but a
            <span className="text-blue-600 font-bold"> lifelong journey.</span>"
          </h2>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/8f3a/64b2/a3099a7614dd710b3754113b91bd556c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nlZoeivSfizq~Bme2BT-DSLUGqEIMXI1aI2bNmCDQPuKxMVbK2kigIP7rOiPm6nekK5Jdt6ho~BGqBDMfSvwATuxgVLo3yPd2b8mGBUpBdvFfzljLUmCGuOZ6E3LKlaDQFbFm8uGu8pJHDd8NbKDUsGUs~PPfN6faGlW7EbJqxyOSu~3~Y~2L~XuKgewMr2uBjizSt3EqrkybG-lsYy2SpcoBhkU5HXA5ZHsC-SMve91H0HOCoRzsdA7V4vr6Rf6EkisgOBZujI2zdLGOohb2b-0Cp~OelECo3~RXMHeZuCP1daAivG3q5gMOVmoHNie3hH3KcR-YNq8CjCAZmB2mw__"
              alt="Education discussion"
              className="rounded-xl shadow-md w-full md:w-1/2"
            />
            <div className="text-gray-700 text-base leading-relaxed md:w-1/2">
              <p>
                Our platform is designed to nurture creativity, critical thinking,
                and a passion for knowledge, creating a foundation for personal and
                academic excellence.
              </p>
              <p className="mt-4">
                By collaborating with educators, learners, and innovators, we aim to
                make education more than a process—it's a movement that inspires
                change, empowers individuals, and shapes the future.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Spiro Section */}
        <div className="p-6 md:p-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Why choose <span className="text-primary">SPIRO</span>?
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            SPIRO offers flexible, personalized, and technology-driven learning with expert-crafted
            content, global accessibility, and lifelong resources, empowering learners to achieve
            their goals and thrive in a collaborative, ever-evolving world.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex justify-center items-center px-6 md:px-0 py-10 bg-gray-100">
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

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row border rounded-2xl shadow-lg overflow-hidden w-full md:w-4/5 mx-auto p-6 md:p-10 items-center">
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

      <Footer />
    </div>
  )
}

export default AboutUs
