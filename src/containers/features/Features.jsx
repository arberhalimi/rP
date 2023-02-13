import React from 'react'
import { Link } from 'react-router-dom'
import "./features.css"
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <section className='container features'>
      <div className='features-title'>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id modi cumque aliquid eligendi.</h1>
        <a>Request Early Access to Get Started</a>
      </div>
      <div className='features-content'>
        <FeaturesCard 
          title={"Improving end distrusts instantly "}
          paragraph={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}
        />
        <FeaturesCard 
          title={"Improving end distrusts instantly "}
          paragraph={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}
        />
        <FeaturesCard 
          title={"Improving end distrusts instantly "}
          paragraph={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}
        />
        <FeaturesCard 
          title={"Improving end distrusts instantly "}
          paragraph={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}
        />
      </div>
    </section>
  )
}

export default Features