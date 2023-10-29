import React from 'react'
import "./register.css"
import { BiLogoFacebookCircle ,BiLogoApple } from "react-icons/bi"
import { AiOutlineGoogle } from "react-icons/ai"

const login = () => {
  return (
    <div className='loginpage'>
      <div className='login'>
        <form>
          <h2>Register </h2>
          
          <input type='text' placeholder='Enter your name'/>
          <input type='text' placeholder='Enter your nickname'/>
          <input type='email' placeholder='Enter your email'/>
          <input type='password' placeholder='Enter your password'/>
          <input type='password' placeholder='Confirm your password'/>
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
        <h1>welcome <br/> to DE GYM</h1>
        <p>we welcome you to one of the best gym in town </p>

      </div>
      
    </div>
  )
}

export default login
