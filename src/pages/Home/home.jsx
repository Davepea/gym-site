import  React from "react"
import Layout from '../../component/Layout/Layout'
import "./Home.css"
// import { AiOutlineArrowDown } from 'react-icons'
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imgyoga from "../../image/yoga1.jpg"
import imgcardio from "../../image/cardio.jpg"
import imgStrength from "../../image/strength.jpg"
import imgVascular from "../../image/vascular.jpg"
import imgfighter from "../../image/fighter.jpg"
import imgHro2 from "../../image/free4.jpg"


import vascular from "../../image/vascular.jpg"

const Home = () => {


  return (

    <div className="landing-page">
      <Layout title={'DE GYM - Homepage'}>
    <div>
      
      <section className="hero-section">
        <h1>Discover the power in </h1>
        <Link>
          <button>
            Join the discovery
          </button>
        </Link>
        <div className="go-down">
          <a href="#marq" className="wht">
          <FaArrowDown/>
          </a>
        </div>
      </section>
      <marquee className="marq" id="marq">
        hello *
        suit up *
        let go hit it *
        boys in head *
      </marquee>
      <section className="program">
        <h2>OUR programme</h2>
        <span>check out our list of activities... that helps to discover more</span>
        <div className="program-con">
          <div className="proBox">
            <div className="semiBox">
              <img src={imgyoga} alt="rat"/>
            </div>
           <div className="detail">
            <h3>Yoga</h3>
            <Link>
              <button>
                discover more
              </button>
            </Link>
           </div>
          </div>
          <div className="proBox">
            <div className="semiBox">
              <img src={imgcardio} alt="rat"/>
            </div>
           <div className="detail">
            <h3>CARDIO AND HIT</h3>
            <Link>
              <button>
                discover more
              </button>
            </Link>
           </div>
          </div>
          <div className="proBox">
            <div className="semiBox">
              <img src={imgStrength} alt="strength"/>
            </div>
           <div className="detail">
            <h3>STRENGTH TRAINING</h3>
            <Link>
              <button>
                discover more
              </button>
            </Link>
           </div>
          </div>
          <div className="proBox">
            <div className="semiBox">
              <img src={imgVascular} alt="rat"/>
            </div>
           <div className="detail">
            <h3>Cardiovascular</h3>
            <Link>
              <button>
                discover more
              </button>
            </Link>
           </div>
          </div>
          <div className="proBox">
            <div className="semiBox">
              <img src={imgfighter} alt="box"/>
            </div>
           <div className="detail">
            <h3>kick boxing</h3>
            <Link>
              <button>
                discover more
              </button>
            </Link>
           </div>
          </div>
        
          
        </div>

      </section>
      <section className="communtity">
        <div>
          <img src="https://images.pexels.com/photos/4164640/pexels-photo-4164640.jpeg?auto=compress&cs=tinysrgb&w=600" alt="tf"/>
        </div>
        <div className="flex-me">
          <h1>it's a big place to make your <span>discovery</span> </h1>
          <div>
            <div className="aft">
              <img src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=600" className="spimg" alt="tf"/>
            </div>
           
          </div>
          <div>
            <h1 className="right">we've got the best equipment and coah to help with your exercise</h1>
              
            </div>
        </div>
        <div className="my-rei" >
        <div >
          <img src={vascular} alt="tf"/>
          </div>
          <div>
          <img src={imgHro2} alt="tf"/>
        </div>
          
        </div>
      </section>
      <section className="plan-price">
        <div className="plnBox">
            
            <h1>1 day pass</h1>
            <h2>$10<sup>99</sup></h2>
            <div className="note">
              <p>Onetime access to all clubs</p>
              <p>Group Trainer</p>
              <p>Fitness and Orientation</p>
            </div>
            <button>
              select
            </button>
        </div>
        <div className="plnBox pln1">
            <h1>1 month pass</h1>
            <h2>$30<sup>99</sup></h2>
            <div className="note">
              <p>Group Trainer</p>
              <p>Discuss Fitness Goals</p>
              <p>Group classes</p>
              <p>Fitness and Orientation</p>
            </div>
            <button>
              select
            </button>
        </div>
        <div className="plnBox">
            <h1>1 week pass</h1>
            <h2>$21<sup>99</sup></h2>
            <div className="note">
              <p>a week access to all clubs</p>
              <p>Group Trainer</p>
              <p>Discuss Fitness Goals</p>
              <p>Fitness and Orientation</p>
            </div>
            <button>
              select
            </button>
        </div>
      </section>
      <section className="class">
       <div className="flexx">
       <h1>
          We bring you a new <br/> way of looking at fitness
        </h1>
        <p>view our available class, Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, labore aperiam. Dignissimos, assumenda atque at quod rem iusto distinctio. Adipisci.</p>
        <button>
          view classes
        </button>
       </div>
        <div className="flex2">
          <button>man class</button>
          <button>man class</button>
          <button>man class</button>
          <button>man class</button>
          <button>man class</button>
        </div>
      </section>
      <section className="ourTrainers">
        <h2>MEET OUR TRAINERS</h2>
        <p>we got the best trainers to help with your discovery, get to know them</p>
        <div className="flex">
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://images.pexels.com/photos/6456221/pexels-photo-6456221.jpeg?auto=compress&cs=tinysrgb&w=600" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          

          <div className="trainers">
            <div className="nameIMg">
              <img src="https://img.freepik.com/free-photo/male-boxer-posing-t-shirt-with-arms-crossed_23-2148426241.jpg?size=626&ext=jpg&uid=R105854835&ga=GA1.1.901226224.1697554676&semt=ais" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://images.pexels.com/photos/7207551/pexels-photo-7207551.jpeg?auto=compress&cs=tinysrgb&w=600" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://img.freepik.com/free-photo/woman-training-weightlifting-gym_23-2149278061.jpg?size=626&ext=jpg&uid=R105854835&ga=GA1.1.901226224.1697554676&semt=ais" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://dr.savee-cdn.com/things/thumbnails/6/1/418f296fe10f1b5694e499.webp" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://img.freepik.com/free-photo/young-woman-boxing-gym_23-2147915530.jpg?size=626&ext=jpg&uid=R105854835&ga=GA1.1.901226224.1697554676&semt=ais" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          <div className="trainers">
            <div className="nameIMg">
              <img src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=600" alt="trainer"/>
            </div>
            <div className="thNmae">
              <p>martial art boss</p>
              <h3>John Do</h3>
            </div>
          </div>
          

        </div>
      </section>
      <section className="testimony" id="testimonial">
        <h2>WHAT THEY SAY</h2>
        <p>this what our cutomers say about us</p>
        <div className="flex overauto">
          <div className="testBox frt">
            <h3>"</h3>
            <p>this might be so funny to say though, but i tell DE GYM is a cool place to be .....i struggle so much to face my bullies and because of that i went to build up my muscules ....but funny enough ... after my first week i got a different orientation</p>
            <div className="flx">
            <div className="profile">
              <img src="https://images.pexels.com/photos/4757976/pexels-photo-4757976.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

            </div>
            <div className="proName">
                <h4>jeosa atlanta</h4>
                <span>wed designer</span>
              </div>

            </div>
          </div>
          <div className="testBox">
            <h3>"</h3>
            <p>this might be so funny to say though, but i tell DE GYM is a cool place to be .....i struggle so much to face my bullies and because of that i went to build up my muscules ....but funny enough ... after my first week i got a different orientation</p>
            <div className="flx">
              <div className="profile">
                <img src="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

              </div>
              <div className="proName">
                <h4>jeosa atlanta</h4>
                <span>wed designer</span>
              </div>
          </div>
            </div>
          <div className="testBox">
            <h3>"</h3>
            <p>this might be so funny to say though, but i tell DE GYM is a cool place to be .....i struggle so much to face my bullies and because of that i went to build up my muscules ....but funny enough ... after my first week i got a different orientation</p>
            <div className="flx">
              <div className="profile">
                <img src="https://img.freepik.com/free-photo/man-doing-sport_181624-32005.jpg?size=626&ext=jpg&uid=R105854835&ga=GA1.1.901226224.1697554676&semt=ais" className="proImg" alt="trainer"/>
              </div>
              <div className="proName">
                <h4>jeosa atlanta</h4>
                <span>wed designer</span>
              </div>
            </div>
          </div>
          <div className="testBox">
            <h3>"</h3>
            <p>this might be so funny to say though, but i tell DE GYM is a cool place to be .....i struggle so much to face my bullies and because of that i went to build up my muscules ....but funny enough ... after my first week i got a different orientation</p>
            <div className="flx">
            <div className="profile">
              <img src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

            </div>

            <div className="proName">
                <h4>jeosa atlanta</h4>
                <span>wed designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="supCommunity">
        <div className="dig2">
        <h2>supportive community</h2>
        <p>we have a community of our own who can be a family and help you on this journey</p>
        <div>
        <button>
          Join now
        </button>
        </div>
        </div>
        <div className="dig">
        <div className="profile1">
              <img src="https://images.pexels.com/photos/4757976/pexels-photo-4757976.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

            </div>
        <div className="profile1">
              <img src="https://img.freepik.com/free-photo/man-doing-sport_181624-32005.jpg?size=626&ext=jpg&uid=R105854835&ga=GA1.1.901226224.1697554676&semt=ais" className="proImg" alt="trainer"/>

            </div>
        <div className="profile1">
              <img src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

            </div>
        <div className="profile1">
              <img src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

            </div>
        <div className="profile1">
              <img src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" className="proImg" alt="trainer"/>

            </div>
        
        </div>

      </section>
      <section className="instagram">
        <div className="d-flex">
          <h2>On instagram</h2>
          <h2 className="color">
            #joinde_gym
          </h2>
        </div>
        <p>
          check out our instagram post to learn more about our past event and programs
        </p>
        <div className="carousel">
          <div className="insta">
            <img src="https://images.pexels.com/photos/6389859/pexels-photo-6389859.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
          <div className="insta">
            <img src="https://images.pexels.com/photos/17939409/pexels-photo-17939409/free-photo-of-man-practicing-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
          <div className="insta">
            <img src="https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
          <div className="insta">
            <img src="https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
          <div className="insta">
            <img src="https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
          <div className="insta">
            <img src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
          <div className="insta">
            <img src="https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="th"/>
          </div>
        
          
        </div>

      </section>
     

    </div>
    </Layout>
    </div>
  )
}

export default Home
