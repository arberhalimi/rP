import React from 'react'

const WhatIsRpCard = (props) => {
  return (
    <div className="about-rp-card">
      <div className='span'></div>
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default WhatIsRpCard