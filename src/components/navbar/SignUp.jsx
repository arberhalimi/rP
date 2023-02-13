import React from 'react'

const SignUp = () => {

  const handleForm = (e) =>{
    const elements = e.target.elements
    e.preventDefault()
  }

  const emailIsValid = (email) => {
    return (
     (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? true : false
  )}


  const handleEmail = (email) => {
    if(emailIsValid(email.target.value)){
      document.getElementById("checkEmail").innerHTML = ""
    }else
    document.getElementById("checkEmail").innerHTML = "Email is invalid"
  }

  const handlePassword = (password) => {
    if(password.target.value.length < 8){
      document.getElementById("checkPassword").innerHTML = "Password is too short"
    }else
    document.getElementById("checkPassword").innerHTML = ""
  }

  return (
    <div className='sign-up-form' onSubmit={handleForm}>
        <form action="#" className='align-self-center'>
            <h2>Sign Up</h2>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Surname'/>
            <div className="checkEmail">
              <input type="email" placeholder='Enter your email' className='email' onKeyUp={handleEmail} />
              <span id='checkEmail'></span>
            </div>
            <input type="password" placeholder='Enter your password' className='email' onKeyUp={handlePassword}/>
            <span id='checkPassword'></span>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp