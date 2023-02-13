import React from 'react'

const FeaturesCard = (props) => {
  return (
    <div className='features-card'>
        <div className='features-card-text'>
            <div className='span'></div>
            <h1>{props.title}</h1>
        </div>
        <div className="features-card-paragraph">
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default FeaturesCard