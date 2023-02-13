import React from 'react'
import "./services.css"

const ServicesCard = (props) => {
  return (
    <div className='serviceCard'>
        <h2>{props.title}</h2>
        <h3>{props.paragraph}</h3>
    </div>
  )
}

export default ServicesCard