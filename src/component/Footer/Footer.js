import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
       <footer>
        <div className="contact-us" id="contact">
          <div className="letter">
            <h1>
              DROP US <br/> A LINE
            </h1>
          </div>
          <div className="d-grid-4" >
            <div className='b-1'>
              <h3>LOCATION</h3>
              <p>rat king number1</p>
              <p>rat king number1</p>
              <p>rat king number1</p>
              <button> get direction </button>
            </div>
            <div className='b-1'>
              <h3>contact</h3>
              <div className='linkss'>
                <Link><span>loremipsumcolo</span></Link>
                <Link><span>loremipsumcolo</span></Link>
                <Link><span>loremipsumcolo</span></Link>
              </div>
            </div>
            <div className='b-2'>
              <h3>TRADING HOURS</h3>
              <div className='grid-me'>
                <div>
                  <p>Monday-Friday</p>
                  <p>Saturdays</p>
                  <p>Sundays</p>
                  <p>Public Monday</p>
                </div>
                  <div>
                    <p><u>08:45 to 17:00</u></p>
                    <p><u>09:00 to 14:00</u></p>
                    <p><u>Closed</u></p>
                    <p><u>Closed</u></p>
                   
                  </div>
              </div>
            </div>
            <div className='b-2'>
              <h3>stalk us</h3>
              <div className='linkss'>
                <Link><span>Facebook</span></Link>
                <Link><span>instagram</span></Link>
                <Link><span>Pinterest</span></Link>
                <Link><span>twitter</span></Link>
                
              </div>
            </div>

          </div>
            
        </div>
          <div className='foots'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi temporibus illo in atque qui unde nihil voluptatibus doloribus. Sunt aliquam, laborum aut molestias repellat harum neque exercitationem laboriosam nemo?
            </p>
            <div>
              DE GYM
            </div>
          </div>
          <div className='foot'>
          <div>
            <h3>join our community</h3>
            <input type='email' placeholder='Email' spellCheck/>
          </div>
          <div className='footchild'>
            <div>
              <Link><span>patern</span></Link>
              <Link><span>patern</span></Link>
              <Link><span>patern</span></Link>
            </div>
            <div>
              <Link><span>patern</span></Link>
              <Link><span>patern</span></Link>
              <Link><span>patern</span></Link>
            </div>
            <div>
              <Link><span>patern</span></Link>
              <Link><span>patern</span></Link>
              <Link><span>patern</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer