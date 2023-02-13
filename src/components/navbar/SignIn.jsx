import React from 'react'



const SignIn = () => {
 
  const handleSubmit = (e) =>{
    const elements = e.target.elements
    e.preventDefault()

    if(elements.length) {
      console.log(elements.name, elements.value)
    }
  }

  const emailIsValid = (email) => {
      return (
       (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? true : false
    )}

  const handleEmail  = (e) => {
    if(emailIsValid(e.target.value)){
      document.getElementById("checkEmail").innerHTML = ""
    }else
    document.getElementById("checkEmail").innerHTML = "Email is incorrect"
  }

  const handlePassword  = (p) => {
    if(p.target.value.length < 8){
      document.getElementById("checkPassword").innerHTML = "Password is too short"
    }else{
      document.getElementById("checkPassword").innerHTML = ""
    }
  }
  
  return (
    <div className='form' onSubmit={handleSubmit}>
        <form action="#">
            <h2>Sign In</h2>
            <input type="email" placeholder='Enter your email' onKeyUp={handleEmail}/>
            <span id='checkEmail'></span>
            <input type="password" placeholder='Enter your password' onKeyUp={handlePassword}/>
            <span id='checkPassword'></span>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignIn