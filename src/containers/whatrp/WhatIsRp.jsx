import React from 'react'
import "./what.css"
import WhatIsRpCard from './WhatIsRpCard'

const WhatIsRp = () => {
  return (
    <section className='container about-rp'>
      <div className='about-us'>
        <div className='about-us-title'>
          <span></span>
          <h2>Cfare eshte rP?</h2>
        </div>
        <div className='about-us-text'>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
      </div>
      <div className='about-us-explore'>
        <h1>The possibilities are beyond your imagination</h1>
        <button>Explore the library</button>
      </div>
      <div className='about-us-areas'>
        <WhatIsRpCard 
        title={"Chatbots"}
        paragraph={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}
        />
        <WhatIsRpCard 
        title={"Knowledgebase"}
        paragraph={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. "}
        />
        <WhatIsRpCard 
        title={"Education"}
        paragraph={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."}
        />
      </div>
    </section>
  )
}

export default WhatIsRp