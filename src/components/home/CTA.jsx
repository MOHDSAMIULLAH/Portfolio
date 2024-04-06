import React from 'react'
import Resume from '../../assets/Resume_Mohd_Samiullah.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn' > Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        
    </div>
  )
}

export default CTA