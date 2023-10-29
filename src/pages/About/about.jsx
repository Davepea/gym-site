import React from 'react'
import Layout from '../../component/Layout/Layout'
import "./About.css"

const about = () => {
  return (
   <div className='abt-page'>
     <Layout>
        <section className='hero-about'>
            <p>we come and hit ....all we want to do <br/> is help you discover</p>
            <h1>we are  DE GYM</h1>
            
        </section>
        <hr></hr>
        <section className='crup'>
            <p>&copy;2023</p>
            <p>we hit to discover</p>
        </section>
        <section className='story'>
            <hr/>
           <div className='sto1'>
            <div>
                <h2>our litle story</h2>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum voluptatem sunt quos consequuntur adipisci.

                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum voluptatem sunt quos consequuntur adipisci.

                    </p>
                </div>
           </div>
            <div className='imgCls'>
                <img src='https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1200' alt='img'/>
            </div>
        </section>
        <section className='clnt'>
            <p>
                Lorem ipsum dolor sit amet dipisicing elit. Tempore esse veritatis rem dolorem tempora expedita culpa facere, odio cupiditate officia sapiente id officiis nemo reprehenderit deserunt laborum aperiam placeat et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse veritatis rem dolorem, officia sapiente id officiis nemo reprehenderit deserunt laborum aperiam placeat et!

            </p>
            <button>
                contact us
            </button>
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
    </Layout>
   </div>
  )
}

export default about
