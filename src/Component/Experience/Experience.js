import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
   <>
    <div className='Experience-wrapper' id='Experience'>
        <div className='outer-circle'>
            <div className='inner-circle'> 1 +</div>
            <span>Years</span>
            <span className='exp-child'>Experience</span>
        </div>
        <div className='outer-circle'>
            <div className='inner-circle'> 5 +</div>
            <span>Completed</span>
            <span className='exp-child'>Projects</span>
        </div>
        <div className='outer-circle'>
            <div className='inner-circle'> 2 +</div>
            <span>Companies</span>
            <span className='exp-child'>Work</span>
        </div>
    </div>
   </>
  )
}

export default Experience