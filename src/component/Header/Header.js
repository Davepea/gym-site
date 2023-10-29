import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
import { HiOutlineBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai"



const Header = () => {
  const [close , setClose] = useState("boox1")

  const closeme = function(){
    setClose("boox1")
  }
  const openme = function(){
    setClose("boox2")
  }
  
  return (
    <div>
        <div className='navbar'>
              <h1>De <span>gymn</span></h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="#testimonial">testimonial</Link>

                </li>
                <li>
                  <Link to="#contact">contact</Link>

                </li>
              </ul>
              <div className='large-flex'>
                <Link to="/login">
                  sign in
                </Link>
                <Link to="/register" >
                  <button>
                    join us
                  </button>
                </Link>
                <div className='svg'>
                <HiOutlineBars2/>

                </div>
              </div>
        </div>
        <div className='navbar2'>
             <h1>De <span>gymn</span></h1>
             <div className='svg' onClick={openme}>
                <HiOutlineBars2/>

                </div>
              <div className={close}>
                <div onClick={closeme}>
                  <AiOutlineClose/>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="#testimonial">testimonial</Link>

                  </li>
                  <li>
                    <Link to="#conatct">contact</Link>

                  </li>
                </ul>
              </div>

        </div>
    </div>
  )
}

export default Header