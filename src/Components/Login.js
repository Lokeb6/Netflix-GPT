import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [showSignup,setshowSignup] = useState(false)
  const handleClick = () =>{
    setshowSignup(!showSignup)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt = "logo"/>
      </div>
      <form className='absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='py-4 font-bold text-3xl'>{showSignup? "Sign up" : "Sign in"}</h1>
        {showSignup && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
        <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{showSignup? "Sign up" : "Sign in"}</button>
        <p className='py-4 cursor-pointer'  onClick={handleClick}>{showSignup? "Already Registered? Sign in now." : "New to Netflix? Sign up now." }</p>
      </form>
    </div>
    
  )
}

export default Login