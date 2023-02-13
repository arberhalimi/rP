import React from 'react'
import "./services.css"

const PricingPackage = (props) => {
  return (
    <div className='PricingPackage'>
        <h3>{props.tipi}</h3>
        <span>{props.price}</span>
        <p>{props.categoriesFirst}</p>
        <p>{props.categoriesSecond}</p>
        <p>{props.categoriesThird}</p>
        <p>{props.categoriesFourth}</p>
    </div>
  )
}

export default PricingPackage