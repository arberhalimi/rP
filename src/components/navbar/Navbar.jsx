import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import SignIn from './SignIn'
import SignUp from './SignUp'

const Navbar = () => {
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)

  function handleChangeSignIn () { 
    setSignIn(!signIn)
  }

  function handleChangeSignUp () { 
    setSignUp(!signUp)
  }
  return (
    <div className="navbar">
        <nav className='container'>
        <div className='navbar-logo'>rP</div>
        <div className='navbar-menu'>
          <ul>         
            <li><Link to="/" className='a'>home</Link></li>
            <li><Link to="/About" className='a'>about</Link></li>
            <li><Link to="/AllBlogs" className='a'>blogs</Link></li>
            <li><Link to="/Services" className='a'>services</Link></li>
          </ul>
        </div>
        <div className='navbar-form'>
          <button className='sign-in' onClick={handleChangeSignIn}>sign in</button>
          <button className='sign-up 'onClick={handleChangeSignUp}>sign up</button>
        </div>
      </nav>
      <div className="sing-in-form">
        {
          signIn ? <SignIn /> : ""
        }
      </div>
      <div className="sing-up-form">
        {
          signUp ? <SignUp /> : ""
        }
      </div>
    </div>
  )
}

export default Navbar