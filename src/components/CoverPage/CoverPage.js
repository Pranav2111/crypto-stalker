import React from 'react'
import '../css/coverpage.css'
import Carousel from './Carousel'
const CoverPage = () => {
  return (
    <div className='cover'>
      <div className='container'>
        <div className='tagline'>
          <h1 className='tagline1'>
            Crypto-Stalker
          </h1>
          <h3 className='tagline2'>
            Grab your crypto now 💫 
          </h3>
        </div>
        <div className='slider_cont'>
         <Carousel/>
        </div>
        
      </div>
    </div>
  )
}

export default CoverPage