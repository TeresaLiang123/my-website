// import './App.css';
// import './index.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Tabs from '../components/tabs'
import Description from '../components/description';
import Social from '../components/social';
import Picture from '../components/picture';
import ReactCardFlip from 'react-card-flip';

function About() {
  const [isFlipped, setIsFlipped] = useState(false) 
  // const [isNextPage, setIsNextPage] = useState(false)

  const flip = () => {
    setIsFlipped(!isFlipped)
  }

  // const next = () => {
  //   setIsNextPage(!isNextPage)
  // }

  return (
    <div className="App">
      <div className='tabs'>
        <Tabs></Tabs>
      </div>
        <ReactCardFlip className= "black-outline" flipDirection='horizontal' isFlipped={isFlipped}>
              <div className="card" onClick={flip}>
                    <div className="descriptionId">
                    <span className="identity">Identification</span>
                    <Description></Description>
                    <Social></Social>
                    </div>
                    <Picture className="picture"></Picture>
              </div>
              <div className="card" onClick={flip}>
                    <div className="descriptionId descriptionScroll">

                    <p className="aboutMeDescription">
                    Hello, my name is Teresa. My interest in technology started at a young age with
                    a fascination for the internet. Growing up, I surrounded myself with electronics,
                    using them almost every day. I used them as a source of entertainment and a tool
                    for my schoolwork.
                    <br></br>
                    <br></br>
                    In high school, I decided to take a computer science class as I started to gain
                    interest in computers since it was a tool I used on a daily basis. I learned
                    the basics of computing, such as converting bits to decimals, using if-else
                    statements, variables, and building games on Scratch. I enjoyed working on
                    the small project assignments on Scratch and the sense of satisfaction I felt
                    when my code worked and I could see the results of what I created.
                    <br></br>
                    <br></br>
                    That experience led me to pursue a degree in Computer Science at Northeastern
                    University. Despite the warnings about the challenges of this field, I saw it
                    as an opportunity to grow. In fact, over the course of 4-5 years of commitment,
                    I developed new skills and enjoyed the critical thinking, problem-solving, and
                    creativity involved in programming.
                    <br></br>
                    <br></br>
                    Now, as a graduate with a Bachelor's degree in Computer Science, I am eager to
                    continue this journey in a professional role. I am looking for opportunities
                    that challenge me, allow me to keep learning, and enable me to further develop
                    my passion for programming.
                    </p>
                    </div>
                    <Picture className="picture"></Picture>
              </div>
        </ReactCardFlip>
        <img onClick={flip} className="sign" src='./woodenSign.png'></img>
        <p className='signWords'>Click to flip!</p>
    </div>
  );
}

export default About;
