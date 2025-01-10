import React from 'react'
import Card from './Card'
import Teststomonial from './Teststomonial'

function Cardsareng() {
  return (
    <div >
        <div className='text-center py-5'>
            <h1 className='text-h1 font-semibold'>Success Stories from <span className='text-primary'>Our Community</span></h1>
        </div>
        <div className='grid grid-flow-col grid-cols-3 w-auto'>
    <div className='grid py-20 '>
        <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
        <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
    </div>
      <div>
      <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
        <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
        <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
      </div>
      <div className='grid py-20'>
      <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
        <Teststomonial title="Hanna Dorwart" headinfo="Project Management" subtitle="This platform has transformed the way I learn. The courses are concise, clear, and extremely practical. I feel more confident applying these skills to real-world projects."/>
        </div>
      </div>
    </div>
  )
}

export default Cardsareng
