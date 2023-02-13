import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='container'>
      <div className='header-text'><h1>Let’s Build Something
      amazing with rP multidimensional company!</h1></div>
      <div className='header-form' >
        <div className='header-form-text'><p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p></div>
        <div className='header-form-input'>
          <input type="text" placeholder='Enter your email adress' />
          <button >Get started</button>
        </div>
      </div>
    </header>
  )
}

export default Header