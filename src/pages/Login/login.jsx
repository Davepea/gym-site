import React from 'react'
import "./login.css"
import { BiLogoFacebookCircle ,BiLogoApple } from "react-icons/bi"
import { AiOutlineGoogle } from "react-icons/ai"

const login = () => {
  return (
    <div className='loginpage'>
      <div className='login'>
        <form>
          <h2>Login </h2>
          
          <input type='email' placeholder='Enter your email'/>
          <input type='password' placeholder='Enter your password'/>
          <input type='submit'/>
          
          


        </form>
        <p>or log in with</p>
        <div className='socio'>
         <div>
            <AiOutlineGoogle/>
          </div>
          <div>
            <BiLogoFacebookCircle/>
          </div>

          <div>
            <BiLogoApple/>
          </div>
        </div>
      </div>
      <div className='grid'>
        <h1>welcome back<br/> to DE GYM</h1>
        <p>we welcome you back to one of the best gym in town </p>

      </div>
      
    </div>
  )
}

export default login
